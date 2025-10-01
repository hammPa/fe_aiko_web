<script>
  import { onMount } from "svelte";
  import monacoDefined from "../helpers/monacoDefined";

  const API_URL = import.meta.env.VITE_API_URL;
  
  
  let inputEditorContainer; // DOM container untuk Monaco Editor
  let inputEditor;          // instance editor
  let inputCode = `// Write your code here
var x = 10;
print(x);
`;
let outputCode = "; Assembly output will be shown here after transpilation";
let consoleOutput = "";

onMount(async () => {
    inputEditor = await monacoDefined(inputEditorContainer, inputCode);
    outputCode = "; Assembly output will be shown here after transpilation";
    consoleOutput = "";
  });

  async function transpile() {
    try {
      outputCode = "; Transpiling...";
      consoleOutput = "Transpiling...\n";

      // ambil value dari editor
      const cleanedCode = inputEditor.getValue()
        .split("\n")
        .map(line => line.split("//")[0]) // ambil bagian sebelum `//`
        .join("\n");

      const res = await fetch(`${API_URL}/api/transpile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: cleanedCode }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Transpile has failed");
      }

      const data = await res.json();
      outputCode = data.asm;       // hasil asm
      consoleOutput = data.logs;  // logs dari compiler
    } catch (e) {
      outputCode = `Error: ${e.message}\n`;
      consoleOutput = `Error: ${e.message}\n`;
    }
  }

  async function runASM() {
    consoleOutput = "▶ Program belum dijalankan...\n";
    await new Promise(r => setTimeout(r, 800));
    consoleOutput += "Program exited with code 0";
  }
</script>









<div class="min-h-screen bg-gray-100 text-gray-900 p-8">
  <!-- Title -->
  <h1 class="text-4xl font-extrabold text-center mb-12 tracking-tight text-gradient-to-r from-purple-500 via-pink-500 to-red-500">
    Aiko Playground
  </h1>

  <!-- Editors -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Input -->
    <div class="lg:col-span-1 bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col overflow-hidden">
      <div class="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 class="text-sm font-semibold tracking-wide text-blue-600 uppercase">
          Input (Aiko)
        </h2>
      </div>
      <div bind:this={inputEditorContainer} class="flex-1 min-h-[600px] bg-gray-50 p-2 rounded-b-2xl shadow-inner"></div>
      <div class="p-4 flex gap-3 border-t border-gray-200 bg-gray-50">
        <button
          on:click={transpile}
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Transpile
        </button>
        <button
          on:click={runASM}
          class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Run
        </button>
      </div>
    </div>

    <!-- Output -->
    <div class="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col overflow-hidden">
      <div class="p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-purple-100">
        <h2 class="text-sm font-semibold tracking-wide text-purple-600 uppercase">
          Output (NASM-x86_32)
        </h2>
      </div>
      <textarea
        bind:value={outputCode}
        readonly
        class="flex-1 p-4 font-mono text-base resize-none overflow-auto bg-gray-50 min-h-[600px] rounded-b-2xl shadow-inner"
        style="font-family: 'Fira Code', monospace;"
      ></textarea>
    </div>
  </div>

  <!-- Console -->
  <div class="mt-10 bg-white rounded-2xl border border-gray-200 shadow-inner overflow-hidden">
    <div class="p-4 border-b border-gray-200 bg-gradient-to-r from-emerald-50 to-emerald-100">
      <h2 class="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
        Console
      </h2>
    </div>
    <div
      class="p-4 font-mono text-sm h-48 overflow-y-auto whitespace-pre-line bg-gray-50 text-gray-900"
      style="font-family: 'Fira Code', monospace;"
    >
      {consoleOutput || "Output program akan muncul di sini setelah Run"}
    </div>
  </div>
</div>

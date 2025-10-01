export default function monacoDefined(container, code) {
    return new Promise(resolve => {
      const require = window.require
      require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.53.0/min/vs" } });
  
      require(["vs/editor/editor.main"], function () {
        monaco.languages.register({ id: "aiko" });
  
        monaco.languages.setMonarchTokensProvider("aiko", {
          tokenizer: {
            root: [
              [/#.*/, "comment"],
              [/\/\/.*/, "comment"],
              [/\b(var|fun|if|elif|else|for|print)\b/, "keyword"],
              [/\b(true|false)\b/, "constant.boolean"],
              [/".*?"/, "string"],
              [/\d+(\.\d+)?/, "number"],
              [/[\+\-\*\/=<>!]+/, "operator"],
              [/(\.\.)/, "operator.range"]
            ]
          }
        });
  
        monaco.editor.defineTheme("aiko-white", {
          base: "vs",
          inherit: true,
          rules: [
            { token: "keyword", foreground: "0000FF" },
            { token: "constant.boolean", foreground: "AA00AA" },
            { token: "number", foreground: "09885A" },
            { token: "string", foreground: "B22222" },
            { token: "comment", foreground: "008000", fontStyle: "italic" },
            { token: "operator.range", foreground: "FF4500" }
          ],
          colors: {}
        });
  
        const editor = monaco.editor.create(container, {
          value: code,
          language: "aiko",
          theme: "aiko-white",
          automaticLayout: true,
          minimap: { enabled: false }
        });
  
        resolve(editor);
      })
    })
  }
  
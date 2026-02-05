<script>
    import { base } from '$app/paths';
    import { getContext } from 'svelte'; // 1. Import getContext
    import DocCodeBlock from '$lib/components/DocCodeBlock.svelte';
    import DocNavigation from '$lib/components/DocNavigation.svelte';

    // 2. Ambil Context Tema (Sama seperti di Playground)
    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);

    let nextStep = {
        title: "Variables", 
        href: "/docs/variables",
        desc: "Tipe data dasar dan mutabilitas." 
    };

    const codeExample = `fun main() {
  # Deklarasi variable
  var message = [10, 99, 676, 444];
  
  # Loop syntax
  for item in message when item > 100 {
      print(message);
  }
}

main();`;
</script>

<svelte:head>
    <title>Introduction - Aiko Documentation</title>
    <meta name="description" content="Aiko Programming Language: Static typing, native performance, modern memory management." />
</svelte:head>

<div class="min-h-screen transition-colors duration-300 {isDark ? 'bg-[#0f0f12] text-zinc-100' : 'bg-white text-zinc-900'}">
    
    <div class="max-w-4xl mx-auto space-y-16 pb-20 px-6 pt-10">

        <header class="space-y-6 border-b pb-10 transition-colors {isDark ? 'border-zinc-800' : 'border-zinc-200'}">
            <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider 
                    {isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-100 text-rose-600'}">
                    v0.1.0 Alpha
                </span>
            </div>
            
            <h1 class="text-4xl font-extrabold tracking-tight sm:text-6xl {isDark ? 'text-white' : 'text-zinc-900'}">
                The Aiko Programming Language
            </h1>
            
            <p class="text-xl leading-relaxed max-w-2xl {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Bahasa pemrograman dinamis yang menjembatani logika tingkat tinggi dengan instruksi mesin. 
                Dirancang untuk menghasilkan Assembly yang bersih dan terprediksi guna mempermudah pemahaman arsitektur komputer.
            </p>
            
            <div class="flex flex-wrap gap-4 pt-4">
                <a href="/docs/variables" class="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-rose-600/20 transition-all hover:bg-rose-500 hover:-translate-y-1">
                    Get Started
                </a>
                
                <a href="https://playground.aiko-lang.org" target="_blank" class="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-base font-bold shadow-sm transition-all
                    {isDark 
                        ? 'border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700' 
                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 hover:border-zinc-300'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                    Open Playground
                </a>
            </div>
        </header>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="group rounded-2xl border p-6 transition-all 
                {isDark 
                    ? 'border-zinc-800 bg-zinc-900/30 hover:border-rose-500/30 hover:bg-rose-500/5' 
                    : 'border-zinc-200 bg-white hover:border-rose-200 hover:bg-rose-50/30'}">
                <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg {isDark ? 'bg-rose-500/10 text-rose-400' : 'bg-rose-100 text-rose-600'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 class="text-lg font-bold {isDark ? 'text-zinc-100' : 'text-zinc-900'}">Native Performance</h3>
                <p class="mt-2 text-sm leading-relaxed {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                    Dikompilasi langsung ke Assembly (NASM). Tanpa Virtual Machine, tanpa overhead runtime yang berat.
                </p>
            </div>

            <div class="group rounded-2xl border p-6 transition-all
                {isDark 
                    ? 'border-zinc-800 bg-zinc-900/30 hover:border-indigo-500/30 hover:bg-indigo-500/5' 
                    : 'border-zinc-200 bg-white hover:border-indigo-200 hover:bg-indigo-50/30'}">
                <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg {isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 class="text-lg font-bold {isDark ? 'text-zinc-100' : 'text-zinc-900'}">Smart Memory</h3>
                <p class="mt-2 text-sm leading-relaxed {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                    Pendekatan manajemen memori novel yang aman seperti Rust, namun tanpa kurva belajar "borrow checker".
                </p>
            </div>

            <div class="group rounded-2xl border p-6 transition-all
                {isDark 
                    ? 'border-zinc-800 bg-zinc-900/30 hover:border-emerald-500/30 hover:bg-emerald-500/5' 
                    : 'border-zinc-200 bg-white hover:border-emerald-200 hover:bg-emerald-50/30'}">
                <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg {isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 class="text-lg font-bold {isDark ? 'text-zinc-100' : 'text-zinc-900'}">Familiar Syntax</h3>
                <p class="mt-2 text-sm leading-relaxed {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                    Terinspirasi dari C dan JavaScript. Jika Anda bisa menulis JS, Anda bisa menulis Aiko.
                </p>
            </div>
        </section>

        <article class="prose prose-lg max-w-none transition-colors 
            prose-headings:font-bold 
            {isDark 
                ? 'prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-100 prose-a:text-rose-400 hover:prose-a:text-rose-300' 
                : 'prose-zinc prose-a:text-rose-600 hover:prose-a:text-rose-700'}">
            
            <h2>The Philosophy</h2>
            <p class="text-justify">
                Compiler modern (seperti GCC atau Clang) didesain untuk kecepatan eksekusi, bukan untuk pemahaman manusia. Saat belajar mikroprosesor, seringkali kita bingung melihat output Assembly yang "diacak-acak" oleh optimasi agresif, menghilangkan korelasi dengan kode aslinya.
            </p>
            <p class="text-justify">
                Filosofi Aiko adalah <strong>Transparansi di atas Optimasi</strong>. Kami percaya bahwa untuk belajar, Anda membutuhkan alat yang jujur. Aiko membiarkan Anda menulis kode dengan ergonomi modern, namun menghasilkan Assembly yang lurus dan mudah dibaca, membuka "kotak hitam" bagaimana software sebenarnya berbicara dengan hardware.
            </p>

            <div class="not-prose my-8 rounded-xl border-l-4 border-amber-500 p-4 transition-colors
                {isDark ? 'bg-amber-500/10' : 'bg-amber-50/50'}">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm font-bold uppercase tracking-wide {isDark ? 'text-amber-500' : 'text-amber-800'}">Development Status</h3>
                        <div class="mt-1 text-sm {isDark ? 'text-amber-200/80' : 'text-amber-800/80'}">
                            <p>Aiko saat ini berada dalam tahap <strong>Alpha</strong>. Fitur inti sudah stabil, namun API standar library mungkin mengalami perubahan (breaking changes) menuju versi 1.0.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>A Quick Look</h3>
            <p>Aiko dirancang agar mudah dibaca. Berikut adalah contoh program sederhana:</p>

            <div class="not-prose my-6">
                <DocCodeBlock code={codeExample} filename="main.aiko" />

                <div class="mt-2 rounded-xl border p-4 font-mono text-xs transition-colors
                    {isDark ? 'bg-black/30 border-white/10' : 'bg-zinc-50 border-zinc-200'}">
                    <div class="flex items-center gap-2 mb-2 {isDark ? 'text-zinc-500' : 'text-zinc-500'}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        <span>Output</span>
                    </div>
                    <div class="font-bold {isDark ? 'text-emerald-400' : 'text-emerald-600'}">676</div>
                    <div class="font-bold {isDark ? 'text-emerald-400' : 'text-emerald-600'}">444</div>
                </div>
            </div>
            
        </article>

        <DocNavigation
            next={nextStep}
        />

    </div>
</div>
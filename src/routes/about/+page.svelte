<script>
    import { getContext } from 'svelte';
    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);

    const roadmap = [
        { 
            status: "done", 
            date: "Sep 2024", 
            title: "The Spark", // Lebih puitis untuk ide awal
            desc: "Ide awal Aiko lahir dari frustrasi akan kompleksitas saat belajar mikroprosesor." 
        },
        { 
            status: "done", 
            date: "Jan 2025", 
            title: "Compiler Prototype", // Jelas bahwa ini masih development awal
            desc: "Compiler pertama berhasil berjalan secara lokal (Proof of Concept)." 
        },
        { 
            status: "done", 
            date: "Apr 2025", 
            title: "Web Debut", // Menggantikan Inception yg duplikat. Menandakan masuk web.
            desc: "Compiler di-porting ke web dalam bentuk Playground eksperimental." 
        },
        { 
            status: "done", 
            date: "Aug 2025", 
            title: "Public Alpha", 
            desc: "Rilis Playground pertama untuk testing publik dan feedback komunitas." 
        },
        { 
            status: "current", 
            date: "Dec 2025", 
            title: "Alpha Refinement", // 'Revisi' diganti 'Refinement' (penyempurnaan)
            desc: "Optimasi arsitektur compiler dan perbaikan bug berdasarkan feedback." 
        },
        { 
            status: "future", 
            date: "-", 
            title: "Ecosystem Expansion", // Std Lib = Ekosistem
            desc: "Implementasi Standard Library lengkap: I/O, Networking, dan Async." 
        },
        { 
            status: "future", 
            date: "-", 
            title: "Stable Release", 
            desc: "Aiko v1.0 siap untuk production environment." 
        },
    ];
</script>

<svelte:head>
    <title>About - Aiko Language</title>
</svelte:head>

<div class="py-20 px-6">
    <div class="max-w-4xl mx-auto space-y-20">

        <section class="text-center space-y-6">
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight {isDark ? 'text-white' : 'text-zinc-900'}">
                The Transparent <span class="text-rose-600">Compiler</span>.
            </h1>
            <p class="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Sebuah eksperimen edukasi untuk memahami "Magic" di balik compiler. Bandingkan logika High-Level dengan instruksi Low-Level secara instan tanpa optimasi yang membingungkan.
            </p>
        </section>

        <section class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-4 text-justify">
                <h2 class="text-2xl font-bold {isDark ? 'text-zinc-100' : 'text-zinc-900'}">The Origin Story</h2>
                <div class="space-y-4 {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                    <p>
                        Semuanya bermula di kelas Mikroprosesor. Sebagai mahasiswa Teknik Informatika yang sudah terbiasa dengan C, C++, dan Python, saya merasa kesulitan saat harus turun memahami bahasa Assembly yang abstrak.
                    </p>
                    <p>
                        Saya mencoba belajar dengan cara mengompilasi kode C ke Assembly, berharap menemukan polanya. Namun, compiler modern melakukan optimasi agresif yang membuat output Assembly-nya terlalu rumit untuk dipahami mahasiswa.
                    </p>
                    <p>
                        <strong>Aiko</strong> lahir dari kebutuhan tersebut: sebuah jembatan edukasi. Saya ingin menciptakan bahasa yang memungkinkan kita menulis logika <em>high-level</em>, namun menghasilkan instruksi <em>low-level</em> (Assembly) yang transparan, bersih, dan mudah dipelajari.
                    </p>
                </div>
            </div>
            
            <div class="aspect-video rounded-2xl border flex items-center justify-center relative overflow-hidden
                {isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}">
                <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <span class="text-4xl font-bold opacity-10 tracking-widest uppercase">Philosophy</span>
            </div>
        </section>

        <section class="border-t pt-16 {isDark ? 'border-zinc-800' : 'border-zinc-200'}">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold {isDark ? 'text-white' : 'text-zinc-900'}">The Roadmap</h2>
                <p class="mt-2 {isDark ? 'text-zinc-500' : 'text-zinc-500'}">Perjalanan Aiko menuju v1.0</p>
            </div>

            <div class="relative max-w-2xl mx-auto">
                <div class="absolute left-8 top-0 bottom-0 w-0.5 {isDark ? 'bg-zinc-800' : 'bg-zinc-200'}"></div>

                <div class="space-y-10">
                    {#each roadmap as item}
                        <div class="relative flex gap-8 group">
                            <div class="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-4 transition-colors
                                {item.status === 'done' 
                                    ? (isDark ? 'border-[#0f0f12] bg-emerald-500 text-white' : 'border-white bg-emerald-500 text-white')
                                    : item.status === 'current'
                                        ? (isDark ? 'border-[#0f0f12] bg-rose-600 text-white animate-pulse' : 'border-white bg-rose-600 text-white animate-pulse')
                                        : (isDark ? 'border-[#0f0f12] bg-zinc-800 text-zinc-500' : 'border-white bg-zinc-100 text-zinc-400')}">
                                
                                {#if item.status === 'done'}
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                {:else if item.status === 'current'}
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                {:else}
                                    <div class="w-3 h-3 rounded-full bg-current opacity-50"></div>
                                {/if}
                            </div>

                            <div class="pt-3 pb-8">
                                <span class="text-xs font-bold uppercase tracking-wider {isDark ? 'text-zinc-500' : 'text-zinc-400'}">
                                    {item.date}
                                </span>
                                <h3 class="text-xl font-bold mt-1 {isDark ? 'text-zinc-200 group-hover:text-rose-400' : 'text-zinc-900 group-hover:text-rose-600'} transition-colors">
                                    {item.title}
                                </h3>
                                <p class="mt-2 {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <section class="rounded-3xl p-8 border text-center
            {isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}">
            <h3 class="text-xl font-bold {isDark ? 'text-white' : 'text-zinc-900'}">Join the Development</h3>
            <p class="mt-2 mb-6 {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Aiko adalah proyek Open Source. Kami menerima kontribusi dalam bentuk kode, dokumentasi, atau sekadar feedback.
            </p>
            <a href="https://github.com/hammPa/aiko_js" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-500 hover:underline">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Visit GitHub Repository
            </a>
        </section>

    </div>
</div>
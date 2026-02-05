<script>
    import { getContext } from 'svelte';
    import favicon from '$lib/assets/favicon.svg'; // Opsional jika ingin icon khusus

    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);

    const features = [
        {
            title: "Readable Assembly",
            // Poin utama: Outputnya manusiawi, bukan spaghetti code hasil optimasi.
            desc: "Compiler C modern mengacak kode demi performa. Aiko menghasilkan Assembly (NASM) yang bersih, terstruktur, dan mudah dipahami baris demi baris.",
            icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", // Eye Icon (Visibility)
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        },
        {
            title: "No 'Magic' Optimizations",
            // Menjawab masalah "compiler terlalu tinggi optimasinya".
            desc: "Apa yang Anda tulis, itu yang dieksekusi CPU. Tidak ada penghapusan loop atau reordering instruksi yang membingungkan saat debugging.",
            icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", // Beaker/Magic (Science over Magic)
            color: "text-rose-400",
            bg: "bg-rose-400/10"
        },
        {
            title: "Bare-Metal Ready",
            // Relevan untuk mikroprosesor/embedded.
            desc: "Tanpa Virtual Machine (VM), tanpa Garbage Collector (GC). Kode Anda berjalan langsung di atas hardware dengan kontrol memori penuh.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            title: "Familiar Syntax",
            // Memudahkan transisi dari Python/JS.
            desc: "Jangan habiskan waktu memikirkan sintaks yang ribet. Gunakan gaya penulisan modern (mirip TS/Go) untuk konsep sistem tingkat rendah.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", // Code Brackets
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            title: "Visual Learning",
            // Menjual fitur Playground-nya.
            desc: "Playground interaktif yang menampilkan kode Aiko dan hasil Assembly secara berdampingan. Lihat dampak setiap baris kode secara instan.",
            icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", // Monitor/Desktop
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        },
        {
            title: "Manual Memory Mastery",
            // Fokus pendidikan: Paham stack & heap.
            desc: "Pahami konsep Stack, Heap, dan Pointer dengan cara yang aman. Aiko memaksa Anda mengerti manajemen memori, bukan menyembunyikannya.",
            icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", // Box/Structure
            color: "text-orange-400",
            bg: "bg-orange-400/10"
        }
    ];
</script>

<svelte:head>
    <title>Features - Aiko Language</title>
</svelte:head>

<div class="py-20 px-6">
    <div class="max-w-6xl mx-auto space-y-16">
        
        <div class="text-center space-y-4 max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight {isDark ? 'text-white' : 'text-zinc-900'}">
                Why choose <span class="text-rose-600">Aiko</span>?
            </h1>
            <p class="text-xl {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Didesain untuk mengisi celah antara bahasa tingkat rendah yang kompleks dan bahasa tingkat tinggi yang lambat.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each features as feat}
                <div class="group relative rounded-3xl p-8 transition-all duration-300 border hover:-translate-y-1
                    {isDark 
                        ? 'bg-[#18181b] border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50' 
                        : 'bg-white border-zinc-200 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5'}">
                    
                    <div class="h-12 w-12 rounded-xl flex items-center justify-center mb-6 {feat.bg} {feat.color}">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d={feat.icon} />
                        </svg>
                    </div>

                    <h3 class="text-xl font-bold mb-3 {isDark ? 'text-white' : 'text-zinc-900'}">
                        {feat.title}
                    </h3>
                    <p class="leading-relaxed {isDark ? 'text-zinc-400' : 'text-zinc-500'}">
                        {feat.desc}
                    </p>
                </div>
            {/each}
        </div>

        <div class="rounded-3xl p-10 md:p-16 text-center border relative overflow-hidden
            {isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-rose-50 border-rose-100'}">
            
            <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500 rounded-full blur-[100px]"></div>
            </div>

            <div class="relative z-10 space-y-6">
                <h2 class="text-3xl font-bold {isDark ? 'text-white' : 'text-zinc-900'}">
                    Ready to feel the speed?
                </h2>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/" class="inline-flex items-center justify-center rounded-xl bg-rose-600 px-8 py-3 text-base font-bold text-white shadow-lg shadow-rose-600/20 transition-all hover:bg-rose-700 hover:scale-105">
                        Start Coding
                    </a>
                    <a href="/docs" class="inline-flex items-center justify-center rounded-xl border px-8 py-3 text-base font-bold transition-all
                        {isDark ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}">
                        Read Documentation
                    </a>
                </div>
            </div>
        </div>

    </div>
</div>
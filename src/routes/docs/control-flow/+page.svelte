<script>
    import { getContext } from 'svelte';
    import DocCodeBlock from '$lib/components/DocCodeBlock.svelte';
    import DocNavigation from '$lib/components/DocNavigation.svelte';

    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);

    let prevStep = { 
        title: "Variables", 
        href: "/docs/variables",
        desc: "Tipe data dasar dan mutabilitas." 
    };

    let nextStep = { 
        title: "Functions", 
        href: "/docs/functions",
        desc: "Membuat kode modular dengan Function." 
    };

    // Contoh Kode
    const codeIf = `var power = 75;

if power > 100 {
    print("Danger: Overload!");
}
elif power > 50 {
    print("System Optimal");
}
else {
    print("Low Battery");
}`;

    const codeLoop = `var data = [10, 25, 40, 5];

# Standard Loop
for i = 0 .. 5, 2 {
    print(data[i]);
}

# Foreach loop
for x in data {
    print(x);
}

# Loop dengan Filter 'when'
# Hanya print angka di atas 10
for x in data when x > 10 {
    print(x);
}`;
</script>

<svelte:head>
    <title>Control Flow - Aiko Documentation</title>
</svelte:head>

<div class="min-h-screen transition-colors duration-300 {isDark ? 'bg-[#0f0f12] text-zinc-100' : 'bg-white text-zinc-900'}">
    <div class="max-w-4xl mx-auto space-y-10 pb-20 px-6 pt-10">

        <header class="border-b pb-6 transition-colors {isDark ? 'border-zinc-800' : 'border-zinc-200'}">
            <p class="text-rose-500 font-bold tracking-wider uppercase text-xs mb-2">Logic</p>
            <h1 class="text-4xl font-extrabold tracking-tight {isDark ? 'text-white' : 'text-zinc-900'}">
                Control Flow
            </h1>
            <p class="mt-4 text-lg {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Mengatur alur logika program dengan percabangan kondisional dan perulangan modern.
            </p>
        </header>

        <article class="prose prose-lg max-w-none transition-colors 
            {isDark ? 'prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-100' : 'prose-zinc'}">
            
            <h3>If Expressions</h3>
            <p>
                Aiko menggunakan sintaks C-Style klasik untuk logika percabangan. Anda wajib menggunakan kurung kurawal <code>&#123; &#125;</code> untuk setiap blok kode, bahkan jika isinya hanya satu baris.
            </p>
            <div class="not-prose my-6">
                <DocCodeBlock code={codeIf} filename="logic.aiko" />
            </div>

            <h3>Loops & Iteration</h3>
            <p>
                Looping di Aiko didesain untuk keterbacaan tinggi. Anda dapat melakukan iterasi pada Array atau struktur data lainnya menggunakan keyword <code class="text-rose-500 font-bold">in</code>.
            </p>
            
            <div class="my-6 p-4 rounded-xl border-l-4 border-emerald-500 transition-colors {isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}">
                <p class="text-sm m-0 font-medium {isDark ? 'text-emerald-200' : 'text-emerald-800'}">
                    <strong>Fitur Andalan:</strong> Gunakan keyword <code class="font-bold">when</code> langsung di dalam deklarasi loop untuk memfilter data. Ini membuat kode lebih bersih daripada membuat <code>if</code> di dalam loop.
                </p>
            </div>

            <div class="not-prose my-6">
                <DocCodeBlock code={codeLoop} filename="loops.aiko" />
            </div>

        </article>

        <DocNavigation 
            prev={prevStep}
            next={nextStep} 
        />
    </div>
</div>
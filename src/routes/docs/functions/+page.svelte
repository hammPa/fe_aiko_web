<script>
    import { getContext } from 'svelte';
    import DocCodeBlock from '$lib/components/DocCodeBlock.svelte';
    import DocNavigation from '$lib/components/DocNavigation.svelte';

    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);

    let prevStep = { 
        title: "Control Flow", 
        href: "/docs/control-flow",
        desc: "Logika percabangan dan perulangan." 
    };

    let nextStep = { 
        title: "Home", 
        href: "/docs/",
        desc: "Kembali ke halaman awal dokumentasi." 
    };

    // Contoh Kode
    const codeFun = `# 1. Function void (tanpa return)
fun greet(name) {
    print(name);
}

# 2. Function dengan return value
fun add(a, b){
    return a + b;
}

# 3. Main Function (Entry Point)
fun main() {
    greet("Aiko Developer");
    
    var result = add(10, 50);
    print(result); # Output: 60
}

main();`;
</script>

<svelte:head>
    <title>Functions - Aiko Documentation</title>
</svelte:head>

<div class="min-h-screen transition-colors duration-300 {isDark ? 'bg-[#0f0f12] text-zinc-100' : 'bg-white text-zinc-900'}">
    <div class="max-w-4xl mx-auto space-y-10 pb-20 px-6 pt-10">

        <header class="border-b pb-6 transition-colors {isDark ? 'border-zinc-800' : 'border-zinc-200'}">
            <p class="text-rose-500 font-bold tracking-wider uppercase text-xs mb-2">Building Blocks</p>
            <h1 class="text-4xl font-extrabold tracking-tight {isDark ? 'text-white' : 'text-zinc-900'}">
                Functions
            </h1>
            <p class="mt-4 text-lg {isDark ? 'text-zinc-400' : 'text-zinc-600'}">
                Modularkan kode Anda menjadi unit-unit kecil yang dapat digunakan kembali.
            </p>
        </header>

        <article class="prose prose-lg max-w-none transition-colors 
            {isDark ? 'prose-invert prose-p:text-zinc-400 prose-headings:text-zinc-100' : 'prose-zinc'}">
            
            <h3>Declaration</h3>
            <p>
                Gunakan keyword <code class="text-rose-500 font-bold">fun</code> untuk mendefinisikan fungsi. Parameter didefinisikan di dalam kurung dengan format <code>nama</code>.
            </p>
            <p>
                Jika fungsi mengembalikan nilai, tipe kembalian (Return Type) tidak eksplisit ditulis tutup kurung parameter.
            </p>

            <div class="not-prose my-6">
                <DocCodeBlock code={codeFun} filename="functions.aiko" />
            </div>

            <h3 class="text-indigo-400">The Main Function</h3>
            <p>
                Setiap program Aiko yang valid tidak harus memiliki fungsi bernama <code class="text-indigo-400 font-bold">main()</code>. Program dijalankan dari atas kebawah.
            </p>

        </article>

        <DocNavigation 
            prev={prevStep}
            next={nextStep} 
        />
    </div>
</div>
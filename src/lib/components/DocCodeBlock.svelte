<script>
    let { code, filename = "example.aiko" } = $props();

    const highlightedCode = $derived.by(() => {
        // 1. Escape HTML terlebih dahulu (Wajib agar < dan > tidak dianggap tag HTML)
        const safeCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // 2. Definisikan Token Regex (Urutan SANGAT PENTING di sini!)
        // Regex akan mencocokkan mana yang ketemu duluan.
        const tokenRegex = new RegExp(
            [
                /(\#.*)/.source,                                           // Group 1: Comments (//...)
                /(".*?")/.source,                                            // Group 2: Strings ("...")
                /(\b\d+\b)/.source,                                          // Group 3: Numbers (10, 99)
                /(\b(?:fun|var|for|in|when|if|else|elif|return|struct)\b)/.source,// Group 4: Keywords
                /(\b(?:main|print|println)\b)/.source,                       // Group 5: Functions
                /(\b(?:Int|String|bool|void)\b)/.source                      // Group 6: Types
            ].join('|'),
            'g'
        );

        // 3. Eksekusi Single Pass Replace
        return safeCode.replace(tokenRegex, (match, comment, string, number, keyword, func, type) => {
            if (comment) return `<span class="text-zinc-500 italic">${match}</span>`;
            if (string)  return `<span class="text-emerald-400">${match}</span>`;
            if (number)  return `<span class="text-orange-400">${match}</span>`;
            if (keyword) return `<span class="text-rose-400 font-bold">${match}</span>`;
            if (func)    return `<span class="text-indigo-400">${match}</span>`;
            if (type)    return `<span class="text-yellow-400">${match}</span>`;
            return match;
        });
    });
</script>

<div class="not-prose my-8 rounded-xl bg-[#0f0f12] shadow-2xl ring-1 ring-white/10 overflow-hidden text-left">
    <div class="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
        <div class="flex gap-2">
            <div class="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
            <div class="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="h-3 w-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <span class="text-xs font-medium text-zinc-500 font-mono">{filename}</span>
        <div class="w-10"></div>
    </div>

    <div class="p-4 overflow-x-auto">
        <pre class="font-mono text-sm leading-relaxed text-zinc-300 whitespace-pre"><code>{@html highlightedCode}</code></pre>
    </div>
</div>
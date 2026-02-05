<script>
    import { getContext } from 'svelte';

    // Props: prev dan next adalah object { title, href, desc }
    let { prev = null, next = null } = $props();

    const themeCtx = getContext('THEME_CTX');
    const isDark = $derived(themeCtx?.isDark ?? true);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-10 mt-10 transition-colors {isDark ? 'border-zinc-800' : 'border-zinc-200'}">
    
    {#if prev}
        <a href={prev.href} 
           class="group flex flex-col rounded-2xl border p-6 text-left transition-all
           {isDark 
              ? 'border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900' 
              : 'border-zinc-200 hover:border-rose-300 hover:bg-white hover:ring-2 hover:ring-rose-100'}">
            
            <div class="flex items-center justify-between">
                <div class="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors 
                    {isDark 
                        ? 'bg-zinc-800 text-zinc-500 group-hover:bg-rose-600 group-hover:text-white' 
                        : 'bg-zinc-100 text-zinc-400 group-hover:bg-rose-600 group-hover:text-white'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="text-right w-full">
                    <span class="text-xs font-bold uppercase tracking-wider group-hover:text-rose-600 {isDark ? 'text-zinc-500' : 'text-zinc-400'}">Previous</span>
                    
                    <h4 class="mt-2 text-lg font-bold group-hover:text-rose-700 {isDark ? 'text-zinc-100' : 'text-zinc-900'}">
                        {prev.title}
                    </h4>

                    {#if prev.desc}
                        <p class="mt-1 text-sm {isDark ? 'text-zinc-400' : 'text-zinc-500'}">
                            {prev.desc}
                        </p>
                    {/if}
                </div>
            </div>
        </a>
    {:else}
        <div class="hidden md:block"></div>
    {/if}

    {#if next}
        <a href={next.href} 
           class="group flex flex-col rounded-2xl border p-6 text-right transition-all
           {isDark 
              ? 'border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900' 
              : 'border-zinc-200 hover:border-rose-300 hover:bg-white hover:ring-2 hover:ring-rose-100'}">
            
            <div class="flex items-center justify-between flex-row-reverse">
                <div class="ml-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors 
                    {isDark 
                        ? 'bg-zinc-800 text-zinc-500 group-hover:bg-rose-600 group-hover:text-white' 
                        : 'bg-zinc-100 text-zinc-400 group-hover:bg-rose-600 group-hover:text-white'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>

                <div class="text-left w-full">
                    <span class="text-xs font-bold uppercase tracking-wider group-hover:text-rose-600 {isDark ? 'text-zinc-500' : 'text-zinc-400'}">Next Step</span>
                    
                    <h4 class="mt-2 text-lg font-bold group-hover:text-rose-700 {isDark ? 'text-zinc-100' : 'text-zinc-900'}">
                        {next.title}
                    </h4>

                    {#if next.desc}
                        <p class="mt-1 text-sm {isDark ? 'text-zinc-400' : 'text-zinc-500'}">
                            {next.desc}
                        </p>
                    {/if}
                </div>
            </div>
        </a>
    {:else}
        <div class="hidden md:block"></div>
    {/if}

</div>
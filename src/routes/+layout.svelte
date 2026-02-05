<script>
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';
    import { setContext } from 'svelte';

    let { children } = $props();
    export const prerender = true;

    // State Theme
    let themeState = $state({
        isDark: true, // Default
        toggle: () => themeState.isDark = !themeState.isDark
    });

    // Share state ke semua children component
    setContext('THEME_CTX', themeState);

    let isMenuOpen = $state(false);

    let navItems = [
        { label: 'Home', href: '/', isButton: false },
        { label: 'About', href: '/about', isButton: false },
        { label: 'Features', href: '/features', isButton: false },
        { label: 'Documentation', href: '/docs', isButton: true }
    ];
</script>

<svelte:head>
    <title>Aiko Playground</title>
    <link rel="icon" href={favicon} />
    </svelte:head>

<div class="min-h-screen transition-colors duration-300 flex flex-col
    {themeState.isDark ? 'bg-[#0f0f12] text-zinc-100' : 'bg-zinc-50 text-zinc-900'}">

    <nav class="sticky top-0 z-50 w-full border-b backdrop-blur-md px-6 py-4 transition-colors duration-300
        {themeState.isDark 
            ? 'bg-[#0f0f12]/80 border-zinc-800' 
            : 'bg-white/80 border-rose-100'}">
        
        <div class="mx-auto flex max-w-6xl items-center justify-between">
            
            <div class="flex items-center gap-2 font-bold text-xl">
                <div class="h-8 w-8 rounded-lg bg-rose-600 flex items-center justify-center text-white text-sm">A</div>
                <span>Aiko<span class="text-rose-600">Docs</span></span>
            </div>

            <div class="flex items-center gap-4">
                <ul class="flex items-center gap-1">
                    {#each navItems as item}
                        {#if item.isButton}
                            <li>
                                <a href={item.href} class="rounded-full bg-rose-600 px-5 py-2 text-xs md:text-sm font-bold text-white shadow-lg shadow-rose-500/30 transition-all hover:bg-rose-700 hover:scale-105 active:scale-95">
                                    {item.label}
                                </a>
                            </li>
                        {:else}
                            <li class="hidden md:block">
                                <a href={item.href} class="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:text-rose-600 
                                    {themeState.isDark ? 'text-zinc-400 hover:bg-zinc-800' : 'text-gray-600 hover:bg-rose-50'}">
                                    {item.label}
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>

                <button 
                    onclick={themeState.toggle}
                    class="p-2 rounded-lg transition-colors border
                    {themeState.isDark 
                        ? 'bg-zinc-800 border-zinc-700 text-yellow-400 hover:bg-zinc-700' 
                        : 'bg-white border-zinc-200 text-indigo-600 hover:bg-rose-50'}"
                    aria-label="Toggle Theme"
                >
                    {#if themeState.isDark}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    {/if}
                </button>

                <button onclick={() => isMenuOpen = !isMenuOpen} aria-label="hamburger" class="ml-2 rounded-lg p-2 md:hidden {themeState.isDark ? 'text-zinc-300 hover:bg-zinc-800' : 'text-gray-600 hover:bg-rose-50'}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </div>
        </div>

        {#if isMenuOpen}
            <div class="absolute left-0 top-full w-full border-b p-6 shadow-xl md:hidden 
                {themeState.isDark ? 'bg-[#0f0f12] border-zinc-800' : 'bg-white border-rose-100'}">
                <ul class="flex flex-col gap-4">
                    {#each navItems as item}
                        {#if !item.isButton}
                            <li>
                                <a href={item.href} onclick={() => isMenuOpen = false} class="block text-lg font-medium {themeState.isDark ? 'text-zinc-300' : 'text-gray-600'}">
                                    {item.label}
                                </a>
                            </li>
                        {/if}
                    {/each}
                </ul>
            </div>
        {/if}
    </nav>

    <main class="flex-1">
        {@render children?.()}
    </main>

</div>
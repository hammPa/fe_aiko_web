<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
	export const prerender = true;
</script>

<svelte:head>
	<title>Aiko Playground</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
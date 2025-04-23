<script>
	// import { onMount } from 'svelte';
	import NavHost from '../components/molecules/NavHost.svelte';
	import Hero from '../components/organisms/Hero.svelte';
	import About from '../components/organisms/About.svelte';
	import Repos from '../components/organisms/Repos.svelte';
	import Footer from '../components/molecules/Footer.svelte';
	import ImageGrid from '../components/organisms/ImageGrid.svelte';

	let loading = true;

	import { onMount, onDestroy } from 'svelte';

	// let loading = true;
	let textIndex = 0;

	const texts = [
		"Hello!!", "Hola!!", "Bonjour!!", "Hallo!!", "Ciao!!",
		"Namaste!!", "こんにちは!!", "안녕하세요!!", "Привет!!", "مرحبا!!"
	];

	/**
	 * @type {number | undefined}
	 */
	let textInterval;
	/**
	 * @type {number | undefined}
	 */
	let timer;

	onMount(() => {
		document.body.style.overflow = 'hidden';

		textInterval = setInterval(() => {
			textIndex = (textIndex + 1) % texts.length;
		}, 100);

		timer = setTimeout(() => {
			loading = false;
			document.body.style.overflow = 'auto';
		}, 3000);
	});

	onDestroy(() => {
		clearInterval(textInterval);
		clearTimeout(timer);
	});
</script>

{#if loading}
	<div class="loading-overlay">
		<span class="loading-label">Loading</span>
		<h1 class="loading-text">{texts[textIndex]}</h1>
		<p class="loading-description">Please wait while we load the experience for you.</p>
	</div>
{:else}
	<!-- ✅ Main content -->
	<NavHost />
	<main>
		<Hero />
		<About />
		<ImageGrid />
		<Repos />
		<Footer />
	</main>
{/if}

<style>
	.loading-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: #1a1616;
		color: white;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		text-align: center;
	}

	.loading-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		color: gray;
		margin-bottom: 1rem;
	}

	.loading-text {
		font-size: 3rem;
		font-weight: 600;
		margin: 0;
	}

	.loading-description {
		margin-top: 1rem;
		font-size: 1rem;
		color: gray;
		max-width: 600px;
	}
</style>

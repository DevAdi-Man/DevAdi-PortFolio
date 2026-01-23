<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		const userId = $page.url.searchParams.get('userId');
		const secret = $page.url.searchParams.get('secret');

		if (userId && secret) {
			// Redirect to your app with verification data
			window.location.href = `pixory://verifyEmail?userId=${userId}&secret=${secret}`;
		}
	});
</script>

<svelte:head>
	<title>Email Verification - Pixory</title>
</svelte:head>

<div class="verification-container">
	<h1>Email Verification</h1>
	<p>Redirecting to Pixory app...</p>
	<p>If the app doesn't open automatically, please open Pixory manually.</p>
</div>

<style>
	.verification-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;
		padding: 2rem;
	}

	h1 {
		color: #333;
		margin-bottom: 1rem;
	}

	p {
		color: #666;
		margin: 0.5rem 0;
	}
</style>

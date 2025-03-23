<script>
	import Social from '../atoms/Social.svelte';
</script>

<div class="socials-container">
	<Social icon="github" tip="Adityaraj" link="https://github.com/DevAdi-Man" />
	<Social icon="discord" tip="Dev.Adi Man" link={`https://discord.com/users/717436074950918174`} />
	<Social icon="email" tip="adityaraj99106@gmail.com" link="mailto:adityaraj99106@gmail.com" />
</div>

<style>
	.socials-container {
		display: flex;
		gap: 0.75rem;
	}
</style>

<script>
	import Tooltip from '../atoms/Tooltip.svelte';
	import Socials from './Socials.svelte';
</script>

<hr />
<footer class="wrapper">
	<Socials />
	<h6>
		Made with pain. &#60;3
		<Tooltip tip="you're here"><span>V2</span></Tooltip>
	</h6>
	<p>Data Deletion Request: If you wish to delete your account and all associated data for the pixory app, please contact me via the email form above [or at adityaraj99106@gmail.com] with the subject line 'Delete Account'. I will manually remove your data within [e.g., 30] days.</p>
</footer>

<style lang="scss">
	hr {
		background-color: var(--neutral-one);
		height: 1px;
		border: 0;
		width: 100%;
		margin-bottom: 2rem;


		@media screen and (max-width: 768px) {
			margin-bottom: 1.5rem;
		}
	}

	footer {
		padding-bottom: 2.4rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
        flex-wrap: wrap;

		@media screen and (max-width: 768px) {
			flex-direction: column;
            gap: 1rem;
		}
	}

	h6 {
		text-align: center;
		line-height: 2.5rem;
		margin-top: 0;
	}

	span {
		font-family: var(--font-two);
		background-color: var(--neutral-one);
		border-radius: 7px;
		padding: 0.15rem 0.5rem 0.15rem;
		width: fit-content;
		margin-left: 1rem;
		margin-right: 0.4rem;
	}

	p {
    	flex-basis: 100%;
        text-align: center;
        margin-top: 2rem;
        font-size: 0.8rem;
        opacity: 0.8;
    }
</style>

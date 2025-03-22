<script>
	import Tooltip from '../atoms/Tooltip.svelte';

	// i didnt write this idk
	let getAge = () => {
		let birthDate = new Date('2003/11/28');
		const ageMs = Date.now() - birthDate.getTime();
		const preciseAge = (ageMs / 31536000000).toFixed(8);
		return preciseAge;
	};

	let age = getAge();
	setInterval(() => {
		age = getAge();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<div class="text">
		<h3>Bio</h3>
		<p>
			Hey there, I'm Aditya Raj! I'm{' '}
			<Tooltip tip={age}>
				<span>{Math.floor(Number(age))}</span>
			</Tooltip>
			. I've been fascinated with operating systems and obsessed with optimizing efficiency and performance
			in processes and services for as long as I can remember. My journey started in
			<span>2017</span>
			with tinkering around random Linux services, which eventually led to deep Linux customizations—teaching
			me a lot along the way. Around <span>2020</span>, I developed a strong passion for
			programming. I enjoy contributing to{' '}
			<Tooltip tip="He's lying—he hasn't contributed to ANYTHING (yet!)">
				<a href="https://github.com/xwedx00" target="_blank" rel="noreferrer">
					<span>open source</span>
				</a>
			</Tooltip>
			as a developer, which is probably why you’ve ended up here. Currently, I'm diving into **Svelte
			and TypeScript**, figuring things out (and occasionally breaking them) one bug at a time.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../../styles/mixins.scss';

	section {
		margin-bottom: 6rem;
		display: grid;
		gap: 4.5rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	.text {
		position: relative;
		line-height: 1.75rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--neutral-one);
		border-radius: 7px;
		color: var(--yellow);
		padding: 0.2rem 0.5rem 0.2rem;
		width: fit-content;
	}

	a {
		text-decoration: none;
	}

	.text::before {
		@include outlineText(
			$content: '╭',
			$translateX: 630%,
			$translateY: -5%,
			$fontSize: 150px,
			$opacity: 0.22
		);
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: normal;
		}
	}
</style>

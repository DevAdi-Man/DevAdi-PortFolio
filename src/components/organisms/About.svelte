<script>
	import Tooltip from '../atoms/Tooltip.svelte';

	// Function to calculate precise age dynamically
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

	// Function to fetch Indian Standard Time (IST)
	let getIndianTime = () => {
	let now = new Date();
	return now.toLocaleTimeString('en-IN', {
		timeZone: 'Asia/Kolkata', // Correct IST time zone
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true
	});
};

	let indiaTime = getIndianTime();
	setInterval(() => {
		indiaTime = getIndianTime();
	}, 1000);
</script>

<section id="about" class="wrapper">
	<div class="profile">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/images/profileImage.png" alt="Profile Picture" class="avatar" />
		<div class="info">
			<p class="name">@adityaraj05441</p>
			<p class="time">India</p>

			<p class="time">{indiaTime}</p>
		</div>
	</div>

	<div class="text">
		<h2>Bio</h2>
		<br />
		<p>
			Hey there, I'm Aditya Raj! I'm
			<Tooltip tip={age}><span>{Math.floor(Number(age))}</span></Tooltip> years old. My journey started
			in <span>2017</span> with tinkering around random Linux services, which eventually led to deep
			Linux customizations—teaching me a lot along the way. Around <span>2020</span>, I developed a
			strong passion for programming. I enjoy contributing to
			<Tooltip tip="He's lying—he hasn't contributed to ANYTHING (yet!)">
				<a href="https://github.com/DevAdi-Man" target="_blank" rel="noreferrer">
					<span>open source</span>
				</a>
			</Tooltip>
			as a developer, which is probably why you’ve ended up here. Currently, I'm diving into **Svelte
			and TypeScript**, figuring things out (and occasionally breaking them) one bug at a time.
		</p>
	</div>
</section>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
	@import '../../styles/mixins.scss';
	.time {
		color: #ccc;
		font-weight: 600;
	}
	.name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 18px;
		font-weight: bolder;
		color: #b98af3;
	}
	section {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 5rem;
		align-items: center;
		margin-bottom: 6rem;
	}

	.profile {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 1rem;
		align-items: center;
		// padding-left: 10px;
		// gap: 30px;
	}

	.avatar {
		width: 250px;
		height: 250px;
		border-radius: 20%;
		margin-bottom: 0.5rem;
		margin-top: 30px;
	}

	.info {
		font-size: 0.9rem;
		color: #ccc;
	}

	.text {
		line-height: 1.75rem;
	}

	span {
		font-weight: 400;
		font-family: var(--font-two);
		font-size: 0.9rem;
		background-color: var(--neutral-six);
		border-radius: 7px;
		color: var(--yellow);
		padding: 0.2rem 0.5rem;
		width: fit-content;
	}

	a {
		text-decoration: none;
	}

	@media (max-width: 868px) {
		section {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.profile {
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}

		.avatar{
			width: 200px;
			height: 200px;
		}
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import CoverFlowCarousel from '../../../components/organisms/CoverFlowCarousel.svelte';
	export let data;
	const { repo, details } = data;

	const defaultImages = [
		'/images/a1.jpg',
		'/images/a2.jpg',
		'/images/a3.jpg',
		'/images/a4.jpg',
		'/images/a5.jpg',
		'/images/a6.jpg',
		'/images/a7.jpg',
		'/images/a8.jpg',
		'/images/a9.jpg'
	];

	const images = details?.images || defaultImages;
</script>

{#if repo}
	<div in:fly={{ y: 20, duration: 400 }}>
		<section class="wrapper">
			<h1>{repo.name}</h1>
			<p>{repo.description || 'No description available.'}</p>
			<div class="repo-stats">
				<div class="stat">
					<img src="/icons/star.svg" alt="star" />
					<span>{repo.stargazerCount}</span>
				</div>
				<div class="stat">
					<img src="/icons/fork.svg" alt="fork" />
					<span>{repo.forkCount}</span>
				</div>
				<div class="stat">
					<span class="dot" style="background-color: {repo.primaryLanguage?.color}"></span>
					<span>{repo.primaryLanguage?.name}</span>
				</div>
				<a href={repo.url} target="_blank" rel="noreferrer">View on GitHub</a>
			</div>

			<CoverFlowCarousel {images} />

			{#if details}
				<div class="content">
					<p>{details.longDescription}</p>
					<h3>Tech Used</h3>
					<ul>
						{#each details.techStack as tech}
							<li>{tech}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>
	</div>
{:else}
	<p>Project not found.</p>
{/if}

<style>

	.detail-img {

		width: 100%;

		height: 250px; /* Consistent height */

		object-fit: cover; /* Prevent stretching */

		border-radius: 12px;

		margin-bottom: 1rem;

	}

	.image-gallery {

		display: grid;

		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

		gap: 20px;

		margin-top: 2rem;

		max-width: 1000px; /* Max width for the gallery */

		margin-left: auto;

		margin-right: auto;

	}

	.repo-stats {

		display: flex;

		gap: 1.5rem;

		align-items: center;

		margin-top: 1rem;

	}

	.stat {

		display: flex;

		align-items: center;

		gap: 0.5rem;

	}

	.dot {

		width: 12px;

		height: 12px;

		border-radius: 50%;

	}

	img {

		height: 16px;

		width: auto;

	}

</style>



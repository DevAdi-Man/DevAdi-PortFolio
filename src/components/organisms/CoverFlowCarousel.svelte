<script lang="ts">
	export let images: string[] = [];
	let currentIndex = 0;

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function getStyle(index: number) {
		const diff = index - currentIndex;
		const absDiff = Math.abs(diff);

		if (diff === 0) {
			return 'transform: translateX(0) scale(1) rotateY(0deg); z-index: 2;';
		} else if (diff === 1 || diff < -1) {
			return `transform: translateX(200px) scale(0.8) rotateY(-45deg); z-index: 1;`;
		} else if (diff === -1 || diff > 1) {
			return `transform: translateX(-200px) scale(0.8) rotateY(45deg); z-index: 1;`;
		}
		return 'transform: scale(0.7); z-index: 0; display: none;';
	}
</script>

{#if images.length > 0}
	<div class="carousel-container">
		<div class="carousel" style="perspective: 1000px;">
			<div class="carousel-inner">
				{#each images as src, i}
					<div class="carousel-item" style={getStyle(i)}>
						<img {src} alt="Carousel item {i + 1}" />
					</div>
				{/each}
			</div>
		</div>
		<div class="controls">
			<button on:click={prev}>←</button>
			<button on:click={next}>→</button>
		</div>
	</div>
{/if}

<style>
	.carousel-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		border-radius: 12px;
		width: 100%;
		max-width: 900px;
		margin: auto;
	}

	.carousel {
		position: relative;
		width: 100%;
		height: 400px;
	}

	.carousel-inner {
		position: absolute;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.carousel-item {
		position: absolute;
		width: 350px;
		height: 350px;
		transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		-webkit-box-reflect: below 1px
			linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));
	}

	.carousel-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.controls {
		margin-top: 1rem;
	}

	.controls button {
		background: #333;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		cursor: pointer;
		margin: 0 0.5rem;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.carousel-item {
			width: 200px;
			height: 200px;
		}
		.getStyle {
			transform: translateX(0) scale(1) rotateY(0deg);
		}
	}
</style>

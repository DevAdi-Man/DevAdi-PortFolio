<script>
// @ts-nocheck
import { onMount, onDestroy } from "svelte";

let allImages = Array.from({ length: 31 }, (_, i) => ({
  src: `/images/a${i + 1}.jpg`,
  name: `a${i + 1}`,
}));

let images = [];

function shuffleAndSelect() {
  images = allImages.sort(() => Math.random() - 0.5).slice(0, 12); // Only 3 rows
}

let interval;
onMount(() => {
  shuffleAndSelect();
  interval = setInterval(() => {
    shuffleAndSelect();
  }, 7000);
});

onDestroy(() => {
  clearInterval(interval);
});

let selectedImage = null;
let container;
function openModal(image) {
  selectedImage = { ...image };
  document.body.style.overflow = "hidden";
}

function closeModal(event) {
  if (!event || event.target.classList.contains("modal")) {
    selectedImage = null;
    document.body.style.overflow = "";
  }
}

</script>

<style>
.section-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #8a63d2;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.section-title span {
  color: #b695ff;
}

.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  margin-bottom: 6rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  gap: 12px;
  width: 100%;
}

.card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.wide {
  grid-column: span 2;
}

.tall {
  grid-row: span 2;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(16, 16, 22, 0.274);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  max-width: 85%;
  max-height: 85%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
}

.modal img {
  max-width: 100%;
  max-height: 85vh;
  display: block;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: white;
  color: #1a1a2e;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  z-index: 1001;
}

.close-btn:hover {
  background: #f0f0f0;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    grid-auto-rows: 180px;
  }
  
  .modal-content {
    max-width: 90%;
  }
}
</style>

<div class="gallery-container">
  <h2 class="section-title">random:<span>images</span></h2>
  
  <div class="grid" bind:this={container}>
    {#each images as image, i}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div 
        class="card {i % 5 === 0 ? 'wide' : ''} {i % 1 === 0 ? 'tall' : ''}"
        on:click={() => openModal(image)}
      >
        <img src={image.src} alt={image.name}  loading="lazy" />
      </div>
    {/each}
  </div>
</div>

{#if selectedImage}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal" on:click={closeModal}>
    <button class="close-btn" on:click={closeModal}>Close</button>
    <div class="modal-content">
      <img src={selectedImage.src} alt={selectedImage.name} />
    </div>
  </div>
{/if}

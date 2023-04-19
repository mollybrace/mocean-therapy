<script>
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams)
</script>


<div class="relative h-1000 md:h-96 m-0 w-screen overflow-hidden bg-indigo-500">
    <img
    alt="A beach at sunset"
    class="object-cover h-full min-w-full"
    src="/src/beach-image.jpg"
  />
  </div>
  <div class="head-text-container max-h-12">
    <h1>{urlParams}</h1>
</div>

<style>
    .hero {
        min-height: 580px;
        position: relative;
        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(255, 0, 150, 0)), url("/src/beach-image.jpg");
    }
    .head-text-container {
        background-color: #c1c7df;
        height: 75px;
        font-size: xx-large;
        color: #708aa7;
    }
</style>
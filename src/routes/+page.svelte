  <script>
    import Hero from "../lib/components/Hero.svelte";
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
  import MainContent from "$lib/components/MainContent.svelte";
  </script>

     <Hero /> 
     <Header />
     <MainContent />
     <Footer />


  <style lang="postcss">
    :global(html) {
      background-color: #d4e2ee;
      overflow: scroll;
    }
  </style>
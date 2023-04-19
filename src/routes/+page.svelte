  <script>
    import Hero from "../lib/components/Hero.svelte";
    import Header from "../lib/components/Header.svelte";
    import Footer from "../lib/components/Footer.svelte";
  import MainContent from "$lib/components/MainContent.svelte";
  import AboutByte from "$lib/components/AboutByte.svelte";
  </script>

     <Hero /> 
     <Header />
     <AboutByte />


  <style lang="postcss">
    :global(html) {
      background-color: #d4e2ee;
      overflow: scroll;
    }
  </style>
  <script>
    import Hero from "../lib/components/Hero.svelte";
    import Header from "../lib/components/Header.svelte";
  </script>

     <Hero /> 
     <Header />


  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
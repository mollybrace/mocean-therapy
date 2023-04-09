<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
	<a href="/">home</a>
	<a href="/about">about</a>
  <a href="/booking">booking</a>

</nav>
 
 <script>
    let count = 0
      function increment() {
        count += 1
      }
  </script>

<br>
<br>
<div>
    <h1 class="text-3xl font-bold underline flex-auto position-center">
       Mocean Hypnotherapy
      </h1>

</div>


  <button 
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  on:click={increment}>
    Oising has therapised you {count}
    {count === 1 ? "time" : "times!"}

  </button>

  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
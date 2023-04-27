
<script>
    import AboutHeader from "./components/AboutHeader.svelte";
    import Footer from "../../lib/components/Footer.svelte";
</script>

<div class="about-page">
    <AboutHeader />

    <div class="container flex flex-col md:flex-row items-center px-6 mx-auto pb-10 mt-10 space-y-0 md:space-y-0">
        <img class=""
        src="/src/head-image.jpg" alt="a strange man eating carrots" />
        <p class="pl-10 max-w-sm flex text-center md:text-right">I am Oisin and I like carrots. I eat carrots day and night. Do you like eating carrots too? </p>
      </div>
    

        

    <Footer />
</div>

<style>

.about-page {
        overflow: scroll;
    }


    /* .text-container {
        padding-top: 300px;
        background-color: #c1c7df;
        height: 600px;
        width: 250px;
        color: #708aa7;
        text-align: center;
        font-size: xx-large;
        margin-left: 25px;
        margin-top: 25px;
    } */
    img {
        border-radius: 50%;
    }
</style>



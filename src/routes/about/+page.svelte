
<script>
    import AboutHeader from "./components/AboutHeader.svelte";
    import Footer from "../../lib/components/Footer.svelte";
</script>

<div>
    <AboutHeader />
    <div>
        <div class="flex justify-right" >
            <img 
            class="scale-50"
            src="/src/head-image.jpg" 
            alt="a strange man eating a carrot">
        </div>
        <div class="justify-center">
            <h1> I'm Oisin! Lover of therapising people and carrots!</h1>
        </div>
        

    </div>
    <Footer />
</div>

<style>
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



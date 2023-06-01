
<script>
    import AboutHeader from "./components/AboutHeader.svelte";
    import Footer from "../../lib/components/Footer.svelte";
</script>

<div class="about-page">
    <AboutHeader />

    <div class="container flex flex-col md:flex-row items-center px-6 mx-auto pb-10 mt-10 space-y-0 md:space-y-0">
        <img class=""
        src="/head-image.jpg" alt="a strange man eating carrots" />
        <p class="pl-10 max-w-sm flex text-center md:text-left md:max-w-md">Hello, I'm Oisin, <br><br>
            your experienced cognitive hypnotherapist. 
            <br><br>
            Having lived abroad for several years, I have gained valuable experience and a unique perspective on the transformative power of cognitive hypnotherapy.
            <br><br>
            During my journey, I have had the privilege of working with diverse individuals from various cultural backgrounds, helping them overcome challenges, unleash their potential, and create positive change in their lives. 
            <br><br>
            My international experiences have enriched my understanding of the human mind and deepened my appreciation for the universal aspects of personal growth and well-being.
            <br><br>
            With a compassionate and non-judgmental approach, I am dedicated to supporting you on your path to self-discovery and empowerment. Through our collaborative work, I will guide you in unlocking the hidden strengths within your mind and help you break free from limiting beliefs that may be holding you back.
            <br><br>
            I am committed to providing a safe and nurturing space where you can explore your thoughts, emotions, and aspirations. Together, we will embark on a journey of self-exploration, enabling you to tap into your innate abilities, overcome obstacles, and achieve lasting transformation.
            <br><br>
            I look forward to meeting you and accompanying you on your path to personal growth, resilience, and fulfilment.
            <br><br>
            Warm regards,
            <br><br>
            Oisin </p>
            
        
      </div>
    

        

    <Footer />
</div>

<style>

.about-page {
        overflow: scroll;
    }

p {
    padding: 5px;
    font-size: large;
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



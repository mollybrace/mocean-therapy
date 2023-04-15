<script>
import emailjs from "@emailjs/browser"
import Footer from "./Footer.svelte";



function sendEmail(event) {
    emailjs.sendForm('service_sa68flb', 'template_uriwvbb', event.target, 'NXMUCg8dkjdu3Rpe_')
    .then((result) => {
        console.log('SUCCESS!', result.text);
        console.log(result.text)
      }, (error) => {
          console.log('FAILED...', error.text);
      });
    }
    
</script>


<div class="pt-20">
<p>  You can contact me on the below form and I will get back to you as soon as possible.
</p>
<br>

<p>Or you can schedule a free call with me <a href="https://calendly.com/mocean-therapy/schedule-a-free-call"><span style="text-decoration:underline">here.</span></a></p>
</div>
<div>
    <form class="pt-10" on:submit={sendEmail}>
        <label for="user_name">Name:</label>
        <br>
        <input
        id="user_name" 
        name="user_name"
        type="text"/>
        <br>
        <label for="email">Email:</label>
        <br>
        <input
        id="email"
        type="email"
        name="user_email"
        />
        <br>
        <label for="message">Message:</label>
        <br>
        <textarea
        rows="10" cols="40"
        id="message"
        name="message"
        /> 
        <br>
        <button type="submit" value="Send">Submit</button>
    </form>
</div>

<div>
    <Footer />
</div>


<style>
    p {
        color: #7c99bb;
        font-weight: bold;
        font-size: x-large;
    }

    input {
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        width: 95%
    }

    label {
        font-family: sans-serif;
        color: #7c99bb ;
        font-weight: bold;
    }
</style>
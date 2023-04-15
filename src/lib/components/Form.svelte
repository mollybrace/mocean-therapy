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

<p>Or you can schedule a free call with me here.</p>
</div>
<div>
    <form class="pt-20" on:submit={sendEmail}>
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
        name="user_email"/>
        <br>
        <label for="message">Message:</label>
        <br>
        <textarea
        rows="10" cols="20"
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
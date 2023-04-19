<script>
import emailjs from "@emailjs/browser"
import Footer from "./Footer.svelte";
import { error } from "@sveltejs/kit";


let user_email = ""
let user_name = ""
let user_message = ""
let err = null

function isEmpty() {
    if (!user_message || !user_name || !user_email) {
        err = "Please complete all input fields"
        throw error(420, err)
    } else {
        err = null
    }

}

function sendEmail(event) {
    isEmpty()
    emailjs.sendForm('service_sa68flb', 'template_uriwvbb', event.target, 'NXMUCg8dkjdu3Rpe_')
    .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
          console.log('FAILED...', error.text);
      });
    }
    
</script>


<div class="pt-20">
<p>  You can contact me on the below form and I will get back to you as soon as possible.
</p>
<br>

<p>Or you can schedule a free call with me <a href="https://calendly.com/mocean-therapy/free-call?back=1&month=2023-04"><span class="underline font-bold">here</span></a>.</p>
</div>
<div class="pl-4">
    <form class="pt-10 pb-10" on:submit|preventDefault={sendEmail}>
        <label for="user_name">Name:</label>
        <br>
        <input
        placeholder="name"
        bind:value={user_name}
        id="user_name" 
        name="user_name"
        type="text"/>
        <br>
        <label for="email">Email:</label>
        <br>
        <input
        placeholder="email"
        bind:value={user_email}
        id="email"
        type="email"
        name="user_email"
        />
        <br>
        <label for="message">Message:</label>
        <br>
        <textarea
        placeholder="message"
        bind:value={user_message}
        rows="10" cols="40"
        id="message"
        name="message"
        /> 
        <br>
        <button 
        class="bg-[#7c99bb] hover:bg-blue-700 text-[#F9EAE1] font-bold py-2 px-4 rounded"
        type="submit" 
        value="Send">Submit</button>
        <div>
            {#if err}
              <p style="color: red">{err}</p>
            {/if}
          </div>
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

    input, textarea {
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        width: 95%;
        border: solid;
        border-width: 2px;
        border-color: #7c99bb;
    }

    label {
        font-family: sans-serif;
        color: #7c99bb ;
        font-weight: bold;
    }
    button {
        justify-content: center;
        border: solid, #7c99bb;
        align-content: center;
    }
</style>
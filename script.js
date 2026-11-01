
console.log("Welcome to ADHNAN's Portfolio!");

// EMAILJS INITIALIZATION
(function () {
    emailjs.init({
        publicKey: "JvhfmHlal8PFhAsN7"
    });
})();

// CONTACT FORM
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const status = document.getElementById("form-status");
    const button = contactForm.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_xp94k3b",
        "template_sve770b",
        templateParams
    )
    .then(function(response) {

        status.textContent = "Message sent successfully! Thank you.";
        contactForm.reset();

    })
    .catch(function(error) {

        status.textContent = "Message could not be sent. Please try again.";
        console.error("EmailJS Error:", error);

    })
    .finally(function() {

        button.disabled = false;
        button.textContent = "Send Message";

    });

});

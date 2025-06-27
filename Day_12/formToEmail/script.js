// Initialize EmailJS
emailjs.init("RqqSwlqEaYqA8kUNE"); // Your public key

// Handle form submission
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    emailjs.sendForm("service_gmail", "template_l2df4cd", this)
        .then(function (response) {
            alert("Message sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("form").reset(); // Clear form after sending
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("FAILED...", error);
        });
});

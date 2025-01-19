document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  function sendEmail() {
    const bodyMessage = `Full Name: ${name}<br> Email: ${email}<br> Subject: ${subject}<br> Message: ${message}`;
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "igwebuikevc@gmail.com",
      Password: "8441DC876EFB7B69D6D842F11C11054BB407",
      To: 'igwebuikevc@gmail.com',
      From: email,
      Subject: subject,
      Body: bodyMessage
    }).then(
      message => {
        if (message === "OK") {
          alert("Success! Message sent successfully!");
        } else {
          alert("Error: " + message);
        }
      }
    );
  }

  sendEmail();
});
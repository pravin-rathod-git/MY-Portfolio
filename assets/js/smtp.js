function sendEmail() {
	Email.send({
		SecureToken : "e68f66ee-3203-442e-a0eb-16b08f85550e",
		To: 'adityagurav54@gmail.com',
		From: "adityagurav54@gmail.com",
		Subject: "Enquiry Received",
		Body: "Email : "+document.getElementById("maill").value
                +"<br><br> Name : "+document.getElementById("name").value
                +"<br> Message : "+document.getElementById("message").value,
	})
		.then(function (message) {
		alert("Sent Succesfully")
		});
	}


function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ramar702211@gmail.com",
        Password : "83CE55DB86915AEC5D6E5F97BBE31A746CC4",
        To : 'quasimansari75@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + document.getElementById("name").value
              + "<br> Email : " + document.getElementById("email").value
              + "<br> Contact : " + document.getElementById("contact").value
              + "<br> Message : " + document.getElementById("query").value
    }).then(
      message => alert(message)
    );    
}
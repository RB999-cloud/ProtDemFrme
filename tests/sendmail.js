var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: "mrrcding1@gmail.com",
        pass: "Ritesh@1234"
    }
});
var mailOptions = {
    from: 'mrrcding1@gmail.com@gmail.com', // sender address
    to: 'ritesh89bhandari@gmail.com', // list of receivers
    subject: 'Testing Automation', // Subject line
	//text: info.body,
    text: 'Testing node mailer', // plaintext body
    attachments: [
        {
            'path': 'D:/test.xlsx',
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }
})


const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
			  user: 'royal.royalnavghan@gmail.com',
			  pass: 'bgwahdagqkojukwn'
			}
		  });
		  

		await transporter.sendMail({
			from: 'royal.royalnavghan@gmail.com',
			to: email,
			subject: subject,
			text: text
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};

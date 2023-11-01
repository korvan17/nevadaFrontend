import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    const body = JSON.parse(req.body);

    const message = `
      Business Direction: ${body.businessDirection}\r\n
      Name: ${body.fullName}\r\n
      Email: ${body.email}\r\n
      Phone: ${body.phone}\r\n
      Company Name: ${body.companyName}\r\n
      Company Website: ${body.companyWebsite}\r\n
      Message: ${body.message}
    `;

    const data = {
      to: "info@ppcwarehouses.com",
      from: "info@ppcwarehouses.com",
      subject: `New message from ${body.fullName}`,
      text: message,
      html: message.replace(/\r\n/g, "<br />"),
    };

    await mail.send(data);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

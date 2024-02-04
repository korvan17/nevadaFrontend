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
      <html>
        <body>
          <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px; border: 1px solid #ddd; padding: 20px; background-color: #fafafa;">
           <div style=" text-align: center;">
          ${
            body.selectedTitle
              ? `<h2 style="text-align: center; font-size: 20px; color: #333;"><strong>Type Form (Title):</strong> ${body.selectedTitle}</h2>`
              : ""
          }
            ${
              body.titleModal
                ? `<p style="color: #555;"><strong>Type Form (Title):</strong> ${body.titleModal}</p>`
                : ""
            }
            </div>
            <p style="color: #555;"><strong>Business Direction:</strong> ${
              body.businessDirection
            }</p>
            <p style="color: #555;"><strong>Name:</strong> ${body.fullName}</p>
            <p style="color: #555;"><strong>Email:</strong> ${body.email}</p>
            <p style="color: #555;"><strong>Phone:</strong> ${body.phone}</p>
            <p style="color: #555;"><strong>Company Name:</strong> ${
              body.companyName
            }</p>
            <p style="color: #555;"><strong>Company Website:</strong> ${
              body.companyWebsite
            }</p>
            <p style="color: #555;"><strong>Message:</strong> ${
              body.message
            }</p>
            <div style="">
            <button style="cursor: pointer; background-color: #4CAF50; ">
            <a href="\" style="color: white; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; margin: 4px 2px;">Approve</a>
          </button>
          </div>
            </div>
        </body>
      </html>
    `;

  
    const data = {
      to: "info@ppcwarehouses.com",
      from: "info@ppcwarehouses.com",
      subject: `New message from ${body.fullName}`,
      text: message.replace(/<[^>]+>/g, ""),
      html: message,
    };


    await mail.send(data);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

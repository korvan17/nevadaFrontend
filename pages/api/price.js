import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { mailFor, totalPrice, action } = req.body;

  if (action === "sendTotalPriceEmail") {
    const message = {
      to: mailFor,
      from: "info@ppcwarehouses.com",
      subject: "Your Order Total Price",
      text: `The total price for your order is ${totalPrice}. View your order at https://nevada-frontend.vercel.app/`,
      html: `<strong>The total price for your order is ${totalPrice}</strong>. <a href="https://nevada-frontend.vercel.app/dashboard/messages">View your order</a>.`,
    };

    try {
      await mail.send(message);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  }
}



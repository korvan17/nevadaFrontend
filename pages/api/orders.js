import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    const body = JSON.parse(req.body);

    const productMessages = body.products
      .map(
        (product) => `
      Product Description: ${product.productDescription}\r\n
      ASIN/UPC/ID: ${product.idAsin}\r\n
      Expected Quantity of Units: ${product.expectedQty}\r\n
      Units per Master Box: ${product.qtyInMasterBox}\r\n
      Total Master Box Count: ${Math.ceil(
        product.expectedQty / product.qtyInMasterBox
      )}\r\n
      Checkbox: ${product.features}\r\n
      Other Feature: ${product.otherFeatureDetails}\r\n
    `
      )
      .join("\r\n");

    const message = `
      Type Form: ${body.createOrder}\r\n
      Order Type: ${body.orderType}\r\n
      Order placed: ${body.orderDate}\r\n
      Company Name or Alias for Package Identification: ${body.companyName}\r\n
      Warehouse Address: ${body.warehouseAddress}\r\n
      ${productMessages}
      Comments: ${body.comments}\r\n
      Order's Master Box Total: ${body.totalMasterBoxes}\r\n
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

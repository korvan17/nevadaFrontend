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
      .map((product) => {
        const parts = [
          product.productDescription &&
            `Product Description: ${product.productDescription}`,
          product.idAsin && `ASIN/UPC/ID: ${product.idAsin}`,
          product.expectedQty &&
            `Expected Quantity of Units: ${product.expectedQty}`,
          product.qtyInMasterBox &&
            `Units per Master Box: ${product.qtyInMasterBox}`,
          product.expectedQty &&
            product.qtyInMasterBox &&
            `Total Master Box Count: ${Math.ceil(
              product.expectedQty / product.qtyInMasterBox
            )}`,
          product.features && `Checkbox: ${product.features}`,
          product.otherFeatureDetails &&
            `Other Feature: ${product.otherFeatureDetails}`,
        ];
        return parts.filter(Boolean).join("\r\n");
      })
      .join("\r\n\r\n");

    const messageParts = [
      `Type Form: ${body.createOrder}`,
      `Order Type: ${body.orderType}`,
      `Order placed: ${body.orderDate}`,
      `Company Name or Alias for Package Identification: ${body.companyName}`,
      `Warehouse Address: ${body.warehouseAddress}`,
      productMessages,
      body.comments && `Comments: ${body.comments}`,
      `Order's Master Box Total: ${body.totalMasterBoxes}`,
    ];

    const message = messageParts.filter(Boolean).join("\r\n");

    const data = {
      to: "info@ppcwarehouses.com",
      from: "info@ppcwarehouses.com",
      subject: `New message from ${body.companyName}`,
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

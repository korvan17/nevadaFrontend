import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

const createProductMessage = (product) => {
  const parts = [
    `<div style="font-size: 14px;">Product</div>`,
    product.productDescription &&
      `<div style="font-size: 14px;">Product Description: ${product.productDescription}</div>`,
    product.idAsin &&
      `<div style="font-size: 14px;">ASIN/UPC/ID: ${product.idAsin}</div>`,
    product.expectedQty &&
      `<div style="font-size: 14px;">Expected Quantity of Units: ${product.expectedQty}</div>`,
    product.qtyInMasterBox &&
      `<div style="font-size: 14px;">Units per Master Box: ${product.qtyInMasterBox}</div>`,
    product.expectedQty &&
      product.qtyInMasterBox &&
      `<div style="font-size: 14px;">Total Master Box Count: ${Math.ceil(
        product.expectedQty / product.qtyInMasterBox
      )}</div>`,
    product.features &&
      `<div style="font-size: 14px;">Features: ${Object.entries(
        product.features
      )
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ")}</div>`, // Correctly format the features object
    product.otherFeatureDetails &&
      `<div style="font-size: 14px;">Other Details: ${product.otherFeatureDetails}</div>`,
  ];
  return parts.filter(Boolean).join("");
};

const createEmailBody = (body) => {
  const productMessages = body.products
    .map(createProductMessage)
    .join(
      "<hr style='border:none; border-top:1px solid #fff; margin: 20px 0;' />"
    );

  const messageParts = [
    `Type Form: ${body.createOrder}`,
    `Order Type: ${body.orderType}`,
    `Order placed: ${body.orderDate}`,
    `Company Name or Alias for Package Identification: ${body.companyName}`,
    `Warehouse Address: ${body.warehouseAddress}<br>`,
    `<hr style="border:none; border-top:1px solid #fff;"></hr>`,

    productMessages,
    body.comments &&
      `<div style="color: red;" >Comments: ${body.comments}</div>`,
    `<div style="color: red;" >Order's Master Box Total: ${body.totalMasterBoxes}</div>`,
  ];

  return `<div style=" text-align: center; 
  
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 12px; border: 1px solid #e9e9e9; border-radius: 16px; background-color: #DFE4E8;
  
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25); ">
            <h2 style="color: #333; text-align: center;">Create a Order Form</h2>
            <div style="font-size: 16px text-align: center;">
            ${messageParts.filter(Boolean).join("<br>")}
            </div>
            <hr style='border:none; border-top:1px solid #e9e9e9; margin: 20px 0;' />
            <div style="text-align: center;">
              <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">Done</a>
            </div>
          </div>`;
};

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      throw new Error("Method not allowed");
    }
    res.setHeader("Access-Control-Allow-Origin", "*");

    const body = JSON.parse(req.body);
    const message = createEmailBody(body);

    const data = {
      to: "info@ppcwarehouses.com",
      from: "info@ppcwarehouses.com",
      subject: `New message from ${body.companyName}`,
      text: message.replace(/<br>/g, "\r\n"),
      html: `<div style="white-space: pre-line;">${message}<a href="#" class="button">Подробнее</a></div>`,
    };

    await mail.send(data);

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

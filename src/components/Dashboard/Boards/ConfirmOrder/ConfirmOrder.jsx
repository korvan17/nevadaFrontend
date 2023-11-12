// import React from "react";

// export const ConfirmOrder = () => {
//   if (!orderDetails) {
//     return null;
//   }

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   const productData = products.map((product) => ({
//   //     productDescription: product.productDescription,
//   //     idAsin: product.idAsin,
//   //     expectedQty: product.expectedQty,
//   //     qtyInMasterBox: product.qtyInMasterBox,
//   //     features: product.features.join(", "),
//   //     otherFeatureDetails: product.otherFeatureDetails,
//   //     renderedOtherDetails: product.renderedOtherDetails,
//   //   }));

//   //   const filteredProductData = productData.map((product) =>
//   //     Object.fromEntries(
//   //       Object.entries(product).filter(([_, v]) => v != null && v !== "")
//   //     )
//   //   );
//   //   const totalMasterBoxes = products.reduce((acc, product) => {
//   //     const productQty = Number(product.expectedQty) || 0;
//   //     const qtyInMasterBox = Number(product.qtyInMasterBox) || 1;
//   //     return acc + Math.ceil(productQty / qtyInMasterBox);
//   //   }, 0);
//   //   const data = {
//   //     createOrder,
//   //     orderType,
//   //     orderDate,
//   //     companyName,
//   //     warehouseAddress,
//   //     products: filteredProductData,
//   //     comments,
//   //     totalMasterBoxes,
//   //   };
//   //   setConfirmOrderVisible(true);
//   //   try {
//   //     const response = await fetch("/api/orders", {
//   //       method: "POST",
//   //       body: JSON.stringify(data),
//   //     });

//   //     if (response.ok) {
//   //     } else {
//   //       const text = await response.text();
//   //       throw new Error(`Failed to fetch: ${text}`);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error submitting form:", error.message);
//   //   }
//   // };
//   // // Example of setting orderData before rendering ConfirmOrder
//   // const handleFormSubmit = (event) => {
//   //   event.preventDefault();
//   //   // ... your existing form submission logic ...

//   //   // Assuming 'data' is the object with your form's data
//   //   const data = {
//   //     // ... collect data from form fields ...
//   //   };

//   //   setOrderData(data); // Set the orderData state
//   //   setConfirmOrderVisible(true); // Show ConfirmOrder component
//   // };
//   const productMessages = body.products
//     .map(
//       (product) => `
//       Product Description: ${product.productDescription}\r\n
//       ASIN/UPC/ID: ${product.idAsin}\r\n
//       Expected Quantity of Units: ${product.expectedQty}\r\n
//       Units per Master Box: ${product.qtyInMasterBox}\r\n
//       Total Master Box Count: ${Math.ceil(
//         product.expectedQty / product.qtyInMasterBox
//       )}\r\n
//       Checkbox: ${product.features}\r\n
//       Other Feature: ${product.otherFeatureDetails}\r\n
//     `
//     )
//     .join("\r\n");

//   const message = `
//       Type Form: ${body.createOrder}\r\n
//       Order Type: ${body.orderType}\r\n
//       Order placed: ${body.orderDate}\r\n
//       Company Name or Alias for Package Identification: ${body.companyName}\r\n
//       Warehouse Address: ${body.warehouseAddress}\r\n
//       ${productMessages}
//       Comments: ${body.comments}\r\n
//       Order's Master Box Total: ${body.totalMasterBoxes}\r\n
//     `;

//   const handleOrderConfirm = async () => {
//     try {
//       const response = await fetch("/api/orders", {
//         method: "POST",
//         body: JSON.stringify(orderData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         console.log("Order submitted successfully");

//       } else {
//         const text = await response.text();
//         throw new Error(`Failed to submit order: ${text}`);
//       }
//     } catch (error) {
//       console.error("Error during order confirmation:", error.message);
//     }

//     setConfirmOrderVisible(false);
//   };

//   const handleOrderCancel = () => {
//     setConfirmOrderVisible(false);
//   };
//   return <h2>ConfirmOrder</h2>;
//   <div></div>;
//   <button>ConfirmOrder</button>;
// };

// export default ConfirmOrder;

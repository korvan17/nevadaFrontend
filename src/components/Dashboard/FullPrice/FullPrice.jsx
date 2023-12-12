import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export default function FullPrice({
  currentPageData,
  onClose,
  formatDisplayDate,
}) {
  return (
    <div className="relative w-[920px] h-[611px] rounded-lg bg-[#FAFCF8] shadow-custom-deep p-3">
      <NavigateBeforeIcon onClick={onClose} style={{ cursor: "pointer" }} />
      <ul>
        {currentPageData.map((orderItem) => (
          <li key={orderItem.id}>
            <p>Order №: {orderItem.attributes.customId}</p>
            <p>Order Type: {orderItem.attributes.orderType}</p>
            <p>
              Order Date: {formatDisplayDate(orderItem.attributes.orderDate)}
            </p>
            <p>Company Name: {orderItem.attributes.companyName}</p>
            <p>Warehouse Address: {orderItem.attributes.warehouseAddress}</p>
            <div>
              <h3>Products:</h3>
              <ul>
                {orderItem.attributes.products.map((product) => (
                  <li key={product.id}>
                    <p>Product Description: {product.productDescription}</p>
                    {product.idAsin && <p>ID/ASIN: {product.idAsin}</p>}
                    {product.expectedQty && (
                      <p>Expected Quantity: {product.expectedQty}</p>
                    )}
                    {product.qtyInMasterBox && (
                      <p>Qty in Master Box: {product.qtyInMasterBox}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {orderItem.attributes.comments && (
              <p>Comments: {orderItem.attributes.comments}</p>
            )}{" "}
            <p>Total Master Boxes: {orderItem.attributes.totalMasterBoxes}</p>
            <p>Total Price: {orderItem.attributes.totalPrice}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

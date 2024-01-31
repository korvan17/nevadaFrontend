import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export default function FullPrice({
  currentPageData,
  onClose,
  formatDisplayDate,
}) {
  return (
    <div className=" relative w-[320px]  lg:w-[920px] lg:h-[611px]  rounded-lg bg-[#FAFCF8] 
    
    shadow-custom-deep p-3 md:w-[578px] md:h-[484px]">
      <NavigateBeforeIcon onClick={onClose} style={{ cursor: "pointer" }} />
      <ul className="">
        {currentPageData.map((orderItem) => (
          <li className="text-center" key={orderItem.id}>
            <p>Order №: {orderItem.attributes.customId}</p>
            <p>Order Type: {orderItem.attributes.orderType}</p>
            <p>
              Order Date: {formatDisplayDate(orderItem.attributes.orderDate)}
            </p>
            <p>Company Name: {orderItem.attributes.companyName}</p>
            <p>Warehouse Address: {orderItem.attributes.warehouseAddress}</p>
            <div>
              <h3 className="font-extrabold mb-2 mt-2 text-center">
                Products:
              </h3>
              <ul className="text-center">
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
            <div className="">
              {orderItem.attributes.comments && (
                <p className="mt-4 text-center">
                  Comments: {orderItem.attributes.comments}
                </p>
              )}{" "}
              <p className="text-center">
                Total Master Boxes: {orderItem.attributes.totalMasterBoxes}
              </p>
              <p className="font-extrabold mb-2 mt-2 text-center">
                Total Price: {orderItem.attributes.totalPrice}$
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

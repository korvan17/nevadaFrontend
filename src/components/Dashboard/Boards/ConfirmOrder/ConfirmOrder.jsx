import React, { useState } from "react";

export const ConfirmOrder = ({
  createOrder,
  orderType,
  orderDate,
  companyName,
  warehouseAddress,
  products: filteredProductData,
  comments,
  totalMasterBoxes,
}) => {
  if (
    !createOrder ||
    !orderType ||
    !orderDate ||
    !companyName ||
    !warehouseAddress ||
    !(filteredProductData?.length > 0) ||
    !totalMasterBoxes
  ) {
    return null;
  }
  const [confirmOrder, setConfirmOrder] = useState("Confirm Order");

  const handelConfirmOrder = async (event) => {
    event.preventDefault();
    const isConfirmed = window.confirm(
      "Are you sure you want to confirm the order?"
    );
    if (!isConfirmed) return;
    const data = {
      createOrder,
      orderType,
      orderDate,
      companyName,
      warehouseAddress,
      products: filteredProductData,
      comments,
      totalMasterBoxes,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
      } else {
        const text = await response.text();
        throw new Error(`Failed to fetch: ${text}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div>
      <h2 className="hidden">{createOrder}</h2>
      <h2 className="">{confirmOrder}</h2>
      <div className="mt-2">
        <p>Order Type: {orderType}</p>
        <p>Order Date: {orderDate}</p>
        <p>Company Name: {companyName}</p>
        <p>Warehouse Address: {warehouseAddress}</p>
      </div>
      <div>
        <h3 className="mt-2 text-center">Products:</h3>
        {filteredProductData.map((product, index) => (
          <div className="mt-2" key={index}>
            {product.productDescription && (
              <p>Product Description: {product.productDescription}</p>
            )}
            {product.idAsin && <p>ID/ASIN: {product.idAsin}</p>}
            {product.expectedQty && (
              <p>Expected Quantity: {product.expectedQty}</p>
            )}
            {product.qtyInMasterBox && (
              <p>Qty in Master Box: {product.qtyInMasterBox}</p>
            )}
            {product.features && <p>Checkbox: {product.features}</p>}
            {product.otherFeatureDetails && (
              <p>Other Feature: {product.otherFeatureDetails}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2">
        {comments && <p>Comments: {comments}</p>}
        <p>Total Master Boxes: {totalMasterBoxes}</p>
      </div>
      <button
        className="bg-slate-500 mt-2 ml-auto flex"
        type="submit"
        onClick={handelConfirmOrder}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default ConfirmOrder;

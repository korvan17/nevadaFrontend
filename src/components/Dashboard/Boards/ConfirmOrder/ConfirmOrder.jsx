"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { customAlphabet, nanoid } from "nanoid";
export const ConfirmOrder = ({
  formatDisplayDate,
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
  // const token = getBearerToken();
  const { data: session, status } = useSession();
  // if (!session) {

  // }

  const accessToken = session.user.jwt;
  console.log("Access Token22:", accessToken);
  useEffect(() => {
    if (status === "authenticated") {
      console.log("Access Token:", session.accessToken);
    }
  }, [session, status]);
  const mailFor = session.user.username;

  const generateCustomId = () => {
    const numbersAlphabet = "0123456789";
    const nanoid = customAlphabet(numbersAlphabet, 9);
    const prefix = orderType.charAt(0).toUpperCase();
    return `${prefix}-${nanoid()}`;
  };

  const handelConfirmOrder = async (event) => {
    event.preventDefault();

    const customId = generateCustomId();
    const isConfirmed = window.confirm(
      "Are you sure you want to confirm the order?"
    );
    if (!isConfirmed) return;
    const data = {
      customId,
      createOrder,
      orderType,
      orderDate,
      companyName,
      warehouseAddress,
      products: filteredProductData,
      comments,
      totalMasterBoxes,
    };
    console.log(session.user.username);
    try {
      const orderMailResponse = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (orderMailResponse.ok) {
        const orderBackendResponse = await fetch(
          "https://nevadacms.onrender.com/api/orders",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              data: {
                mailFor,
                // users_permissions_user: session.user.username,
                ...data,
              },
            }),
          }
        );
        if (!orderBackendResponse.ok) {
          const orderBackendText = await orderBackendResponse.text();
          throw new Error(`Order failed: ${orderBackendText}`);
        }
      } else {
        const orderMailText = await orderMailResponse.text();
        throw new Error(`Failed to send order information: ${orderMailText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div>
      <h2 className="hidden text-[20px]">{createOrder}</h2>
      <h3 className="">{confirmOrder}</h3>
      <div className="mt-2">
        <p>Order Type: {orderType}</p>
        <p>Order Date: {formatDisplayDate(orderDate)}</p>
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
            {product.features && (
              <div>
                {Object.entries(product.features).map(
                  ([featureKey, featureValue]) => (
                    <p key={featureKey}>
                      {featureKey}: {featureValue ? "Yes" : "No"}
                    </p>
                  )
                )}
              </div>
            )}
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

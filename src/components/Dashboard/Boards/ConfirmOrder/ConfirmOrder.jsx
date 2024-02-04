"use client";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { customAlphabet, nanoid } from "nanoid";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export const ConfirmOrder = ({
  createOrder,
  orderType,
  orderDate,
  companyName,
  warehouseAddress,
  products: filteredProductData,
  comments,
  totalMasterBoxes,
  onClose,
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

  const { data: session, status } = useSession();

  const accessToken = session.user.jwt;

  useEffect(() => {
    if (status === "authenticated") {
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

    try {
      const orderMailResponse = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (orderMailResponse.ok) {
        const orderBackendResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}api/orders`,
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
                ...data,
              },
            }),
          }
        );
        if (orderBackendResponse.ok) {
          onClose();
        } else {
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
    <div className="shadow-custom-deep p-[20px] md:p-[40px] relative ml-auto mr-auto max-h-[700px] overflow-y-auto  ">
      <IconButton
        onClick={onClose}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <h2 className="hidden text-[20px] ">{createOrder}</h2>
      <h3 className="font-extrabold text-center">{confirmOrder}</h3>
      <div className="mt-2 ">
        <p>Order Type: {orderType}</p>
        <p>Order Date: {orderDate}</p>
        <p>Company Name: {companyName}</p>
        <p>Warehouse Address: {warehouseAddress}</p>
      </div>
      <div>
        <h3 className="mt-2 font-extrabold text-center">Products</h3>
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
                  ([featureKey, featureValue]) =>
                    featureValue && <p key={featureKey}>{featureKey}: Yes</p>
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
      <div className="flex justify-center">
        <button
          className="bg-accentYellow hover:bg-accentHoverYellow mt-2 px-2 py-1 rounded  font-bold text-[16px] w-[129px] h-[40px] items-center"
          type="submit"
          onClick={handelConfirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;

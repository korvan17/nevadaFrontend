"use client";
import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../../../services/api";
import { useSession } from "next-auth/react";

export default function Messages() {
  const [orders, setOrders] = useState([]);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      const accessToken = session.user.jwt;

      if (accessToken) {
        const loadOrders = async () => {
          try {
            const ordersData = await fetchOrders(accessToken);
            setOrders(ordersData);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        loadOrders();
      }
    }
  }, [status, session]);
  console.log();
  return (
    <>
      <div>
        <h2 className=" text-2xl font-bold mb-6">Messages</h2>
        <div className="w-[920px] h-[611px]  rounded-lg bg-[#FAFCF8] shadow-custom-deep p-3 ">
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Company Name: {order.attributes.companyName}</p>
                <div>
                  Products:
                  <ul>
                    {order.attributes.products.map((product) => (
                      <li key={product.id}>
                        <p>Product Description: {product.productDescription}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

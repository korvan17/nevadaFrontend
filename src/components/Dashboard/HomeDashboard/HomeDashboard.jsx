// pages/index.js or a specific component file
import React from "react";
import ShipmentCard from "../ShipmentCard/ShipmentCard";
import ShipmentStatusCard from "../ShipmentStatusCard/ShipmentStatusCard";
import CreateOrderButton from "@/components/UIElements/Buttons/CreateOrderButton/CreateOrderButton";

export default function HomeDashboard() {
  return (
    <div className="w-[920px] h-[611px] flex-shrink-0 rounded-lg bg-[#FAFCF8] shadow-xl p-3 m-9">
      <h2 className="text-2xl font-bold mb-6">Outbound shipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <ShipmentCard title="Freight">
          <p>No freight shipments due yet</p>
        </ShipmentCard>

       
        <ShipmentCard title="Awaiting Carrier">
          <p>No shipments awaiting carrier</p>
        </ShipmentCard>

       
        <ShipmentCard title="Shipped this month">
         
        </ShipmentCard>
        <ShipmentStatusCard
          title="Shipped this month"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M23.9995 28H25.9995C28.1995 28 29.9995 26.2 29.9995 24V4H11.9995C8.99951 4 6.37953 5.65998 5.01953 8.09998"
                stroke="#62686F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 34C4 37.32 6.68 40 10 40H12C12 37.8 13.8 36 16 36C18.2 36 20 37.8 20 40H28C28 37.8 29.8 36 32 36C34.2 36 36 37.8 36 40H38C41.32 40 44 37.32 44 34V28H38C36.9 28 36 27.1 36 26V20C36 18.9 36.9 18 38 18H40.58L37.16 12.02C36.44 10.78 35.1201 10 33.6801 10H30V24C30 26.2 28.2 28 26 28H24"
                stroke="#62686F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 44C18.2091 44 20 42.2091 20 40C20 37.7909 18.2091 36 16 36C13.7909 36 12 37.7909 12 40C12 42.2091 13.7909 44 16 44Z"
                stroke="#62686F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 44C34.2091 44 36 42.2091 36 40C36 37.7909 34.2091 36 32 36C29.7909 36 28 37.7909 28 40C28 42.2091 29.7909 44 32 44Z"
                stroke="#62686F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M44 24V28H38C36.9 28 36 27.1 36 26V20C36 18.9 36.9 18 38 18H40.58L44 24Z"
                stroke="#62686F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 16H16"
                stroke="#62686F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 22H12"
                stroke="#62686F"
                strokeWidth="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 28H8"
                stroke="#62686F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          count="0"
        ></ShipmentStatusCard>
      </div>
      <CreateOrderButton />
    </div>
  );
}

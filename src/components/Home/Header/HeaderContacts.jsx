"use client";

import React, { useEffect, useState } from "react";
import { fetchContacts } from "../../../../services/api";
import Loading from "@/app/loading";

function HeaderContacts({ menu = false }) {
  const [companyContacts, setCompanyContacts] = useState(null);
  useEffect(() => {
    const loadinData = async () => {
      try {
        const contactsData = await fetchContacts();
        setCompanyContacts(contactsData);
      } catch (error) {
        console.log("contactsData header ERROR", error);
        if (error) return;
      }
    };
    loadinData();
  }, []);

  return (
    <div
      className={`${
        menu
          ? "flex flex-col-reverse"
          : "px-[5px] w-[100%] absolute top-0 h-[56px] left-0 flex items-center justify-center flex-col bg-captionBlue text-captionalWhite text-[16px] font-semibold"
      }`}
    >
      {companyContacts ? (
        <>
          <a
            className={`${
              menu
                ? "block mb-[8px] text-[14px] md:text-[16px] text-captionalGreyLight  hover:text-mainWhite transition-all ease-out"
                : "w-[100%] text-center py-[3px]"
            }`}
            href={`mailto:${companyContacts.email}`}
          >
            {companyContacts.email}
          </a>
          <a
            className={`${
              menu
                ? "block mb-[8px] text-[14px] md:text-[16px] text-captionalGreyLight  hover:text-mainWhite transition-all ease-out"
                : "w-[100%] text-center py-[3px]"
            }`}
            href={`tel:${companyContacts.phone}`}
          >
            {companyContacts.phone}
          </a>
        </>
      ) : (
        <>
          <p className={`${menu && "text-captionalGreyLigh"} `}>
            Company information is loading, please wait...
          </p>
          <Loading />
        </>
      )}
    </div>
  );
}

export default HeaderContacts;

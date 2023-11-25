import React, { useEffect, useState } from "react";
import { fetchContacts } from "../../../../services/api";

function HedaerContacts() {
  const [companyContacts, setCompanyContacts] = useState(null);
  useEffect(() => {
    const loadinData = async () => {
      try {
        const contactsData = await fetchContacts();
        setCompanyContacts(contactsData);
      } catch (error) {
        console.log("contactsData header", error);
      }
    };
    loadinData();
  }, []);

  return (
    <div
      className="
        w-[100%] absolute top-0 h-[56px] left-0
        flex items-center justify-center flex-col
         bg-captionBlue text-captionalWhite
        text-[16px] font-semibold 
        "
    >
      {companyContacts ? (
        <>
          <a
            className="w-[100%] text-center py-[3px]"
            href={companyContacts.email}
          >
            {companyContacts.email}
          </a>
          <a
            className="w-[100%] text-center py-[3px]"
            href={companyContacts.email}
          >
            {companyContacts.phone}
          </a>
        </>
      ) : (
        <p>Company inforamtion is loading, please wait...</p>
      )}
    </div>
  );
}

export default HedaerContacts;

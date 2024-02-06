"use client";
import React, { useEffect, useState } from "react";
import { fetchContacts } from "../../../../../services/api";
import Loading from "@/app/loading";

export default function FooterContacts() {
  const [footerContacts, setFooterContacts] = useState(null);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const contactsData = await fetchContacts();
        setFooterContacts(contactsData);
      } catch (error) {
        console.error("Fetching footer contacts failed", error);
      }
    };
    loadContacts();
  }, []);

  return (
    <ul>
      {footerContacts ? (
        <>
          <li className="mb-[8px] max-w-[231px]">
            <a
              href={`mailto:${footerContacts.email}`}
              className="flex flex-wrap"
            >
              <strong className="font-semibold text-16px">
                Write to us at the email address:
              </strong>
              {footerContacts.email}
            </a>
          </li>
          <li>
            <a href={`tel:${footerContacts.phone}`}>
              <strong className="font-semibold text-16px">Phone:</strong>{" "}
              {footerContacts.phone}
            </a>
          </li>
        </>
      ) : (
        <Loading />
      )}
    </ul>
  );
}

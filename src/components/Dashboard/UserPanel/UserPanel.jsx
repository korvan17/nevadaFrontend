import Image from "next/image";
import React from "react";

function UserPanel() {
  return (
    <div className="container">
      <Image href="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
      <p>persomal data</p>
      <p className="text-red">Discount</p>
      <button type="button">Subcrabation</button>
      <ul>
        {userPanelItems.map(({ title, icon, hint }) => {
          return (
            <li>
              <p>{title}</p>
              <p>{hint}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserPanel;

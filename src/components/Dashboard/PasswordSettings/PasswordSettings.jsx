import Image from "next/image";
import React from "react";

function PasswordSettings() {
  return (
    <form>
      <Image href="../../Icons/shield-lock.png" />
      <h2 className="text-mainWhite">Password settings</h2>
      <p>Change password</p>
    </form>
  );
}

export default PasswordSettings;

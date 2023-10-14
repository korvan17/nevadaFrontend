import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="md:pt-mobile lg:pt-desktop" id="about">
      <div className="container">
        {/* <Image src="" alt="about img" /> */}
        <h2 id="about">About our story</h2>
        <ul>
          <li>
            <p>
              Our story is a tale of passion for e-commerce and a desire to
              simplify the process of ordering products from Amazon for
              everyone. We embarked on our journey with a small group of
              enthusiasts who were impressed by the potential hidden in the
              world of online shopping.
            </p>
          </li>
          <li>
            <p>
              From the very beginning, we defined our main goal as providing the
              best service and ensuring the availability of Amazon products,
              regardless of your location or business. We see our role in
              facilitating access to a wide range of products from the global
              Amazon network, helping our customers achieve their goals.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";

function Logo({ fill = "#FAFCF8" }) {
  return (
    <>
      <svg
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <path
            d="m15.978 4.929 13.257 7.02-13.257 5.822-13.07-5.821 13.07-7.021Z"
            fill={fill}
          />
          <path
            d="m16 17.771 13.09-5.904V25.3L16 31.5V17.771ZM2.908 11.719 16 17.624V31.5L2.91 25.005V11.719Z"
            fill={fill}
          />
          <path
            d="m9.89 8.767 2.182-1.329 11.637 6.938-2.328 1.476-11.49-7.085Z"
            fill="#1478CE"
          />
          <path
            d="m20.072 7.29 2.182 1.477-11.491 7.085-2.327-1.476 11.636-7.085ZM21.38 15.852l2.328-1.476.146 5.462-2.328.738-.145-4.724Z"
            fill="#1478CE"
          />
          <path
            d="m8.436 14.376 2.328 1.476-.291 4.577L8 19.69l.436-5.315Z"
            fill="#1478CE"
          />
          <path d="m15.855 1.386 16 7.971v2.51l-16-8.267V1.386Z" fill={fill} />
          <path d="M16 1.386 0 9.357v2.51L16 3.6V1.386Z" fill={fill} />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" transform="translate(0 .5)" d="M0 0h32v31H0z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default Logo;

export default function Buttons({ login, quote, sendMail, children }) {
  const commonClasses =
    "bg-accentYellow hover:bg-accentHoverYellow text-[#FAFCF8] pt-[16px] pb-[16px] text-sm[16px] font-bold text-center";
  const additionalClasses = login ? "uppercase w-[179px]" : quote ? "" : "";

  return (
    <button className={`${commonClasses} ${additionalClasses}`}>
      {children}
    </button>
  );
}

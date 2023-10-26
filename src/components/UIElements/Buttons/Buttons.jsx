export default function Buttons({ login, quote, toggleModal, children }) {
  const commonClasses =
    "transition-colors ease-out rounded-[8px] bg-accentYellow hover:bg-accentHoverYellow text-[#FAFCF8] pt-[16px] pb-[16px] text-sm[16px] font-bold text-center";
  const additionalClasses = login
    ? "uppercase w-[179px] w-[179px] md:w-[227px] lg:w-[179px]"
    : quote
    ? ""
    : "";

  return (
    <button
      onClick={toggleModal && toggleModal}
      className={`${commonClasses} ${additionalClasses}`}
    >
      {children}
    </button>
  );
}

const ShipmentCard = ({ title, children }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
    <a
      href="#"
      className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
    >
      View all outbound shipments
    </a>
  </div>
);

export default ShipmentCard;

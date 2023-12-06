const ShipmentStatusCard = ({ title, icon, count, children }) => (
  <div className="p-3 w-72 h-38 rounded-md border border-gray-300">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
    <div className="flex items-center justify-between">
      {icon}
      <span className="text-2xl font-bold">{count}</span>
    </div>
    <div className="flex justify-end">
      <a
        href="#"
        className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out"
      >
        View all
      </a>
    </div>
  </div>
);

export default ShipmentStatusCard;

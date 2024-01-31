const ShipmentStatusCard = ({ title, icon, count, children, countStyle }) => (
  <a href="/dashboard/shipments">
    <div className="p-5 w-72 h-38 rounded-md border border-gray-300">
      <div>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {children}
      </div>
      <div className="flex items-center justify-between">
        {icon}
        <span style={countStyle} className="text-2xl font-bold">{count}</span>
      </div>
      <div className="flex justify-end"></div>
    </div>
  </a>
);

export default ShipmentStatusCard;

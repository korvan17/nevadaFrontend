// "use client";
// import React, { useState, useEffect } from "react";
// import getTrackingLog from "../../../../../services/getTrackingLog";

// const TrackerApi = () => {
//   const [trackingId, setTrackingId] = useState("");
//   const [trackingInfo, setTrackingInfo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleTrack = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const data = await getTrackingLog(trackingId);
//       setTrackingInfo(data);
//     } catch (err) {
//       setError("Error fetching tracking info");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pt-20 pb-20 flex justify-center gap-[20px]">
//       <input
//         className="border-red-900 border-l-rose-900"
//         type="text"
//         value={trackingId}
//         onChange={(e) => setTrackingId(e.target.value)}
//         placeholder="Enter ID"
//       />
//       <button
//         className="bg-blue-900 p-3 text-white font-extrabold rounded-xl"
//         onClick={handleTrack}
//         disabled={loading}
//       >
//         {loading ? "Loading..." : "Track"}
//       </button>
//       {error && <div className="text-red-500">{error}</div>}
//       {trackingInfo && <div>{JSON.stringify(trackingInfo, null, 2)}</div>}
//     </div>
//   );
// };

// export default TrackerApi;

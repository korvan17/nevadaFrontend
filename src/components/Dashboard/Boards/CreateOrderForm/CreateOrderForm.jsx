"use client";
import React, { useState } from "react";

export const CreateOrderForm = () => {
  const [orderType, setOrderType] = useState("inbound");
  const [orderDate, setOrderDate] = useState(() =>
    new Date().toLocaleDateString("en-US")
  );
  const [receiverName, setReceiverName] = useState("");
  const [warehouseAddress, setWarehouseAddress] = useState("");
  const [products, setProducts] = useState([]);
  const [expectedQty, setExpectedQty] = useState("0");
  const [comments, setComments] = useState("");

  const handleProductChange = (index, field, value) => {
    let newProducts = [...products];
    newProducts[index] = {
      ...newProducts[index],
      [field]: value,
    };
    setProducts(newProducts);
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { productName: "", idAsin: "", qtyInMasterBox: 0, features: [] },
    ]);
  };

  const handleFeatureChange = (index, feature, isChecked) => {
    let newProducts = [...products];
    if (isChecked) {
      newProducts[index].features.push(feature);
    } else {
      newProducts[index].features = newProducts[index].features.filter(
        (f) => f !== feature
      );
    }
    setProducts(newProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = Math.ceil(
      expectedQty /
        products.reduce(
          (acc, product) => acc + Number(product.qtyInMasterBox),
          0
        )
    );

    console.log("Form Data:", {
      orderType,
      orderDate,
      receiverName,
      warehouseAddress,
      products,
      expectedQty,
      result,
      comments,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-bgBoard  rounded-[16px] border p-5 w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div>
              <label
                htmlFor="orderType"
                className=" block text-sm font-medium text-gray-700"
              >
                Order Type <span className="text-red-500">*</span>
              </label>
            </div>
            <select
              id="orderType"
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="mt-1 w-full pl-3 pr-10 py-2  text-sm rounded-md"
            >
              <option value="inbound">Inbound Order</option>
              <option value="removal">Removals</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Order placed"
              className="block text-sm font-medium text-gray-700"
            >
              Order placed
            </label>
            При виборі "Order placed" автоматично встановлюється сьогоднішня
            дата в американському форматі (наприклад, 10/08/2023).
          </div>

          <div>
            <label
              htmlFor="receiverName"
              className="block text-sm font-medium text-gray-700"
            >
              Receiver Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="receiverName"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Warehouse Address Selection */}
          <div>
            <label
              htmlFor="warehouseAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Warehouse Address <span className="text-red-500">*</span>
            </label>
            <select
              id="warehouseAddress"
              value={warehouseAddress}
              onChange={(e) => setWarehouseAddress(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {/* Replace the options below with actual warehouse addresses */}
              <option value="">Select a warehouse</option>
              <option value="address1">Warehouse 1</option>
              <option value="address2">Warehouse 2</option>
            </select>
          </div>

          {/* Products List */}
          {products.map((product, index) => (
            <div key={index} className="space-y-2">
              <div>
                <label
                  htmlFor={`productName-${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id={`productName-${index}`}
                  value={product.productName}
                  onChange={(e) =>
                    handleProductChange(index, "productName", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {/* ID/ASIN */}
              <div>
                <label
                  htmlFor={`idAsin-${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  ID/ASIN <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id={`idAsin-${index}`}
                  value={product.idAsin}
                  onChange={(e) =>
                    handleProductChange(index, "idAsin", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Quantity in Master Box */}
              <div>
                <label
                  htmlFor={`qtyInMasterBox-${index}`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Qty in Master Box <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id={`qtyInMasterBox-${index}`}
                  value={product.qtyInMasterBox}
                  onChange={(e) =>
                    handleProductChange(index, "qtyInMasterBox", e.target.value)
                  }
                  className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              {/* Product Features */}
              <div className="flex flex-wrap gap-2 mt-2">
                <div>
                  <label
                    htmlFor={`hazmat-${index}`}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id={`hazmat-${index}`}
                      checked={product.features.includes("HazMat")}
                      onChange={(e) =>
                        handleFeatureChange(index, "HazMat", e.target.checked)
                      }
                      className="form-checkbox h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">HazMat</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor={`fragile-${index}`}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id={`fragile-${index}`}
                      checked={product.features.includes("Fragile")}
                      onChange={(e) =>
                        handleFeatureChange(index, "Fragile", e.target.checked)
                      }
                      className="form-checkbox h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Fragile</span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor={`oversize-${index}`}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id={`oversize-${index}`}
                      checked={product.features.includes("Oversize")}
                      onChange={(e) =>
                        handleFeatureChange(index, "Oversize", e.target.checked)
                      }
                      className="form-checkbox h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Oversize</span>
                  </label>
                </div>

                {/* Other Feature with conditional text input */}
                <div>
                  <label
                    htmlFor={`other-${index}`}
                    className="inline-flex items-center"
                  >
                    <input
                      type="checkbox"
                      id={`other-${index}`}
                      checked={product.features.includes("Other")}
                      onChange={(e) =>
                        handleFeatureChange(index, "Other", e.target.checked)
                      }
                      className="form-checkbox h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">Other</span>
                  </label>
                </div>

                {/* Conditional input for 'Other' feature details */}
                {product.features.includes("Other") && (
                  <div>
                    <label
                      htmlFor={`otherDetail-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Other Feature Details
                    </label>
                    <div
                      className="flex gap-[5px]
                    "
                    >
                      <input
                        type="text"
                        id={`otherDetail-${index}`}
                        value={product.otherDetail || ""}
                        onChange={(e) =>
                          handleProductChange(
                            index,
                            "otherDetail",
                            e.target.value
                          )
                        }
                        className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <button className="bg-black">✅</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addProduct}
            className="px-4 py-2 bg-blue-500 text-red-800 font-bold rounded focus:outline-none bg-transparent"
          >
            + Add Product
          </button>

          {/* Expected Quantity Input */}
          <div>
            <label
              htmlFor="expectedQty"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="expectedQty"
              value={expectedQty}
              onChange={(e) => setExpectedQty(e.target.value)}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Comments Textarea */}
          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700"
            >
              Comments
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="3"
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Result - Calculated field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Result (Auto Calculated)
            </label>
            <input
              type="text"
              readOnly
              value={Math.ceil(
                expectedQty /
                  products.reduce(
                    (acc, product) => acc + Number(product.qtyInMasterBox),
                    0
                  )
              )}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
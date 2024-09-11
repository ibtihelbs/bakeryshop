import { useState } from "react";

const Account = () => {
  // Retrieve data from localStorage
  const initialInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
  const initialOrders = JSON.parse(localStorage.getItem("orders")) || [];

  // State for user info and orders
  const [info, setInfo] = useState(initialInfo);
  const [items, setItems] = useState(initialOrders);

  // State for editing
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});

  // Handle Edit button click
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(info[index]);
  };

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Save edited info
  const saveEdit = () => {
    const updatedInfo = [...info];
    updatedInfo[editIndex] = editData;
    setInfo(updatedInfo);
    localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
    setEditIndex(null); // Exit edit mode
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedInfo = info.filter((_, i) => i !== index);
    setInfo(updatedInfo);
    localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
  };

  return (
    <main className="px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row flex-wrap gap-4">
      {/* Orders Section */}
      <div className="grid gap-4 w-full lg:w-2/3">
        {items.map((singleOrder, index) => (
          <details
            className="flex flex-col gap-2 p-4 border border-solid rounded-lg border-black"
            key={index}
          >
            <div className="grid grid-rows-2 gap-4">
              {singleOrder.items?.map((v, i) => (
                <div className="flex flex-col sm:flex-row gap-4 p-2" key={i}>
                  <img
                    className="w-24 h-24 object-cover rounded-lg"
                    src={v.image_url}
                    alt={v.name}
                  />
                  <div>
                    <h1> Name: {v.name} </h1>
                    <p> Price: {v.price} </p>
                    <p> Quantity: {v.quantity} </p>
                  </div>
                </div>
              ))}
            </div>
            <summary className="flex justify-between">
              <h1 className="font-bold">
                Total Price: {singleOrder.total} TND
              </h1>
              <p className="font-thin text-gray-400">
                {singleOrder.orderDate || "unavailable"}
              </p>
            </summary>
          </details>
        ))}
      </div>

      {/* User Info Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        {info.map((v, index) => (
          <div
            key={index}
            className="mb-4 w-full p-3 border-black border rounded-lg border-solid"
          >
            {editIndex === index ? (
              <>
                {Object.entries(v).map(([key]) => (
                  <div key={key} className="flex gap-2">
                    <h1 className="font-bold uppercase">{key}:</h1>
                    <input
                      className="border border-gray-400 p-1"
                      name={key}
                      value={editData[key] || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                ))}
                <button
                  className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
                  onClick={saveEdit}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {Object.entries(v).map(([key, value]) => (
                  <div key={key} className="flex gap-2">
                    <h1 className="font-bold uppercase">{key}:</h1>
                    <p>{value}</p>
                  </div>
                ))}
                <div className="flex gap-4 mt-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Account;

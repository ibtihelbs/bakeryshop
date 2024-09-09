const Account = () => {
  const info = JSON.parse(localStorage.getItem("userInfo")) || []; // Ensuring it's an array even if null
  const items = JSON.parse(localStorage.getItem("orders")) || []; // Ensuring it's an array even if null
  console.log(items);

  return (
    <main className="px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row flex-wrap gap-4">
      {/* Orders Section */}
      <div className="grid gap-4 w-full lg:w-2/3">
        {items.map((singleOrder, index) => (
          <div
            className="flex flex-col gap-2 p-4 border border-solid rounded-lg border-black"
            key={index}
          >
            <div className="grid grid-rows-2 gap-4">
              {singleOrder.items.map((v, i) => (
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
            <h1 className="font-bold">
              {" "}
              Total Price: {singleOrder.total} TND{" "}
            </h1>
          </div>
        ))}
      </div>

      {/* User Info Section */}
      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        {info.map((v, index) => (
          <div
            key={index}
            className="mb-4 w-full p-3 border-black border rounded-lg border-solid"
          >
            {Object.entries(v).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <h1 className="font-bold uppercase">{key}:</h1>
                <p>{value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Account;

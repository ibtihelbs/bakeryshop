import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../store/userSlice";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveUserInfo = (info) => {
    const savedUserInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
    const userIndex = savedUserInfo.findIndex(
      (user) => user.fullName === info.fullName && user.address === info.address
    );

    if (userIndex === -1) {
      savedUserInfo.push(info);
    } else {
      savedUserInfo[userIndex] = info;
    }

    localStorage.setItem("userInfo", JSON.stringify(savedUserInfo));
  };

  const saveOrderSummary = (orderInfo) => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const orderDate = new Date().toISOString();

    orders.push({ orderDate, ...orderInfo });
    localStorage.setItem("orders", JSON.stringify(orders));
  };

  const orderSummary = useSelector((state) => state.cartReducer.orderSummary);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addInfo(formData));
      saveUserInfo(formData);
      saveOrderSummary(orderSummary);

      setFormData({
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });

      setConfirmationMessage(
        "Hope you enjoyed the trip! We're sorry to inform you that we won't be sending your pastries. Your doctor isn't thrilled with your lifestyle choices and keeps calling us daily."
      );

      dispatch(clearCart());

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form
          onSubmit={handlePlaceOrder}
          className="bg-white border border-black rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-center text-2xl font-bold mb-4">Checkout</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.address && (
                  <span className="text-red-500 text-xs">{errors.address}</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.city && (
                  <span className="text-red-500 text-xs">{errors.city}</span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.postalCode && (
                  <span className="text-red-500 text-xs">
                    {errors.postalCode}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.cardNumber && (
                  <span className="text-red-500 text-xs">
                    {errors.cardNumber}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="expiryDate"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.expiryDate && (
                  <span className="text-red-500 text-xs">
                    {errors.expiryDate}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="border border-black rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                {errors.cvv && (
                  <span className="text-red-500 text-xs">{errors.cvv}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Order Summary</h3>
            {orderSummary ? (
              <>
                <ul>
                  {orderSummary.items.map(({ id, name, price }) => (
                    <li key={id}>
                      {name} - {price} TND
                    </li>
                  ))}
                </ul>
                <h4>Total: {orderSummary.total} TND</h4>
              </>
            ) : (
              <p>No items in the order.</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button content={"Place Order"} type={"submit"} />
          </div>

          {confirmationMessage && (
            <p className="mt-4 text-center text-gray-700">
              {confirmationMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;

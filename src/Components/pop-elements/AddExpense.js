import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextApi/myContext";

const AddExpense = () => {
  const {
    title,
    setTitle,
    price,
    setPrice,
    category,
    setCategory,
    date,
    setDate,
    setBalance,
    setExpense,
    setExp,
  } = useGlobalContext();
  const navigate = useNavigate();
  const handleCancelBtn = () => {
    navigate("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setExp((prev) => [
      ...prev,
      {
        title: title,
        price: price,
        category: category,
        date: date,
      },
    ]);
    setBalance((prev) => Number(prev) - Number(price));
    setExpense((prev) => Number(prev) + Number(price));
    navigate("/");
    setTitle("");
    setPrice("");
    setCategory("");
    setDate("");
  };
  return (
    <div className="fixed left-0 top-0 bg-[#FFFFFFC4] h-screen w-full flex justify-center items-center">
      <div className="h-2/5 w-2/5 bg-[#EFEFEFD9] flex justify-center items-center rounded-lg">
        <form onSubmit={submitHandler} className="h-64 w-11/12  p-5 gap-5">
          <p className="text-2xl text-black font-bold">Add Expense</p>
          <div className="flex justify-between flex-wrap h-full w-full mt-2 gap-">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 w-56 rounded-md px-4 drop-shadow-md"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-12 w-56 rounded-md px-4 drop-shadow-md"
            />
            <input
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="h-12 w-56 rounded-md px-4 drop-shadow-md"
            />
            <input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 w-56 rounded-md px-4 drop-shadow-md"
            />
            <div className="w-full flex justify-between gap-20">
                <div className="w-1/2 ">
              <button type="submit" className="bg-yellow-500 h-12 w-56 rounded-md  drop-shadow-md text-white font-semibold">Add Balance</button></div>
              <div className="w-1/2">
              <button onClick={handleCancelBtn} className="bg-[#D9D9D9] h-12 w-28 rounded-md  drop-shadow-md text-black font-semibold">Cancel</button></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;

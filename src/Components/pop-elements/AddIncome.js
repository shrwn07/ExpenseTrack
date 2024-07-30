import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextApi/myContext";

const AddIncome = () => {
  const { income, setIncome } = useGlobalContext();
  const navigate = useNavigate();
  const handleCancelBtn = () => {
    navigate("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
    setIncome("");
  };
  return (
    <div className="fixed left-0 top-0 bg-[#FFFFFFC4] h-screen w-full flex justify-center items-center">
      <div className="h-1/5 w-2/5 bg-[#EFEFEFD9] flex justify-center items-center rounded-lg">
        <form onSubmit={submitHandler} className="w-10/12 h-10/12 ">
          <p className="text-2xl font-bold ">Add Balance</p>
            <div className="flex gap-4 mt-3">
            <input
            type="text"
            placeholder="Income Amount"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="h-12 w-56 rounded-md px-4 drop-shadow-md"
          />
          <button type="submit" className="bg-yellow-500 h-12 w-36 rounded-md  drop-shadow-md text-white font-semibold">Add Balance</button>
          <button onClick={handleCancelBtn}  className="bg-[#D9D9D9] h-12 w-28 rounded-md  drop-shadow-md text-black font-semibold">cancel</button>
            </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddIncome;

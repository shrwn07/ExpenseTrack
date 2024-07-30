import React, { useEffect } from "react";
import { useGlobalContext } from "../../contextApi/myContext";
import { useNavigate } from "react-router-dom";
import CirCularChart from "./CircularChart";
import BarRechart from "./BarRechart";

const Home = () => {
  const { balance, income, expense, exp } = useGlobalContext();
  const navigateIncome = useNavigate();
  const navigateExpense = useNavigate();
  const addIncomebtnHandler = () => {
    navigateIncome("/add-bal");
  };
  const addExpensebtnHandler = () => {
    navigateExpense("/add-exp");
  };
  useEffect(()=>{
    console.log('home',exp)
  },[exp])
  return (
    <>
      <div className="h-full w-full bg-zinc-700 flex items-center flex-col pb-5">
        <p className="text-3xl text-white font-bold text-left w-full ml-32">
          Expense Tracker
        </p>
        <div className="h-72 w-11/12 bg-zinc-500 rounded-md flex justify-between items-center px-16 mt-5">
          <div className="w-9/12 flex justify-between ">
            <div className="w-[28rem] h-56 bg-zinc-400 rounded-md flex flex-col justify-center items-center gap-3">
              <p className="text-white text-2xl">
                Wallet Balance :{" "}
                <span className="text-green-400 font-bold">
                  ₹{balance + Number(income)}
                </span>
              </p>
              <button
                className="bg-green-300 p-3 text-white font-bold rounded-xl"
                onClick={addIncomebtnHandler}
              >
                + Add Income
              </button>
            </div>
            <div className="w-[28rem] h-56 bg-zinc-400 rounded-md flex flex-col justify-center items-center gap-3">
              <p className="text-white text-2xl">
                {" "}
                Expense :{" "}
                <span className="text-yellow-500 font-bold">{expense}</span>
              </p>
              <button
                className="bg-red-500 p-3 text-white font-bold rounded-xl"
                onClick={addExpensebtnHandler}
              >
                + Add Expense
              </button>
            </div>
          </div>
          <div className="w-2/12 ">
            <CirCularChart />
          </div>
        </div>
        <div className="flex w-full mt-8 justify-between px-16 h-72  gap-10">
          <div className="w-2/3 h- ">
            <p className="text-2xl text-white">Recent Transactions</p>
            <div className="bg-white h-60 w-full rounded-md ">
                {exp.map((items,index)=>(
                    <div key={index} className="flex ">
                        <div className="h-5 w-5 bg-pink-400"></div>
                        <div className="">
                            <p className="">{items.title}</p>
                            <p className="">{items.date} </p>
                        </div>
                        <p className="">{items.price}</p>
                        <button type="button">X</button>
                        <button type="button">edit</button>
                    </div>
                ))}
            </div>
          </div>
          <div className="w-1/3 h-10/12 ">
            <p className="text-2xl text-white">Top Expenses</p>
            <div className="bg-white h-60 w-full rounded-md "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

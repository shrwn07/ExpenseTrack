import { createContext, useContext, useState } from "react";

const trackContext = createContext();

const TrackProvider = ({ children }) => {
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(5000);
  const [income, setIncome] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [exp, setExp] = useState([]);

  

  return (
    <trackContext.Provider
      value={{
        balance,
        income,
        setIncome,
        title,
        setTitle,
        price,
        setPrice,
        category,
        setCategory,
        date,
        setDate,
        setBalance,
        expense,
        setExpense,
        exp,
        setExp,
      }}
    >
      {children}
    </trackContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(trackContext);
};

export { trackContext, TrackProvider, useGlobalContext };

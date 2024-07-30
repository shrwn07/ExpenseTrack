import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home-element/Home';
import AddIncome from './Components/pop-elements/AddIncome';
import AddExpense from './Components/pop-elements/AddExpense';
import EditExp from './Components/pop-elements/EditExp';

function App() {
  return (
    <div className="App ">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/add-bal' element={<AddIncome />}/>
      <Route path='/add-exp' element={<AddExpense />}/>
      <Route path = '/edit-exp' element={<EditExp />}/>
    </Routes>
     
    </div>
  );
}

export default App;

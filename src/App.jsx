import {BrowserRouter, Route, Routes} from "react-router-dom";
import Income from "./Pages/Income";
import Expense from "./Pages/Expense";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

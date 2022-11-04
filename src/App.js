import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableRafi from "./components/table/TableRafi";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/table" element={<TableRafi />} />
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

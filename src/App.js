import { useState } from "react";
import ContactForm from "./Contact";
import DetailsPage from "./DetailsPage";
import { Routes, Route ,Navigate} from 'react-router-dom';

const App = () => {
  const [finaldetails, setfinaldetails] = useState("");
  const handSubmit = (details) => {
    setfinaldetails(details);
  }
  console.log(finaldetails);
  return (
      <Routes>
        <Route path='/' element={<ContactForm onSubmit={handSubmit} />} />
      <Route path='/DetailsPage' element={<DetailsPage details={finaldetails} />}/>
      </Routes>
  
  );
};

export default App;

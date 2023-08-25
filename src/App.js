import { useState } from "react";
import ContactForm from "./Contact";
import DetailsPage from "./DetailsPage";

const App = () => {
  const [finaldetails, setfinaldetails] = useState("");
  const handSubmit = (details) => {
    setfinaldetails(details);
  };
  console.log(finaldetails);
  return (
    <div className="App">
      <ContactForm onSubmit={handSubmit} />
      <DetailsPage details={finaldetails} />
    </div>
  );
};

export default App;

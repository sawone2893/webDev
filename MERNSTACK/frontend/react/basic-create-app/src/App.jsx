import "./App.css";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";

function App() {
  return (
    <>
    <MsgBox userName="Shabbir" textColor="yellow"/>
    <MsgBox userName="Raj" textColor="pink"/>
    <MsgBox userName="Shivam" textColor="brown"/>
    <ProductTab />
    </>
  );
  
}

export default App;

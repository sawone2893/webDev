import "./App.css";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";
import Button from "./Button";
import Form from "./Form";
function App() {
  return (
    <>
      <Form />
      <Button />
      <MsgBox userName="Shabbir" textColor="yellow" />
      <MsgBox userName="Raj" textColor="pink" />
      <MsgBox userName="Shivam" textColor="brown" />
      <ProductTab />
    </>
  );
}

export default App;

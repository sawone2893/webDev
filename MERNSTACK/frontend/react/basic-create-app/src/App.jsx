import "./App.css";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";
import Button from "./Button";
import Form from "./Form";
import {ReactForms,HandleMultipleInputs} from "./ReactForms";
import CommentsForm from "./CommentsForm";

function App() {
  return (
    <>
      <CommentsForm/>
      <ReactForms />
      <HandleMultipleInputs/>
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

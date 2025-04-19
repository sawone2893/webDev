import "./App.css";
import Lottery from "./Lottery";
import {sum } from "./helper";

function App() {
  let winCondtion=(ticket)=>{
    return sum(ticket) === 15;
  }
  return (
    <>
      <Lottery n={6} winCondtion={winCondtion}/>
    </>
  );
}

export default App;

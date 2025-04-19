import { useState } from "react";
import { genRanNumSet } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";
export default function Lottery({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(genRanNumSet(n));
  let isWinning = winCondition;
  const buyTicket = () => {
    setTicket(genRanNumSet(n));
  };
  return (
    <>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulation, You won!"}</h3>
    </>
  );
}

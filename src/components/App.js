import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plateArray, setPlateArray] = useState([]);
  const [money, setMoney] = useState(100);
  return (
    <div className="app">
      <SushiContainer money={money} moneySet={setMoney} plateSet={setPlateArray} />
      <Table plates={plateArray} money={money}/>
    </div>
  );
}

export default App;

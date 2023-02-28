import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({money, moneySet, plateSet}) {
  const [sushiBelt, setSushiBelt] = useState([])
  const [beltIndex, setBeltIndex] = useState(0);
  const [eatenList, setEatenList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(res => res.json())
      .then(sushiArray => {
        setSushiBelt(sushiArray);
      })
  },[beltIndex]);

  console.log('belt',sushiBelt);

  const setSushiEaten = (name, price) => {
    let copy = [...eatenList];
    copy.push(name);
    setEatenList(copy);
    moneySet(money-price);


  }

  const page = (beltIndex) => {
    let sushiPage = [];
    for (let i = 0; i < 4; i++) {
      sushiPage.push(sushiBelt[beltIndex + i]);
    }
    return sushiPage;
  }

  let fourSushi = page(beltIndex).map(sushiObj => {
    console.log(sushiObj)
    let boolEaten = false;
    eatenList.forEach(sushiID => {
      if (sushiID.name === sushiObj.name) {
        boolEaten = true;
      }
    })
    return <Sushi money isEaten={boolEaten} sushi={sushiObj} eatenBool={setSushiEaten} />
  })
  
  return (
    <div className="belt">
      {/*fourSushi*/}
      <MoreButton indexSet={setBeltIndex} index={beltIndex}/>
    </div>
  );
}

export default SushiContainer;

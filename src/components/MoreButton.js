import React from "react";

function MoreButton(props) {
  console.log(props)
  const {indexSet, index} = props
  return <button onClick={e => { 
    if ((index + 4) > 100) {
      indexSet(0)
    }
    else {
      indexSet(index + 4)
    }
    }}>More sushi!</button>;
}

export default MoreButton;

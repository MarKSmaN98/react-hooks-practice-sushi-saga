import React from "react";

function Sushi(props) {
  setTimeout(1000);
  console.log('Sushi props: ', props)
  const {money, isEaten, sushi: {name, img_url, price}, eatenBool} = props;
  return (
    <div className="sushi">
      <div className="plate" onClick={e => {
        if (price < money) {
          eatenBool(name, price);
        }
        else if (isEaten) {
          console.log('already eaten bro');
        }
        else {
          alert('You Can\'t Afford This!');
        }
      }}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

import React, { useState } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";

function Discover() {
  const [image, setImage] = useState(
    "https://images.dog.ceo/breeds/brabancon/n02112706_16.jpg"
  );
  const [count, setCount] = useState(0);

  const handleBtnClick = (event) => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;

    if (btnType === "like") {
      setCount(count + 1);
    } else {
      count > 0 ? setCount(count - 1) : setCount(0);
    }
  };

  return (
    <div>
      <h1 className="text-center">Make New Friends</h1>
      <h3 className="text-center">
        Thumbs up the pup if you'd like to meet it!
      </h3>
      <Card image={image} handleBtnClick={handleBtnClick} />
      <h1 className="text-center">{count} likes so far!</h1>
    </div>
  );
}

export default Discover;

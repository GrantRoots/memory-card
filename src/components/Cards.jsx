import { useEffect, useState } from "react";

function Cards() {
  // put a gif on each card
  const [imageOne, setImageOne] = useState(null);

  const urls = [
    // all giphy images here ?
    // should they be ojbects and i put the state variable with them
  ];

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(
          "https://api.giphy.com/v1/gifs/yUSLvx5GW5YgU?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
          { mode: "cors" }
        );
        response = await response.json();
        setImageOne(response.data.images.original.url);
      } catch (error) {
        console.log("error");
      }
    })();
  }, [imageOne]);

  return (
    <>
      <div>
        <img alt="Image" src={imageOne} />
      </div>
    </>
  );
}

export default Cards;

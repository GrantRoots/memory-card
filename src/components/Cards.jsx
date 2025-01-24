import { useEffect, useState } from "react";
import "../styles/cards.css";

function Cards() {
  // is there a way to make it so I know which ones which
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null,
    image8: null,
    image9: null,
    image10: null,
  });

  //only called if dependency array changes??
  useEffect(() => {
    if (Object.values(images).every((value) => value === null)) {
      (async () => {
        try {
          const [
            response1,
            response2,
            response3,
            response4,
            response5,
            response6,
            response7,
            response8,
            response9,
            response10,
          ] = await Promise.all([
            //1
            fetch(
              "https://api.giphy.com/v1/gifs/yUSLvx5GW5YgU?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //2
            fetch(
              "https://api.giphy.com/v1/gifs/cgC6Mx1aJtBBe?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //3
            fetch(
              "https://api.giphy.com/v1/gifs/YiWnvcGKcSNPEEjgIj?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //4
            fetch(
              "https://api.giphy.com/v1/gifs/OdyGA2spBFRCg?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //5
            fetch(
              "https://api.giphy.com/v1/gifs/11YFNajoL4WkQ8?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //6
            fetch(
              "https://api.giphy.com/v1/gifs/Z5jAXUzkye7VC?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //7
            fetch(
              "https://api.giphy.com/v1/gifs/27qZYHJaLJ04?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //8 nned to fix
            fetch(
              "https://api.giphy.com/v1/gifs/2cOM6LDpM5uVZASkD1?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //9
            fetch(
              "https://api.giphy.com/v1/gifs/1I2NwmjvSzNS0?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
            //10
            fetch(
              "https://api.giphy.com/v1/gifs/4NQ9mR6sh8LoA?api_key=sXFywlwvVjCKprFZKrrXV5co7e6wAdjp",
              { mode: "cors" }
            ),
          ]);

          const [
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
            data8,
            data9,
            data10,
          ] = await Promise.all([
            response1.json(),
            response2.json(),
            response3.json(),
            response4.json(),
            response5.json(),
            response6.json(),
            response7.json(),
            response8.json(),
            response9.json(),
            response10.json(),
          ]);

          console.log(response9);

          setImages({
            ...images,
            image1: data1.data.images.original.url,
            image2: data2.data.images.original.url,
            image3: data3.data.images.original.url,
            image4: data4.data.images.original.url,
            image5: data5.data.images.original.url,
            image6: data6.data.images.original.url,
            image7: data7.data.images.original.url,
            image8: data8.data.images.original.url,
            image9: data9.data.images.original.url,
            image10: data10.data.images.original.url,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  return (
    <div className="card-container">
      <div>
        <img alt="Image1" src={images.image1} />
      </div>
      <div>
        <img alt="Image2" src={images.image2} />
      </div>
      <div>
        <img alt="Image3" src={images.image3} />
      </div>
      <div>
        <img alt="Image4" src={images.image4} />
      </div>
      <div>
        <img alt="Image5" src={images.image5} />
      </div>
      <div>
        <img alt="Image6" src={images.image6} />
      </div>
      <div>
        <img alt="Image7" src={images.image7} />
      </div>
      <div>
        <img alt="Image8" src={images.image8} />
      </div>
      <div>
        <img alt="Image9" src={images.image9} />
      </div>
      <div>
        <img alt="Image10" src={images.image10} />
      </div>
    </div>
  );
}

export default Cards;

import { useEffect, useState } from "react";
import "../styles/cards.css";

function CardsController(props) {
  const [images, setImages] = useState({
    image1: {
      name: "Aragorn",
      data: null,
    },
    image2: {
      name: "Gollum",
      data: null,
    },
    image3: {
      name: "Frodo Baggins",
      data: null,
    },
    image4: {
      name: "Gandalf",
      data: null,
    },
    image5: {
      name: "Legolas",
      data: null,
    },
    image6: {
      name: "Eye of Sauron",
      data: null,
    },
    image7: {
      name: "Bilbo Baggins",
      data: null,
    },
    image8: {
      name: "Balrog",
      data: null,
    },
    image9: {
      name: "The One Ring",
      data: null,
    },
    image10: {
      name: "Saruman",
      data: null,
    },
  });

  useEffect(() => {
    console.log(images);
    if (Object.values(images).every((value) => value.data === null)) {
      console.log("USING API CALL");
      //can fix api calls on refresh later
      //react query or conditionally change api key
      (async () => {
        try {
          //could make all this on one line
          //fetch().then(response => response.json).then()...
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

          setImages({
            ...images,
            image1: { ...images.image1, data: data1.data.images.original.url },
            image2: { ...images.image2, data: data2.data.images.original.url },
            image3: { ...images.image3, data: data3.data.images.original.url },
            image4: { ...images.image4, data: data4.data.images.original.url },
            image5: { ...images.image5, data: data5.data.images.original.url },
            image6: { ...images.image6, data: data6.data.images.original.url },
            image7: { ...images.image7, data: data7.data.images.original.url },
            image8: { ...images.image8, data: data8.data.images.original.url },
            image9: { ...images.image9, data: data9.data.images.original.url },
            image10: {
              ...images.image10,
              data: data10.data.images.original.url,
            },
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  function handleClick(e) {
    props.onClick(e.target.id);

    //shuffle images
    const entries = Object.entries(images);
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }

    setImages({
      ...images,
      image1: {
        ...images.image1,
        name: entries[0][1].name,
        data: entries[0][1].data,
      },
      image2: {
        ...images.image1,
        name: entries[1][1].name,
        data: entries[1][1].data,
      },
      image3: {
        ...images.image1,
        name: entries[2][1].name,
        data: entries[2][1].data,
      },
      image4: {
        ...images.image1,
        name: entries[3][1].name,
        data: entries[3][1].data,
      },
      image5: {
        ...images.image1,
        name: entries[4][1].name,
        data: entries[4][1].data,
      },
      image6: {
        ...images.image1,
        name: entries[5][1].name,
        data: entries[5][1].data,
      },
      image7: {
        ...images.image1,
        name: entries[6][1].name,
        data: entries[6][1].data,
      },
      image8: {
        ...images.image1,
        name: entries[7][1].name,
        data: entries[7][1].data,
      },
      image9: {
        ...images.image1,
        name: entries[8][1].name,
        data: entries[8][1].data,
      },
      image10: {
        ...images.image1,
        name: entries[9][1].name,
        data: entries[9][1].data,
      },
    });
  }

  return (
    <div className="card-container">
      <Card
        name={images.image1.name}
        data={images.image1.data}
        onClick={handleClick}
      />
      <Card
        name={images.image2.name}
        data={images.image2.data}
        onClick={handleClick}
      />
      <Card
        name={images.image3.name}
        data={images.image3.data}
        onClick={handleClick}
      />
      <Card
        name={images.image4.name}
        data={images.image4.data}
        onClick={handleClick}
      />
      <Card
        name={images.image5.name}
        data={images.image5.data}
        onClick={handleClick}
      />
      <Card
        name={images.image6.name}
        data={images.image6.data}
        onClick={handleClick}
      />
      <Card
        name={images.image7.name}
        data={images.image7.data}
        onClick={handleClick}
      />
      <Card
        name={images.image8.name}
        data={images.image8.data}
        onClick={handleClick}
      />
      <Card
        name={images.image9.name}
        data={images.image9.data}
        onClick={handleClick}
      />
      <Card
        name={images.image10.name}
        data={images.image10.data}
        onClick={handleClick}
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card" onClick={props.onClick}>
      <img src={props.data} alt={props.name} />
      <div>{props.name}</div>
    </div>
  );
}

export default CardsController;

import Map from "./components/map";
import Header from "./components/header";
import Login from "./components/login";
import Modal from "./components/modal";
import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [coordinations, setCoordinations] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    console.log(coordinations);
  }, [loggedIn]);

  // is not working as I like it to be look into that later
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      locationAllowed,
      locationNotAllowed
    );
  }, [loggedIn]);

  // useEffect(() => {
  //   console.log("username:", username, "password:", password);
  // }, [username, password]);

  function locationAllowed(location) {
    setCoordinations({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  function locationNotAllowed() {
    console.log("Not allowed");
  }

  async function handelLogin(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const userId = await response.json();
      setUserId(userId);
      setLoggedIn(true);
    }
  }

  function handelPassword(event) {
    setPassword(event.target.value);
  }

  function handelUsername(event) {
    setUserName(event.target.value);
  }

  function handelImgUrl(event) {
    console.log(event.target.value);
    setImgUrl(event.target.value);
  }

  async function handelPin(event) {
    event.preventDefault();
    const latitude = `${coordinations.latitude}`;
    const longitude = `${coordinations.longitude}`;

    const response = await fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, imgUrl, latitude, longitude }),
    });
  }

  // function handelUpload() {
  //   console.log("upload has been clicked");
  // }

  return (
    <>
      {loggedIn ? (
        <>
          <Header />
          <Modal onInputImg={handelImgUrl} onClick={handelPin} />
          <Map />
        </>
      ) : (
        <Login
          onClick={handelLogin}
          onInputPassword={handelPassword}
          onInputUsername={handelUsername}
        />
      )}
    </>
  );
}

export default App;

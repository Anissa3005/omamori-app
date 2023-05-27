import "./styles/app.css";

import Map from "./components/map";
import Header from "./components/header";
import Login from "./components/login";
import Modal from "./components/modal";
import SignUp from "./components/sign-up";
import { useEffect, useState } from "react";

function App() {
  // login states
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // sign-up states
  const [signUp, setSignUp] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  // location of user state
  const [coordinations, setCoordinations] = useState({
    latitude: 0,
    longitude: 0,
  });
  // upload img
  const [imgUrl, setImgUrl] = useState("");

  // useEffect(() => {
  //   console.log(coordinations);
  // }, [loggedIn]);

  // is not working as I like it to be look into that later
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      locationAllowed,
      locationNotAllowed
    );
  }, [loggedIn]);

  useEffect(() => {
    console.log("already exist", userAlreadyExist);
  }, [userAlreadyExist]);

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

  function handelSignUp(event) {
    setSignUp(true);
  }

  function handelNewUsername(event) {
    setNewUser(event.target.value);
  }

  function handelNewPassword(event) {
    setNewPassword(event.target.value);
  }

  async function handelCreateAccount(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newUser, newPassword }),
    });

    console.log(response);

    if (response.ok) {
      setSignUp(false);
    }

    if (response.status === 400) {
      setUserAlreadyExist(true);
    }
  }

  function handelBackToLogin() {
    setSignUp(false);
  }

  function handelImgUrl(event) {
    console.log(event.target.value);
    setImgUrl(event.target.value);
  }

  async function handelPin(event) {
    event.preventDefault();
    const latitude = `${coordinations.latitude}`;
    const longitude = `${coordinations.longitude}`;

    await fetch("http://localhost:8080/upload", {
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
      ) : signUp ? (
        <>
          <SignUp
            onClick={handelBackToLogin}
            onSignUp={handelCreateAccount}
            inputNewUser={handelNewUsername}
            inputNewPassword={handelNewPassword}
          />
          {userAlreadyExist ? <p>*User already exists</p> : <></>}
        </>
      ) : (
        <Login
          onClick={handelLogin}
          onInputPassword={handelPassword}
          onInputUsername={handelUsername}
          onSignUp={handelSignUp}
        />
      )}
    </>
  );
}

export default App;

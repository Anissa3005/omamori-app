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
  //Modal
  const [openModal, setOpenModal] = useState(false);

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

  // useEffect(() => {
  //   console.log("already exist", userAlreadyExist);
  // }, [userAlreadyExist]);

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
    if (!username || !password) return;

    const response = await fetch("https://omamori.onrender.com/login", {
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

    if (response.status === 404) {
      setLoggedIn(false);
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
    if (!newUser || !newPassword) return;

    const response = await fetch("https://omamori.onrender.com/signup", {
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
    setImgUrl(event.target.value);
  }

  function handelSignOut() {
    setLoggedIn(!loggedIn);
  }

  async function handelPin(event) {
    event.preventDefault();
    const latitude = `${coordinations.latitude}`;
    const longitude = `${coordinations.longitude}`;

    const response = await fetch("https://omamori.onrender.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, imgUrl, latitude, longitude }),
    });

    if (response.ok) {
      setOpenModal(!openModal);
    }
  }

  function handelModal() {
    console.log("close is clicked");
    setOpenModal(!openModal);
  }

  return (
    <>
      {loggedIn ? (
        <>
          <Header onClick={handelModal} onSignOut={handelSignOut} />
          <div className="map-modal-container">
            {openModal ? (
              <Modal
                onInputImg={handelImgUrl}
                onClick={handelPin}
                onCloseModal={handelModal}
              />
            ) : (
              <></>
            )}
            <Map />
          </div>
        </>
      ) : signUp ? (
        <>
          <SignUp
            onClick={handelBackToLogin}
            onSignUp={handelCreateAccount}
            inputNewUser={handelNewUsername}
            inputNewPassword={handelNewPassword}
            alreadyExists={userAlreadyExist}
          />
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

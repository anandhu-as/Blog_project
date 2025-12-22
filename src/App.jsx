import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import CreatePost from "./Pages/Posts/CreatePost";
import NavBar from "./Components/NavBar";
import { auth, provider } from "./Firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import About from "./Components/About";
import AboutUser from "./Components/AboutUser";
const App = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      navigate("/posts");
    });
  };

  return (
    <>
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/about" element={<About />} />
        <Route path="/userDetails" element={<AboutUser isAuth={isAuth}/>} />

        <Route
          path="/login"
          element={
            <Login setIsAuth={setIsAuth} signInWithGoogle={signInWithGoogle} />
          }
        />
        <Route path="/posts" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </>
  );
};

export default App;

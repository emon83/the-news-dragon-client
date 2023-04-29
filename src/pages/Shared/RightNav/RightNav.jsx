import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { useState } from "react";

const RightNav = () => {
  const [user, setUser] = useState()

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
    })
    .catch(error => console.log(error.message))
  }

  const handleGithubSignIn = () => {
    console.log('hello');
  }
  return (
    <div>
      <h4 className="fw-bold mt-4">Login with: {user && user.displayName}</h4>
      <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button onClick={handleGithubSignIn} variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className="fw-bold mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;

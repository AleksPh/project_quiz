"use client"; 
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { validateEmail } from "./validation"; 
import lockImage from '../../images/lock icon.svg';

const EmailPage = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value)); 
  };

  return (
    <div className="wrapper">
      <div className="wrapper__container">
      <Header stepBack={true} direct="/step2" />
        <div className="page-title text">
          Enter your email to get your personalized plan 
        </div>
        <div className="content-block">
          <div className="email-input-container">
            <input type="email" value={email}  onChange={handleEmailChange}  placeholder="Your email" className={`email-input ${isValid ? "" : "invalid"}`}/>
            {!isValid && <p className="error-message">Please enter a valid email address.</p>}
            <div className="privacy-notice">
              <span className="privacy-icon">
                <Image src = {lockImage} alt=''></Image>
              </span>
              <p className="privacy-notice-text">We protect your privacy and are committed to protecting your personal data. We never send spam emails, only relevant information.</p>
            </div>
          </div>
        </div>
        <div className="button-block">
          <Link href="/sellingPage">
            <button className="button-continue" disabled={!isValid}>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;

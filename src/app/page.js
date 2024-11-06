"use client"; 

import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Answers from "./answers/mainPage"; 
import watchImg from "../images/Hourglass Done.svg";

const MainPage = () => {

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header stepBack={false} />
        <div className="page-title">Start your journey</div>
        <div className="page-subtitle">
          <Image src={watchImg} alt="watch image" />
          <p>3 minute quiz</p>
        </div>
        <div className="quiz-block">
          <div className="quiz-title">Select your gender to begin:</div>
          <Answers />
        </div>  
      </div>  
    </div>
  );
}

export default MainPage;

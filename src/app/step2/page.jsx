"use client"; 
import { useProgress } from "../context/ProgressContext";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imageBlock from "../../images/illustration.svg"

const Step2 = () => {
  const { setCurrentPage } = useProgress();

  useEffect(() => {
    setCurrentPage(2);
  }, [setCurrentPage]);

  return (
    <div className="wrapper">
      <div className="wrapper__container">
      <Header stepBack={true} direct="/step1" />
        <Sidebar />
        <div className="page-title text">
        Action is the most powerful <br></br> antidote to procrastination
        </div>
        <div className="page-subtitle">
        Your actions build habits, and habits define <br></br> who you become.
        </div>
        <div className="image-block">
         <Image src={imageBlock} alt="watch image" />
        </div>
        <div className="button-block">
          <Link href="/emailPage">
            <button className="button-continue">Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step2;

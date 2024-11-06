"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Timer from "@/components/Timer";
import Image from "next/image";
import lockImg from "../../images/lock-grey.svg"
import SelectionForm from "@/components/PlanSelector";

const SellingPage = () => {
  return(
    <div className="wrapper">
      <div className="wrapper__container">
        <Header stepBack={true} direct='/emailPage'/>
        <div className="selling-block">
          <h2 className="selling-block__title">Choose your plan</h2>
          <div className="selling-block__discount">51% discount reserved for <Timer/></div>
          <div className="selling-block__options options">
              <SelectionForm></SelectionForm>
          </div>
          <p className="lock-notice"><Image src={lockImg} alt="lock image" ></Image>30-day money-back guarantee</p>
          <div className="button-block">
          <Link href="/">
            <button className="button-continue custom">Get My Plan</button>
          </Link>
        </div>
        <p className="privacy-notice">Please note, if you don&apos;t cancel before the discounted introductory plan ends, your subscription will automatically renew every month at the full price of $39.99. To cancel your subscription, please contact us at support@get-chillio.app</p>
        </div>
      </div>  
    </div>
  )
}
export default SellingPage
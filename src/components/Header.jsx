import Link from "next/link";
import Image from "next/image";
import arrowImg from "../images/arrow.svg"

const Header = ({ stepBack, direct }) => {
  return (
    <header className="header">
      <h2>Logo</h2>
      {stepBack && (
        <Link href={direct}>
         <Image src={arrowImg} alt="watch image" className="header__img" />
        </Link>
      )}
    </header>
  );
};

export default Header;

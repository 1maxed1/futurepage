import * as React from "react";
import { Link } from "react-router-dom";

//Button
const Button = ({styles}, link) => (
  <Link to={link}>
    <button onClick={consoleOnClick} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Get Started
    </button>
  </Link>
);

const consoleOnClick = () => {
  console.log("Clicked button")
}



export default Button;

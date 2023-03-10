import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Span inside header <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Some span here</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Simple header here
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Simple paragraph here
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Image might go here</p>

        
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div>
      
    </section>
  );
};

export default Hero;

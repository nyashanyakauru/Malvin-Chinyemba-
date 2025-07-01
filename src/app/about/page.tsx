import { FaInfo, FaGamepad, FaFootballBall, FaHeadphones, FaPlane, FaCar, FaApple, FaGuitar, FaCoffee,} from "react-icons/fa";
import Button from "../button";
import Icons from "../icons";



const About = () => {
    return (
        <div className="md:h-screen bg-(--fifth-theme-color) p-[15px] w-100%" id="about">
            <div className="flex justify-center items-center pb-[5px]">
                <FaInfo size={45} className="border-solid bg-(--icon-color) text-(--main-text-color) rounded-3xl p-[4px]" />
            </div>
            <div className="relative flex flex-col items-center">
                <span className="absolute text-(--main-text-color) text-7xl z-0 opacity-10 font-bold -translate-y-3 underline decoration-2 ">
                    ABOUT ME
                </span>
                <span className="relative text-4xl font-bold z-10 text-(--main-text-color) border-b-2 border-(--text-color-gold)  ">
                    <span className="absolute left-10 right-10 bottom-1 border-b-1 border-(--text-color-gold)"></span>
                    ABOUT ME
                </span>
            </div>
            <p className="  md:pl-[80px] md:mt-[15px] mt-[25px] md:px-0 px-5 text-(--main-text-color) font-light text-m "><span className=" text-(--text-color-gold)">Hey, I&apos;m Malvin</span> - a passionate digital marketer who helps brand grow through creative content, smart strategies and real connections.
                I focus on market that not only converts but truly connects. With every project, I bring energy, insight and results that matter. Lets build something impactfull together.
            </p>
            <div className=" md:flex md:pr-[80px] md:pl-[80px] md:mt-[35px]  mt-[35px] md:px-0 px-5 md:justify-between">
                <div className="W-[70%]">
                    <h4 className="text-(--main-text-color) font-bold text-lg mb-[10px]">PERSONAL DETAILS</h4>
                    <p className="text-(--second-theme-color) font-normal text-sm mr-[30px] md:mb-[35px] mb-[5px]">
                        <span className="text-(--text-color-gold) font-bold text-sm">Nationality:</span> 05-10-2003
                    </p>
                    <p className="text-(--second-theme-color) font-normal text-sm mr-[30px] md:mb-[35px] mb-[5px]">
                        <span className="text-(--text-color-gold) font-bold text-sm">Phone:</span> +263 77 658 3679
                    </p>
                    <p className="text-(--second-theme-color) font-normal text-sm mr-[30px] md:mb-[35px] mb-[5px]">
                        <span className="text-(--text-color-gold) font-bold text-sm">Email:</span> chinyembamalvin9@gmail
                    </p>
                    <p className="text-(--second-theme-color) font-normal text-sm mr-[30px] md:mb-[35px] mb-[25px]">
                        <span className="text-(--text-color-gold) font-bold text-sm">Address:</span> 12304 Budirio, Harare, Zimbabwe
                    </p>
                </div>


                <div className="md:ml-[80px]  md:w-[40%] w-full md:px-0  ">
                    <h4 className="text-(--main-text-color) font-bold text-lg mb-[10px]">MY INTERESTS</h4>
                    <div className="flex flex-wrap">
                        <Icons
                        Icon={<FaGamepad size={35} className="text-(--main-text-color)" />}
                        hobby="Games"
                        />
                         <Icons
                        Icon={<FaFootballBall size={35} className="text-(--main-text-color)" />}
                        hobby="Football"
                        />
                        <Icons
                        Icon={<FaHeadphones size={35} className="text-(--main-text-color)" />}
                        hobby="Music"
                        />
                        <Icons
                        Icon={<FaPlane size={35} className="text-(--main-text-color)" />}
                        hobby="Travels"
                        />
                        <Icons
                        Icon={<FaCar size={35} className="text-(--main-text-color)" />}
                        hobby="Cars"
                        />
                        <Icons
                        Icon={<FaApple size={35} className="text-(--main-text-color)" />}
                        hobby="Mac-Os"
                        />
                        <Icons
                        Icon={<FaGuitar size={35} className="text-(--main-text-color)" />}
                        hobby="Guitar"
                        />
                        <Icons
                        Icon={<FaCoffee size={35} className="text-(--main-text-color)" />}
                        hobby="Coffee"
                        />
                        
                    </div>
                   

                </div>
                </div>
                   <div className="flex items-center justify-center md:ml-[410px]">
                        <Button
                            bgcolor="bg-(--forth-theme-color)"
                            textcolor="text-(--text-color-gold)"
                            label="Download Cv "
                        />
                    </div>
        </div>
    );
}

export default About;
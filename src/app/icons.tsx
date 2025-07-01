import { ReactElement } from "react";

interface IconProps{
    Icon:ReactElement
    hobby:string
}

const Icons = ({Icon, hobby}:IconProps ) =>{
    return(
       <div className="border-solid bg-(--bg-color) hover:bg-(--yellow-color) text-(--main-text-color) rounded-2xl md:p-[4px] p-2px w-20 block text-center flex flex-col justify-center items-center border-3 border-(--second-theme) md:mr-[20px] mb-5 md:mb-[30px]">
         {Icon}
         <p className="text-center mt-0 text-lg">{hobby}</p>
        </div>
    )
}

export default Icons
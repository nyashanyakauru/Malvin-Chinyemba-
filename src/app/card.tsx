
import { ReactElement } from "react"

interface CardProps{
    text:string,
    header: string,
    icon: ReactElement
    
}

const Card = ({text,header,icon} : CardProps) => {
  return (
    <div  className="flex bg-(--second-theme) flex-col w-80 h-55  py-10 px-10 items-center">
      <div className=" text-(--icon-color) ">
      {icon}
      </div>
      <div className=" ">
      <h4 className="text-(--main-text-color) mb-1 text-lg font-bold">{header}</h4>
      <p className=" text-(--second-theme-color) text-md">{text}</p>
      </div>
    </div>
  )
}

export default Card

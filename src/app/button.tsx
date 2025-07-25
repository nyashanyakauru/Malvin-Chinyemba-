import Link from "next/link"

interface ButtonProps{
  label:string
  textcolor: string
  bgcolor:string
  
}
const Button = ( {label, bgcolor, textcolor}: ButtonProps) => {
  return (
    <div>
      <button className= {` p-[10px]  font-bold px-8 rounded-lg hover:bg-(--main-text-color) border-[2px] border-(--main-text-color) ${bgcolor} ${textcolor} `}><Link href="/malvin chinyemba.pdf"> {label}</Link> </button>
    </div>
  )
}

export default Button

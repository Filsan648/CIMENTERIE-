interface ButtonProps {
  text: string
}
function Button ({text}: ButtonProps){
    return(
        <div className="w-max bg-yellow-500 p-3 hover:bg-yellow-700 transition duration-700">

{text}
        </div>
    )

}
export  default Button;

interface DescriptionProps {
  description: string
}
function Description({description}: DescriptionProps){
    return(
        <div>
            <h1 className="text-6xl text-black/90 text-wrap font-semibold pb-10">{description}</h1>
        </div>
    )
}
export default Description
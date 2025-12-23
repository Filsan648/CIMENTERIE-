interface DescriptionProps {
  description: string
}
function Description({description}: DescriptionProps){
    return(
        <div>
            <h1 className="text-3xl font-medium">{description}</h1>
        </div>
    )
}
export default Description
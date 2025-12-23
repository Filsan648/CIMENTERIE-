interface titleProps {
  title: string
}
function Title({title}: titleProps){
    return(
        <div>
            <h1 className="text-sm text-yellow-500 pb-6">{title}</h1>
        </div>
    )
}
export default Title;
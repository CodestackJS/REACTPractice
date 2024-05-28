//creating a reusable button


interface ButtonProps {
    children: string
    onClickFunction: () => void
}




const Button = ({children, onClickFunction}:ButtonProps) => {
  return (
    <>
    
    
    <button onClick={onClickFunction} type="button" className="btn btn-primary">{children}</button>
    
    
    </>
  )
}

export default Button
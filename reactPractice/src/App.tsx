import { useState } from "react";
import Button from "./Components/Button/Button"

// only above this line are imports

// below imports are props(interface) above all functions

const App = () => {
  //all code must be below this line

  //creating a useState
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jose");
  const [car, setCar] = useState({
    name: "Mazda",
    models: ["CX-30 ", "CX-50 ","CX-5 "]
  })

  const handleClick = () => {
    console.log('This is handleClick');
  }
  const handleClick2 = () => {
    console.log('This is for same button different text function')
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount +1);
  }

  const changingName = () => {
    setName("Jose Martinez");
  }
  const addcarModel =() => {
    setCar({...car, models:[...car.models,"Mazda 3"]})
  }

  return (
    <>
    
    <div className="myContainer">
    <div className="row">
    <Button onClickFunction={handleClick}>this is the reusable text </Button>
   
    <Button onClickFunction={handleClick2}>Same button different text </Button>

    <div>
    <span>{count}</span>
    <Button onClickFunction={handleIncrement}>Increment by 1 </Button>
    </div>

    <span className="name">{name}</span>
    <Button onClickFunction={changingName}>Changing a name</Button>
    
    <span className="name">{car.models}</span>
    <Button onClickFunction={addcarModel}>adding Mazda 3</Button>



    </div>

    </div>
    
    </>
  )
}

export default App
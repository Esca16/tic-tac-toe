// import { useState } from "react"

const Square = ({ value, onSquareClick }) => {

    // const [value, setValue] = useState();

    // const clickHandler = () => {
    //     setValue("X");
    // }

    return (
        <>
            <button className="w-16 h-16 border-2 border-black" onClick={onSquareClick}>{value}</button>
        </>
    )
}

export default Square
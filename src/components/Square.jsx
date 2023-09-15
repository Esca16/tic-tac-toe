// import { useState } from "react"

const Square = ({ value, onSquareClick }) => {

    // const [value, setValue] = useState();

    // const clickHandler = () => {
    //     setValue("X");
    // }

    return (
        <>
            <button className="w-16 h-16 border-2 border-black relative flex" onClick={onSquareClick}>
                <div className="flex justify-center w-full h-full items-center">
                    <p className="text-center font-semibold text-4xl">{value}</p>
                </div>
            </button>
        </>
    )
}

export default Square
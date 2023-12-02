import React from 'react';
import { useNavigate } from 'react-router-dom';
const Button =({name})=>{
    const homepage = useNavigate()

    function home() {
        homepage(-1)
    }
    return(
        <>
           <button
                onClick={home}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
                {name}
            </button>
        </>
    )
};
export default Button;
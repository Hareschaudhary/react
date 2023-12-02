import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonTwo = ({name}) => {
    const navigtion =useNavigate()
    function navigtio(){
      navigtion("./new")
    }
    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={navigtio}
            >
                {name}</button>
        </>
    )
};
export default ButtonTwo;
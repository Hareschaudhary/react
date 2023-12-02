import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardApi = ({ id }) => {
    let [carddata, setcarddata] = useState([])
    let [length, setlength] = useState()
    let [i, seti] = useState(5)
    const api = "https://dummyjson.com/carts"


    const Response = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            let slice = data.carts.slice(0, i)
            setlength(data.carts.length)
            setcarddata(slice)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        Response(api)
    }, [next]);
    function next() {
        let a = i += 5
        seti(a)
        if (a >= length) {
            a = length
        }
     
    }
    // console.log(carddata)
    return (
        <>
            <Card data={carddata} id={id} />
            <button
                onClick={next}
                style={{
                    position: 'absolute',
                    bottom: "-80px"
                }}
                className="
                bg-blue-500
                hover:bg-blue-400
                text-white
                    font-bold 
                    py-2 
                    px-4 
                    border-b-4
                border-blue-700
                hover:border-blue-500 rounded"
            >
                next
            </button>
        </>
    )
}
export default CardApi;
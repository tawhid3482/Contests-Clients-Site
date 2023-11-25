import { useEffect, useState } from "react";

const Usewinner = () => {
    const [winners, setWinners]= useState()
    useEffect(()=>{
        fetch('winner.json')
        .then(res => res.json())
        .then(data =>{
            setWinners(data)
        })
    },[])
    return [winners]
};

export default Usewinner;
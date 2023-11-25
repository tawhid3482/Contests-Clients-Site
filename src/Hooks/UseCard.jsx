import { useEffect, useState } from "react";

const UseCard = () => {
    const [contests, setContests] = useState();
    const [loading,setloading]=useState(true)

    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data =>{ setContests(data)
            setloading(false)
            })
           
    },[]);

    return [contests,loading]
};

export default UseCard;

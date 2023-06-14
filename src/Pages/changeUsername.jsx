import { ContextValues } from "../App";
import { useContext, useState } from "react";


export const ChangeUsername = () => {

    const {setUsername} = useContext(ContextValues);
    const [newUsername, setNewUsername] = useState("");

    const handleChange = (event) => {
        return setNewUsername(event.target.value);
    }

    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={() => setUsername(newUsername)}>Change Username</button>
        </div>
    );
}
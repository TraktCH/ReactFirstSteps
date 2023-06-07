import { ChangeUsername } from "./changeUsername";
import { ContextValues } from "../App";
import { useContext } from "react";
import '../App.css';

export const Profile = () => {

    const {username} = useContext(ContextValues);

    return (
        <div className="App">   
            <p>This is the profile page of: {username}</p><br />
            <ChangeUsername />
        </div>
    );
} 
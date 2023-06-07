import '../App.css';
import { ContextValues } from "../App";
import { useContext } from "react";

export const Home = () => {

    const {username} = useContext(ContextValues);

    return (
        <div className="App">
            <p>This is the Home Page {username}</p>
        </div>
    );
} 
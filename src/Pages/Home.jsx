import '../App.css';
import { ContextValues } from "../App";
import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export const Home = () => {

    const { data: catFact, isLoading, refetch } = useQuery(["cat"], () => {
        return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    })

    const {username} = useContext(ContextValues);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="App">
            <p>This is the Home Page {username}</p>
            <p>{catFact?.fact}</p>
            <button onClick={refetch}>Refetch Data</button>
        </div>
    );
} 
import { useEffect, useState } from "react"
import axios from "axios"
const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [loading,isLoading]=useState(true);
    const [error,setError]=useState("");
    const fetchdata=async()=>{
        try{
            const response=await axios.get(url)
            setData(response.data);
        }catch{
            setError(error)
        }finally{
            isLoading(false);
        }
    }
    useEffect(()=>{
        fetchdata()
    },[url]);
    return {data,loading,error}
}
export default useFetch;

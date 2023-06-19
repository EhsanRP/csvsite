import axios from "axios";

export const fetch = async ()=>{
    const uri = "http://127.0.0.1:8080/user/profile/ehsanrp";
    const response = await axios.get(uri)
    return response.data
}
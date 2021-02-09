import axios from "axios";

export const getRandomUser = async function() {
        return await axios.get("https://randomuser.me/api/?results=20");
    }; 



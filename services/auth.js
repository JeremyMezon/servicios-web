import axios from "axios"

const auth = async (username,password) => {
    try{
        const data = await axios.post("http://localhost:4040/auth",{
            username,
            password
        });
    
        const {hasAuth} = data.data;
        return hasAuth;

    }catch(e){
        console.log("Ha ocurrido un error: ",e);
        return false
    }
}

export default auth
import { useState } from "react"
import auth from "../services/auth";

const LoginBox = () => {

    const [user,setUser] = useState("")
    const [password,setPassword] = useState("");
    const [invalid,setInvalid] = useState(false);

    const validAuth = async () => {
        const hasAuth = await auth(user,password);
        if(hasAuth){
            setInvalid(false);
            localStorage.setItem("auth",true);
        }else{
            setInvalid(true)
        }
    }

    return (
        <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" type="text" placeholder="Username"
      onChange={e => {setUser(e.target.value)}} 
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" type="password" placeholder="******************"
      onChange={e => {setPassword(e.target.value)}}
      />
      {invalid && <p className="text-red-500 text-xs italic">Please choose a valid password.</p>}
    </div>
    <div className="flex items-center justify-between">
      <button 
      className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      onClick={()=>validAuth()}
      >
        Sign In
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    )
}

export default LoginBox
import {React, useState} from 'react'
import axios from 'axios'
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register',{name}, {email}).then((result) => console.log(result)).catch(err => console.log(err))
        
    }
  return (
    <div>
        <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
    </div>
  )
}

export default Signup
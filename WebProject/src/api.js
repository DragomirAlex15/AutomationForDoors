import axios from 'axios';

const getEntries = async ()=>{
    return await axios.get("http://localhost:3001/data")
    .then((res)=>{ return res});
}

export default getEntries;
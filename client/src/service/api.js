import axios from 'axios';

const URL = 'http://localhost:8000';
export const adduser = async(data) =>{
    try{
       return await axios.post(`${URL}/add`,data);
    }
    catch(error){
            console.log('user api call error',error);
    }
}
export const getuser = async() =>{
    try{
       return await axios.get(`${URL}/all`);

    }
    catch(error){
        console.log('user data call error',error);
    }

}
export const edituser = async(user,id) =>{
    try{
       return await axios.put(`${URL}/${id}`,user);
    }
    catch(error){
            console.log('edit user api call error',error);
    }
}

export const getoneuser = async(id) =>{
    try{
        return await axios.get(`${URL}/${id}`);
    }
    catch(error){
        console.log('one user api call error',error);
    }
}
export const deleteuser =  async(id) =>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error)
    {
        console.log('delete api error',error);
    }
}
import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { edituser, getoneuser } from "../service/api";
import {useNavigate,useParams} from "react-router-dom";

const Container = styled(FormGroup)`
        width:50%;
        margin: 5% auto 0 auto;
        & > div{
            margin-top:20px;
        }
        & > div > button{
            margin:auto;
            width:150px;
        `


const Edituser = () => {
    const defaultvalue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }
    const [user, setUser] = useState(defaultvalue);
    
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        loaduserdetails();
    },[])

    const loaduserdetails = async() => {
        const response = await getoneuser(id);
        setUser(response.data);
    }
     
    const onvalueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
        console.log(user);
    }
    const edituserdetails = async() =>{
       await edituser(user);
       navigate('/all');
    }
    return (
        <Container>
            <Typography variant="h4" >Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> edituserdetails()}>Edit Usaer</Button>
            </FormControl>
        </Container>
    );
}
export default Edituser;
import styled from "@emotion/styled";
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import { useState } from "react";
import { adduser } from "../service/api";
import {useNavigate} from "react-router-dom";

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


const Adduser = () => {
    const defaultvalue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }
    const [user, setUser] = useState(defaultvalue);
    const navigate = useNavigate();
    const onvalueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
        console.log(user);
    }
    const adduserdetails = async() =>{
       await adduser(user);
       navigate('/all');
    }
    return (
        <Container>
            <Typography variant="h4" >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input onChange={(e) => onvalueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> adduserdetails()}>Add Usaer</Button>
            </FormControl>
        </Container>
    );
}
export default Adduser;
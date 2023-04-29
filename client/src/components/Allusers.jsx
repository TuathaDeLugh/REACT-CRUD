import {Button, Table,TableBody,TableCell,TableHead,TableRow,styled} from '@mui/material';
import { getuser } from '../service/api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width:90%;
    margin:40px auto 0 auto;`
    const THead = styled(TableRow)`
    background:#000000;
    & > th{
        color:#fff;
        font-size:20px;
    }
    `
const Allusers = () => {

    const [users,setusers] = useState([]);

    useEffect(()=>{
        getallusers();
    },[]);
    const getallusers = async() =>{
        let response = await getuser();
        setusers(response.data);
        console.log(response.data);
    }
    return (
    <StyledTable>
        <TableHead>
            <THead>
               
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
            </THead>
        </TableHead>
        <TableBody>
            {   
                users.map(user => (
                    <TableRow>
                        
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell><Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button variant='contained' color='secondary'>Delete</Button></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
    );
}
 
export default Allusers;
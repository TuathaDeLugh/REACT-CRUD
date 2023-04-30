import {Button, Table,TableBody,TableCell,TableHead,TableRow,styled} from '@mui/material';
import { getuser,deleteuser } from '../service/api';
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
    let no = 1;
    const [users,setusers] = useState([]);

    useEffect(()=>{
        getallusers();
    },[]);
    const getallusers = async() =>{
        let response = await getuser();
        setusers(response.data);
        console.log(response.data);
    }

    const deleteuserdetail= async(id)=>{
        await deleteuser(id);
        getallusers();
    }

    return (
        <div>
    <StyledTable>
        <TableHead>
            <Button variant='contained' style={{marginBottom:10}} component={Link} to={`/add`}>Insert</Button>
            <THead>
               
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell></TableCell>
            </THead>
        </TableHead>
        <TableBody >
            {   
                users.map(user => (
                    <TableRow key={user._id}>
                        
                        <TableCell>{no++}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell><Button variant='contained' style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button variant='contained' color='secondary' onClick={()=> deleteuserdetail(user._id)}>Delete</Button></TableCell>
                        
                    </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
            </div>
    );
}
 
export default Allusers;
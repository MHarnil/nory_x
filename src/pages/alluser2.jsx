import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { enqueueSnackbar } from 'notistack';

function Alluser2() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  // Fetch all users
  function allusers() {
    axios
      .get('https://67fcf61f3da09811b17426ed.mockapi.io/user')
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    allusers();
  }, []);

  // Navigate to edit
  function Edituser(users) {
    navigate(`/edit/${users.id}`);
  }

  // Delete user
  function Deleteuser(id) {
    axios
      .delete(`https://67fcf61f3da09811b17426ed.mockapi.io/user/${id}`)
      .then(() => {
        enqueueSnackbar('User deleted successfully!', { variant: 'success' });
        allusers();
      })
      .catch((err) => {
        enqueueSnackbar('Error deleting user!', { variant: 'error' });
        console.log(err);
      });
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 25px',
        }}
      >
        <h2>All Users</h2>
        <Link to="/user2">
          <Button variant="outlined" sx={{ backgroundColor: 'lightblue', color: 'black' }}>
            Add User
          </Button>
        </Link>
      </div>

      <table
        className="col-md-12 container"
        style={{ width: '100%', textAlign: 'start', border: '1px solid grey', padding: '20px', marginTop: '20px' }}
      >
        <thead>
        <tr>
          <td style={headerStyle}>Id</td>
          <td style={headerStyle}>Fullname</td>
          <td style={headerStyle}>Phonenumber</td>
          <td style={headerStyle}>Company</td>
          <td style={headerStyle}>Role</td>
          <td style={headerStyle}>Action</td>
        </tr>
        </thead>
        <tbody>
        {user.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.fullname}</td>
            <td>{item.phonenumber}</td>
            <td>{item.company}</td>
            <td>{item.role}</td>
            <td>
              <Button
                style={{ backgroundColor: 'lightyellow', padding: '10px 15px', marginRight: '4px' }}
                onClick={() => Edituser(item)}
              >
                Edit
              </Button>
              <Button
                style={{ backgroundColor: 'darkred', color: 'white', padding: '10px' }}
                onClick={() => Deleteuser(item.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  paddingBottom: '20px',
  fontWeight: '700',
  fontSize: '20px',
  paddingRight: '20px',
};

export default Alluser2;

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FormComp() {
  const [name, setName] = React.useState("");
  const [details, setDetails] = React.useState("");
  const history = useNavigate();
  
  const submitForm = () => {
    axios.post('http://localhost:8080/user/new', { name, details })
      .then((res) => {
        console.log('res', res);
        alert('User created successfully');
        history('/');
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        alert('Failed to create user');
      });
  };

  const updateUser = () => {
    axios.put(`http://localhost:8080/user/update/new`, { name, details })
      .then((res) => {
        console.log('res', res);
        alert('User updated successfully');
        history('/');
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        alert('Failed to update user');
      });
  };

  const deleteUser = () => {
    axios.delete(`http://localhost:8080/user/delete/new`)
      .then((res) => {
        console.log('res', res);
        alert('User deleted successfully');
        history('/');
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      });
  };

  return (
    <div className='row container'>
      <Form className="col-md-8">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>User Details</Form.Label>
          <Form.Control value={details} onChange={(e) => setDetails(e.target.value)} as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={submitForm}>Submit</Button>
        <Button onClick={updateUser}>Update</Button>
        <Button onClick={deleteUser}>Delete</Button>
      </Form>
    </div>
  );
}

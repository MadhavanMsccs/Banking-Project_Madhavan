import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import userContext from "./context.js";
import Form from 'react-bootstrap/Form';
import './Create.css'; // Import CSS file


export default function Create() {
  const ctx = useContext(userContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState(0);
  const [accountNo, setAccountNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if username or email already exists
    const isDuplicateUsername = ctx.users.some(user => user.name === name);
    const isDuplicateEmail = ctx.users.some(user => user.email === email);

    if (isDuplicateUsername || isDuplicateEmail) {
      alert("Username or email already exists!");
      return;
    }

    // Add new user data
    const newUser = { id: accountNo, name, email, password, amount };
    ctx.users.push(newUser);
    alert("Your New Account Created Successfully");
  }

  return (
    <div className="container">
      <div className="card-container">
        <Form onSubmit={handleSubmit}>
          <h4>Bank Account Registration Form</h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label id="label">User Name:</Form.Label>
            <Form.Control type="text" id="input" value={name} onChange={(e) => setName(e.target.value)} />
            
            <Form.Label id="label">Email:</Form.Label>
            <Form.Control type="email" id="input" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <Form.Label id="label">Password:</Form.Label>
            <Form.Control type="password" id="input" value={password} onChange={(e) => setPassword(e.target.value)} />
           
            <Button type="submit" id="submitbtn" variant="danger">Submit</Button>
            
            <Button type="reset" id="resetbtn" variant="primary">Reset</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

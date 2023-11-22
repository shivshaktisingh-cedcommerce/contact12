import React, { useState } from "react";
import "./Registration.css";

type FormKeys = {
  name: string;
  email: string;
  password: string;
  mobile: string;
  api_key: string;
};

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    try {
        const res = await fetch(
            `http://localhost:81/Project/index.php`,
            {
                headers: {
                    'Content-Type': 'application/json',
                  },
                method:'POST',
                body:JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password,
                        mobile: formData.mobile,
                        api_key: 'register',    
                      
                })
            }
          );
      const data = await res.json();
      console.log(data);
    } catch (err:any) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;

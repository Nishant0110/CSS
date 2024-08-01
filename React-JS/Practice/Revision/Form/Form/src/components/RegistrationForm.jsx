import { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleInputData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    console.log(formData);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h1>Registration Form</h1>
        <label htmlFor="firstName">firstname</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="lastName">lastname</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputData}
        />
        <br />
        <label htmlFor="phoneNumber">phonenumber</label>
        <input
          type="phone"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputData}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default RegistrationForm;

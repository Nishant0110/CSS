import React, { useState } from 'react';

// Custom hook for input validation
function useInput(initialValue, validation) {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        setError(validation(e.target.value));
    }

    return {
        value,
        onChange: handleChange,
        error
    };
}

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression for password validation
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// Regular expression for phone number validation
const phoneRegex = /^\d{10}$/;

// Validation function for email
const validateEmail = (email) => {
    if (!emailRegex.test(email)) {
        return 'Invalid email address';
    }
    return '';
};

// Validation function for password
const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
        return 'Password must be at least 8 characters long and contain at least one digit, one lowercase and one uppercase letter';
    }
    return '';
};

// Validation function for phone number
const validatePhone = (phone) => {
    if (!phoneRegex.test(phone)) {
        return 'Invalid phone number';
    }
    return '';
};

const RegistrationForm = () => {
    // State variables for form inputs
    const email = useInput('', validateEmail);
    const password = useInput('', validatePassword);
    const retypePassword = useInput('', (value) => {
        if (value !== password.value) {
            return 'Passwords do not match';
        }
        return '';
    });
    const firstName = useInput('');
    const lastName = useInput('');
    const phone = useInput('', validatePhone);
    const address = useInput('');
    const town = useInput('');
    const region = useInput('');
    const zipcode = useInput('');
    const [country, setCountry] = useState('');

    // List of countries
    const countryOptions = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        // Add more countries as needed
    ];

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !email.error &&
            !password.error &&
            !retypePassword.error &&
            !phone.error
        ) {
            // Business logic for form submission
            console.log('Registration Successful!');
            console.log('Email:', email.value);
            console.log('Password:', password.value);
            console.log('First Name:', firstName.value);
            console.log('Last Name:', lastName.value);
            console.log('Phone:', phone.value);
            console.log('Address:', address.value);
            console.log('Town:', town.value);
            console.log('Region:', region.value);
            console.log('Zipcode:', zipcode.value);
            console.log('Country:', country);
        } else {
            console.log('Form has errors, please correct them.');
        }
    };

    return (
        <form onSubmit={handleSubmit} >

            <h1>USER REGISTRATION</h1>
            <p><span className='text-danger'>*</span>FILED MARKED ARE REQUIRED</p>
            <table className='w-100% '   >
                <tr >
                    <td><span className='text-danger'>*</span> <label>Email:</label></td>
                    <td><input type="email" {...email} /></td>
                    {email.error && <p>{email.error}</p>}
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span> <label>Password:</label></td>
                    <td><input type="password" {...password} /></td>
                    {password.error && <p>{password.error}</p>}
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span> <label>Retype Password:</label></td>
                    <td> <input type="password" {...retypePassword} /></td>
                    {retypePassword.error && <p>{retypePassword.error}</p>}
                </tr>
                <tr>
                    <td> <span className='text-danger'>*</span> <label>First Name:</label></td>
                    <td><input type="text" {...firstName} /></td>
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span><label>Last Name:</label></td>
                    <td><input type="text" {...lastName} /></td>
                </tr>
                <tr>
                    <td> <span className='text-danger'>*</span><label>Phone:</label></td>
                    <td> <input type="text" {...phone} /></td>
                    {phone.error && <p>{phone.error}</p>}
                </tr>
                <tr>
                    <td> <span className='text-danger'>*</span><label>Address:</label></td>
                    <td><input type="text" {...address} /></td>
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span> <label>Town:</label></td>
                    <td><input type="text" {...town} /></td>
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span> <label>Region:</label></td>
                    <td><input type="text" {...region} /></td>
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span><label>Zipcode:</label></td>
                    <td><input type="text" {...zipcode} /></td>
                </tr>
                <tr>
                    <td><span className='text-danger'>*</span><label>Country:</label></td>
                    <td>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">Select Country</option>
                            {countryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </td>
                </tr>
                <button type="submit">Register</button>
            </table>
        </form>
    );
};

export default RegistrationForm;
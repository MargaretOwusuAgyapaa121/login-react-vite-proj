// import { FormControl,TextField, } from "@mui/material"

// export default function Input(){
//     return(
//         <FormControl style={{}}>
//             <TextField id="outlined-basic" label="Firs tName" variant="outlined" />
//             <TextField id="outlined-basic" label="Last Name" variant="outlined" />
//         </FormControl>
//     )
// }

import React, { useState } from "react";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
} from "@mui/material";

const LoginForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: "",
    dob: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        mt: 5,
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: "white",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        {/* Email Field */}
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Gender Radio Group */}
        <FormControl component="fieldset" sx={{ marginY: 2 }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Date of Birth Field */}
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;

import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Avatar,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("All fields are required");
      setSnackbarOpen(true);
      return;
    }

    try {
      console.log("Username:", username);
      console.log("Password:", password);
      const response = await axios.post("http://localhost:8080/admin/login", {
        adminEmail: username,
        adminPassword: password,
      });

      if (response.status === 200) {
        const adminData = response.data;
        console.log("Admin Data:", adminData);
        // Handle successful login
      } else {
        const errorResponse = response.data; // Assuming error response contains a message field
        console.error("Invalid admin credentials");
        setErrorMessage(errorResponse.message || "Invalid admin credentials");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      // Handle network or server errors
      setErrorMessage(
        "An error occurred during login. Please try again later."
      );
      setSnackbarOpen(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar />
          <Typography component="h1" variant="h5">
            Admin Login
          </Typography>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={errorMessage}
      />
    </div>
  );
};

export default AdminLogin;

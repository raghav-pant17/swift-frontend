import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Container, Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import RoomIcon from "@mui/icons-material/Room";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const centerBoth = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

const headingStyle = {
  textAlign: "center",
  backgroundColor: "#3f51b5",
  color: "#fff",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "20px",
};

const smallerGridItem = {
  minHeight: 150,
  padding: 10,
};

const AdminDashboard = () => {
  const createDashboardItem = (title, icon, linkTo) => (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ ...smallerGridItem }}>
        <div style={centerBoth}>
          {icon}
          <Typography variant="h6" style={{ marginTop: 10 }}>
            {title}
          </Typography>
          <Button variant="contained" color="primary">
            <Link
              to={linkTo}
              style={{ textDecoration: "none", color: "white" }}
            >
              Add
            </Link>
          </Button>
        </div>
      </Paper>
    </Grid>
  );

  return (
    <Container>
      <div style={headingStyle}>
        <Typography variant="h4">Admin Dashboard</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          {createDashboardItem("Add Location", <RoomIcon />, "/add-location")}
          {createDashboardItem("Add Theatre", <RoomIcon />, "/add-theatre")}
        </Grid>
        <Grid container item xs={12} spacing={3}>
          {createDashboardItem("Add Movie", <MovieIcon />, "/add-movie")}
          {createDashboardItem("Add Show", <CalendarTodayIcon />, "/add-show")}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;

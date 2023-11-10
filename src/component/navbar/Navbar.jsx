import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "grey.50",
              fontWeight: "semiBold",
            }}
          >
            Student Management
          </Typography>
          <Stack spacing={2} sx={{ marginLeft: "auto" }} direction="row">
            <MenuItem component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about">
              About
            </MenuItem>
            <MenuItem component={Link} to="/contact">
              Contact
            </MenuItem>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

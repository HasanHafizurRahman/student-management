import { Button, Stack } from "@mui/material";
import banner from "../assets/1051.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack alignItems="center">
      <img src={banner} loading="lazy" height="500px" alt="school image" />
      <a href="https://storyset.com/transport">
        Transport illustrations by Storyset
      </a>
      <Button component={Link} to="/students" variant="contained" size="large">
        go to students dashboard
      </Button>
    </Stack>
  );
};

export default Home;

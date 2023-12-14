import React from "react";
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


const StyleButton = styled(Button)({
  padding: 16,
  textTransform: "none",
  fontSize: 19,
});

const Home = () => {
  return (
    <Box
      sx={{
        objectFit: "cover",
        position: "absolute",
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
        sx={{ height: "100vh" }}
      >
      </Stack>
    </Box>
  );
};

export default Home;

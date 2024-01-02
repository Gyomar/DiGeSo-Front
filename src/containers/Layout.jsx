import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TopAppBar from '../components/TopAppBar';


const Layout = ({ children }) => {

  return (
    <div className="Layout">
      <CssBaseline />
      <TopAppBar />
        <Box
          sx={{
            ml:  "65px",
            width: "calc(100% - 65px)",
            height: "calc(100vh - 64px)",
            bgcolor: "rgba(0, 0, 0, .03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
    </div>
  );
};

export default Layout;

import CssBaseline from "@mui/material/CssBaseline";
import TopAppBar from '../components/TopAppBar';
import Footer from '../components/Footer';


const Layout = ({ children }) => {

  return (
    <div className="Layout">
      <CssBaseline />
      <TopAppBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

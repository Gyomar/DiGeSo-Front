import { Routes, Route } from 'react-router-dom';
import Home from '/src/pages/Home';
import AboutUs from '/src/pages/AboutUs';
import Services from '/src/pages/Services';
import ContactUs from '/src/pages/ContactUs';
import NotFound from '/src/pages/NotFound';
import PrivacyPolicies from '/src/pages/PrivacyPolicies';

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/privacy-policies" element={<PrivacyPolicies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';
import PrivacyPolicies from '../pages/PrivacyPolicies';

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
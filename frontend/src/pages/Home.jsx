import Hero from "../components/Hero";
import { useAuth } from "../context/authContext";
import LandingNav from "../components/LandingNav";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Payments from "../components/Payments";
import CustomerLogos from "../components/CustomerLogos";

const Home = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="bg-light">
      <LandingNav />
      <Hero />
      <Features />
      <Payments />
      <CustomerLogos />
      <Footer />
    </div>
  );
};

export default Home;

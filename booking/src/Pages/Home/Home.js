import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/PropertList/PropertyList";
import FeaturedProps from "../../Components/FeaturedProps/FeaturedProps";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h3 className="homeTitle">Browse By Property</h3>
        <PropertyList />
        <h3 className="homeTitle2">Homes Guest Love</h3>
        <FeaturedProps />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;

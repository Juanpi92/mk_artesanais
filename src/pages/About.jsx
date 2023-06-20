import React from "react";
import "./about.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const About = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const position = {
    lat: -22.85019720942373,
    lng: -43.53525379181903,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAfgURsmeMj2nRSLA1MvHveO-CrQRdBPis",
  });

  return (
    <>
      <div className="container_principal" id="about_container">
        <section className="section">
          <div className="title_principal">
            <p>Você conhece o nossos Burguers?</p>
          </div>
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae unde itaque deserunt animi enim molestias. Eaque
              placeat repudiandae corporis, provident, impedit optio dolorem,
              recusandae numquam magnam tempora consequatur unde expedita!
            </p>
          </div>
        </section>
        <section className="section" id="map">
          <div className="title_principal">
            <p>Encontrenos em:</p>
          </div>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={position}
              zoom={14}
            >
              <Marker position={position}></Marker>
            </GoogleMap>
          ) : (
            <></>
          )}
        </section>
      </div>
    </>
  );
};

export default About;

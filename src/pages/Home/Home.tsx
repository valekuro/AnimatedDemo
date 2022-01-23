import React from "react";
import { LandingTxt, LandingTxtContainer } from "./Home.style";
import Particles from "react-tsparticles";
import Products from "../Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <>
      <div className="primaryBg" id="head">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 30,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 0.4,
                  opacity: 0.8,
                  size: 30,
                },
                push: {
                  quantity: 20,
                },

                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <LandingTxtContainer>
          <div
            style={{
              display: "inline-flex",
              flexFlow: "row wrap",
              justifyContent: "center",
            }}
          >
            <div className="fade-in-text">
              <FontAwesomeIcon
                icon={faHive}
                style={{
                  color: "white",
                  fontSize: "16vh",
                  zIndex: 4,
                  filter: "drop-shadow(0 0 0.75rem black)",
                }}
              />
              <span
                style={{
                  color: "white",
                  fontSize: "510%",
                  zIndex: 4,
                  verticalAlign: 'bottom',
                  textShadow: "0.5rem 0.5rem rgb(0 0 0 / 40%)",
                }}
              >
                COMPANY
              </span>
            </div>
          </div>
          <div className="fade-in-text-delay">
            <LandingTxt>
              Networking is an investment in your business.
            </LandingTxt>
          </div>
        </LandingTxtContainer>
      </div>
      <div style={{ marginBottom: "2rem" }} id="prodotti">
        <Products />
      </div>

      <div className="footerBg">
      
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "column nowrap",
            height: "7rem",
          }}
        >
          <span style={{ color: "white" }}>Valentina D'Orazio</span>
        </div>
      </div>
    </>
  );
};

export default Home;

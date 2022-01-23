import { Link } from "react-router-dom";

import { HeaderContainer } from "./Header.style";
import { NavHashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <HeaderContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexFlow: "row nowrap",
          flex: 1,
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <NavHashLink smooth to="/#head" >
            <FontAwesomeIcon
              icon={faHive}
              style={{
                color: "white",
                fontSize: "3vh",
              }}
            />
          </NavHashLink>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "row nowrap",
            flexGrow: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              height: "2rem",
            }}
          >
            <NavHashLink smooth to="/#head" className="tabStyleEnable">
              Home
            </NavHashLink>
            <span className="underline"></span>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              height: "2rem",
            }}
          >
            <NavHashLink smooth to="/#prodotti" className="tabStyleEnable">
              Prodotti
            </NavHashLink>
            <span className="underline"></span>
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "column nowrap",
              height: "2rem",
            }}
          >
            <Link to="/" className="tabStyleDisable">
              Contatti
            </Link>
            <span className="underline"></span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

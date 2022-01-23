import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-grow: row wrap;
  justify-content: space-between;
  position: absolute;
  width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
  align-items: center;
  height: 4rem;
  padding: 0.5rem;
  background-color:#004f75;
    z-index:30;
    position: fixed;
    @media (max-width: 900px) {
      height: 3rem;  
}
}
`;

export const LogoContainer = styled.div`
  text-align: left;
  align-self: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  margin-left: 2rem;
  height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    height:100%;
  flex-grow: 1;
  font-family: 'Oswald', sans-serif;
font-family: 'Permanent Marker', cursive;
font-family: 'Rajdhani', sans-serif;
`;

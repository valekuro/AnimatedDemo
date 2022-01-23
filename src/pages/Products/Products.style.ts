import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;  
`;

export const ProductsSheet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;


export const ProductIcon = styled.img`
  height: 5rem;
  width: 6rem;
`;



export const LearnMore = styled.span`
  margin-top: 2rem;
  align-self: flex-end;
  font-weight: bold;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

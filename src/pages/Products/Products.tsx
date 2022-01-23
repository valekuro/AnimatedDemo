import { ProductCard } from "./ProductCard";
import { ProductsContainer, ProductsSheet } from "./Products.style";
import icon1 from "../../assets/images/icon1.png";
export const Products = () => {
  return (
    <ProductsContainer>
      <div style={{backgroundColor:'#5e889e', color:'#fff', marginTop:'5rem', marginBottom:'2rem'}}><h1>Cerca la soluzione più adatta a te</h1></div>
      <ProductsSheet>
        <ProductCard
          element={[
            {
              image: icon1,
              title: "Hosting",
              description: "Attiva il tuo Hosting e sei subito online. Semplice, veloce e sicuro",
              learnMore: true,
            },
            {
              image: icon1,
              title: "Cloud",
              description: "Il tuo Cloud Server veloce e scalabile. Ridondato, potente e scalabile",
              learnMore: true,
            },
            {
              image: icon1,
              title: "Server",
              description: "Scegli la potenza dei nostri server dedicati. Affidabile, monitorato e gestito",
              learnMore: true,
            },
          ]}
        />
      </ProductsSheet>
      <div></div>
    </ProductsContainer>
  );
};

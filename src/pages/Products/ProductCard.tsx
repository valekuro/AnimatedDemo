import { LearnMore, ProductIcon } from "./Products.style";
export interface SpecificElement {
  title?: string;
  image?:string;
  description?: string;
  learnMore: boolean;
}
export interface ProductCardProps {
  element: SpecificElement[];
}
export const ProductCard = ({ element }: ProductCardProps) => {
  return (
         <>
      {element.map((el: SpecificElement, index: number) => {
        return (
            <div className="stream" key={index}>

         <div className="stream__thumbnail" >
              <span><ProductIcon src={el.image}/></span>
            <h2> {el.title}</h2>
            <span> {el.description}</span>
            {el.learnMore && <LearnMore> Scopri di più</LearnMore>}
            </div>
           </div>
        );
      })}
     
          </>
  
  );
};

import { ProductsGrid } from "./ProductsGrid";
import { SectionTitle } from "./SectionTitle";

export const FeaturedProducts = () => {
  return (
    <div className="pt-14">
      <SectionTitle text="Featured Products" />
      <ProductsGrid/>
    </div>
  );
};
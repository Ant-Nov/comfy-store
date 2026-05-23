import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from 'clsx';
import { ProductsList } from "./ProductsList";
import { ProductsGrid } from "./ProductsGrid";

export const ProductsContainer = () => {
  const [isList, setIsList] = useState(false);
  const { products, meta } = useLoaderData();

  return (
    <>
      <header className="flex items-center justify-between pb-3 border-b mb-5">
        <p>{meta?.pagination?.total} product(s)</p>
        
        <div className="flex items-center gap-x-2">
          <button
            className={
              clsx('w-8 h-8 flex items-center cursor-pointer justify-center rounded-full', !isList && 'bg-secondary' )
            }
            onClick={() => setIsList(false)}
            >
            <BsFillGridFill />
          </button>

          <button
            className={
              clsx('w-8 h-8 flex items-center cursor-pointer justify-center rounded-full', isList && 'bg-secondary')
            }
            onClick={() => setIsList(true)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </header>

      {
        !!products?.length
          ? (isList ? <ProductsList /> : <ProductsGrid />)
          : <h4 className="text-center font-semibold text-2xl">No products found</h4>
      }
    </>
  );
};
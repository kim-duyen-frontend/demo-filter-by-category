import React, { useCallback, useState } from "react";
import Category from "../components/Category";
import ProductItem from "../components/ProductItem";

const ListPage = ({ list }) => {
  //   console.log(list);
  const [products, setProducts] = useState(list);
  //   console.log("check category: ", category);
  const filterCategory = useCallback((name) => {
    // console.log("check name: ", name);
    const list_category = list.filter((item) => item.category === name);
    setProducts(list_category);
  }, []);

  return (
    <div>
      <Category filterCategory={filterCategory} />
      <div>
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ListPage;

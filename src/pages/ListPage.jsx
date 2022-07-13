import React from "react";
import ProductItem from "../components/ProductItem";

const ListPage = ({ list }) => {
  console.log("re-render Component ListPage");
  return (
    <div>
      {list.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default React.memo(ListPage);

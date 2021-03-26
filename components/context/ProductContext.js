import { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: "0",
      title: "Headphone",
      description: "Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum.",
      img:"/headphone.jpg",
    },
    {
      id: "1",
      title: "Shoes",
      description: "Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum.",
      img:"/shoe.jpg",
    },
    {
      id: "2",
      title: "Toys",
      description: "Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum.",
      img:"/car.jpg",
    },
    {
      id: "3",
      title: "Camera",
      description: "Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum.",
      img:"/camera.jpg",
    },
    {
      id: "4",
      title: "Sunglasses",
      description: "Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum.",
      img:"/sunglass.jpg",
    },
  ]);
  return (
    <ProductContext.Provider value={[products,setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

import { useState, useEffect } from "react";


import RingLoader from "react-spinners/RingLoader";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  const rellenarDB = ()=>{

     const prodCollection = collection( db, "products" )

     products.forEach( (elemento)=>{
         addDoc(prodCollection, elemento)
     } )

   }

  


  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      // SI NO EXISTE CATEGORYNAME ---> todos mis productos
      consulta = productsCollection;
    } else {
      // SI EXISTE CATEGORYNAME ---> parte de mis productos
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      // let arrayFiltrado = newArray.filter((elemento)=> elemento.stock > 0)

      setItems(newArray);
    });
  }, [categoryName]);


  return (
    <>

      {items.length === 0 ? (
        <RingLoader size={800} color="violet"   />
      ) : (
        <ItemList items={items} />
      )}
      
    </>
  );
};

export default ItemListContainer;

import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import NavBar from "./components/NavBar";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };
  
  const handleOnRemove = index => {
    const value = [...categories];
    value.splice(index, 1);
    setCategories(value);
  };
  const handleRemoveAll = () => {
    setCategories(categories.filter((category) => category !== category));
  };

  return (
    <>
      {/* NavBar */}
      <NavBar/>

      {/* Titulo */}
      <h1>GifApp</h1>

      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />

        {/* Boton Borrar */}
   
        <button className="reset" onClick={handleRemoveAll}>Reset</button>
         {/* Borrar Ultima busqueda */}
        {
          
      React.Children.toArray(
        categories.map((category) => (
                <><button className="delete" onClick={handleOnRemove}>eliminar</button>
                <GifGrid className="categories" key={category} category={category}/></>
      ))
    )}
       


      {/* Listado de Gif */}

      {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//import { GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  //console.log(categories);

  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory)) return; 
    
    // 1.
    //setCategories([ 'Valorant', ...categories]);

    // 2.
    setCategories( cat => [...cat, newCategory])
  };

  return (
    <>

    <h1>GifExpertApp</h1>

    <AddCategory 
        // setCategories={setCategories}
        onNewCategory = { (event) => onAddCategory(event) }
    />


    {/* <button onClick={onAddCategory}>Agregar</button> */}

    {
      categories.map( ( category ) => (
        <GifGrid 
        key={category} 
        category={category}/>
      ))
    }

    </>
    
  )
}

export default GifExpertApp
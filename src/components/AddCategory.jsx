import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState();

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        
        const inputValueNew = inputValue.trim();
        if(inputValue.trim().length <= 1) return;
        
        //setCategories( categories => [ inputValue, ...categories]);

        onNewCategory(inputValueNew)
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit   }>
            <label>Buscar gifs</label>
            <input 
                type="text"
                placeholder="Buscar" 
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )

}

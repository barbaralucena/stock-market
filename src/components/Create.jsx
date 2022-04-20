import React, { useState } from 'react';

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0
  })
  function handleChange(event) {
    console.log("handleChange:", event.target.value);
    const {name,value} = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");

  }
  return (
    <main>
        <form action="">
          <div>
            <label>
              nome
              <input type="text" name="name" required minLength="4" maxLength="60" 
              onChange={handleChange} value={formData.name}/>
            </label>
          </div>
          <div>
            <label>
              Código
              <input type="text" name="code" required minLength="3" maxLength="3" 
              onChange={handleChange}  value={formData.code}/>
            </label>
          </div>
          <div>
          <label>
              Preço
              <input type="number" name="price" required min="1" max="999999999" 
              onChange={handleChange} value={formData.price}/>
            </label>
          </div>
          <div>
            <button type="submit">Guardar</button>
          </div>
        </form>
    </main>
  )
}

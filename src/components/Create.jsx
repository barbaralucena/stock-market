import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    price: 0
  })
  function handleChange(event) {
    const {name,value} = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");

    fetch("https://justivo.com/stockws.php?add",{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => navigate("/detail/" + result.code));
  }

  return (
    <main>
        <form onSubmit={handleSubmit}>
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

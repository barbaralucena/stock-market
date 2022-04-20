import React from 'react'

export default function Create() {
  function handleChange(event) {
    console.log("handleChange:", event.target.value);
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
              <input type="text" name="name" required minLength="4" maxLength="60" onChange={handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Código
              <input type="text" name="code" required minLength="3" maxLength="3" onChange={handleChange}/>
            </label>
          </div>
          <div>
          <label>
              Preço
              <input type="number" name="price" required min="1" max="999999999" onChange={handleChange}/>
            </label>
          </div>
          <div>
            <button type="submit">Guardar</button>
          </div>
        </form>
    </main>
  )
}

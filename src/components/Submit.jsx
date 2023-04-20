import React from 'react'
import { useState } from 'react'

const Submit = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("El campo esta vacio") : alert(nombre);
        email === "" ? alert("El campo esta vacio") : alert(email);
        console.log("nombre:" + " " + nombre + " " + "email:" + " " + email);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <input type="text" onChange={(e) => setNombre(e.target.value)} />

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Submit
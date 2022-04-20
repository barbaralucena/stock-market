import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home({stocks}) {
    return (
        <main className="Home">
            {stocks.map((stock, index) => (
                <section key={index}>
                    <h2>{stock.name}</h2>
                    <h3>{stock.code}</h3>
                    <div>
                        Preço: {stock.price}€
                    </div>
                    <div>
                        <NavLink to={"/detail/" + stock.code}>Ver detalhe</NavLink>
                    </div>
                </section>
            ))
            }
        </main>
    )
}
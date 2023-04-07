import React from 'react'

const CarDetails = ({ id, brand, color, newCar, turbo }) => {
    return (
        <div>
            <h2>Detalhes do Carro</h2>
            <ul>
                <li>Marca: {id}</li>
                <li>Marca: {brand}</li>
                <li>Cor: {color}</li>
            </ul>
            {turbo ? <p>Seu carro é turbo</p>: <p>Seu carro não é turbo</p>}
            {newCar ? <p>Esse carro é novo</p> : <p>Esse carro não é novo</p>}
        </div>
    )
}

export default CarDetails
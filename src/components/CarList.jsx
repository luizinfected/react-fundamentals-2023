import { useState } from 'react'
import CarDetails from './CarDetails'

const CarList = () => {
    const [cars] = useState([
        { id: 1, brand: 'Mitsubishi', color: 'Branca', newCar: true, turbo: true },
        { id: 2, brand: 'GM', color: 'Preto', newCar: true, turbo: true },
        { id: 3, brand: 'Ford', color: 'Amarelo', newCar: false, turbo: false },
        { id: 4, brand: 'Subaru', color: 'Cinza', newCar: false, turbo: true },
        { id: 5, brand: 'VW', color: 'Azul', newCar: true, turbo: true },
    ])
    return (
        <div>
            {
                cars.map((car) => (
                    <CarDetails 
                    key={car.id} 
                    brand={car.brand} 
                    color={car.color} 
                    newCar={car.newCar} 
                    turbo={car.turbo} />
                ))
            }

        </div>
    )
}

export default CarList
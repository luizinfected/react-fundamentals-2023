import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(true)

    const [nome,setName] = useState('Luiz');
  return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <p>Se X for true, isso será exibido!</p>}
        {!x && <p> Se X for falso,isso será exibido!</p>}
        {nome === "Luiz" ? (
            <div>Verdadeiro</div>
        ) : (
            <div>falso</div>
        )}
        <button onClick={() => setName('Victor')}>Trocar nome</button>
    </div>
  )
}

export default ConditionalRender
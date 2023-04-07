
import {useState} from 'react'

function ComponenteData () {
    const [data, setData] = useState('')
    return(
        <div>
            <p>Seu dado é :{data}</p>
      <button onClick={() => setData('Luiz Costa')}>Colocar meu nome</button>
      <hr></hr>
        </div>

    )
}

export default ComponenteData
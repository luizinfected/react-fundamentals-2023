import {useState} from 'react'

function ListData () {
    

    // const [list] = useState(['Luiz', 'Gabriel', 'Renato'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Luiz', age: 20},
        {id: 2, name: 'Renato', age: 22},
        {id: 3, name: 'Gabriel', age: 20},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)

            // exemplo de uso do filter limitando aos caracteres
            // return console.log(prevUsers.filter(user => user.name.length < 5))

        })  
    }

    return(
        <div>
            {/* {list.map((item) => (
            <h1 key={item}>{item}</h1>
            ))}

            <hr></hr> */}

            {users.map((user)=> (
                <h2 key={user.id}>{user.name} - {user.age} anos</h2>
            ))}

            <hr></hr>

            <button onClick={deleteRandom}>Deletar random user</button>

            <hr></hr>
        </div>
    )
}

export default ListData
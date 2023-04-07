
const Container = ({children, dado}) => {
  return (
    <div>
        <h2>Conteudo do container {dado}</h2>
        {children}
    </div>
  )
}

export default Container
import Sasuke from '../assets/sasuke2.webp'


function Imagem(props) {
    return (
        <div>
            <h2>Exemplo de imagem na pasta pública</h2>
            <img src="/sasuke.webp" alt="Sasuke" width={props.tamanho}/>
            <hr/>
            <h2>Exemplo de imagem na pasta assets (src)</h2>
            <img src={Sasuke} alt="Sasuke" width={props.tamanho2}/>
        </div>
    );
}

export default Imagem;
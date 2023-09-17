import "./Foto.css"

const Foto = ({fotografia, fotografiaAlt}) => {
    return (
        <div>
            <img src={fotografia} alt={fotografiaAlt} className="banner"/>
        </div>
    )
}

export default Foto;
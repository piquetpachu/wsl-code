import './barra.css'

export default function Barra() {
    return (
        <nav className='barra'>
            <img className='imagen' src="head.svg" alt="logo" />
            <span className='caja-opciones'>
            <div className="opciones">inicio</div>
            <div className="opciones">CV</div>
            </span>
        </nav>
    )
}
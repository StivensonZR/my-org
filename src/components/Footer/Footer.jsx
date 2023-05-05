
import './Footer.css'

export const Footer = () => {
    return <footer
        className='footer'
        style={{ backgroundImage: "url(/footer.png)" }}
    >
        <div className='redes'>
            <a href='#'>
                <img src="/facebook.png" alt='Facebook' />
            </a>
            <a href='#'>
                <img src="/twitter.png" alt='twitter' />
            </a>
            <a href='#'>
                <img src="/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/Logo.png' alt='org' />
        <strong>Desarrollado por SZRDev</strong>
    </footer>
}

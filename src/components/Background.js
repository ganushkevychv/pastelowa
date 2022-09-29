import background from '../images/background.webp';
import logoMono from '../images/logoMono.png'

const Background = () => {

    return(
        <div className="Background">
        {/* <img src={logoMono} className="logo-mono" alt="logoMono"/> */}
        <img src={background} className="App-backgroundImage" alt="logo" />
        </div>
    )
}
export default Background;
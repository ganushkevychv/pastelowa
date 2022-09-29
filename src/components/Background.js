import background from '../images/background.webp';
import logoMono from '../images/logoMono300x228.png'

const Background = () => {

    return(
        <div className="background">
        {/* <img src={logoMono} className="logo-mono" alt="logoMono"/> */}
        <img src={background} className="App-backgroundImage" alt="logo" />
        <div class="centered"><img src={logoMono} className="logo-mono" alt="logoMono"/></div>
        </div>
    )
}
export default Background;
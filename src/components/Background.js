import background from '../images/background.webp';
import logoMono from '../images/logoMono300x228.png'
import logoColor from '../images/logoColor.png'
const Background = () => {

    return(
        <>
        <div className="background">
        {/* <img src={logoMono} className="logo-mono" alt="logoMono"/> */}
        <img src={background} className="App-backgroundImage" alt="background" />
        <div className="centered"><img src={logoMono} className="logo-mono" alt="logoMono"/></div>
        </div>
        <div className='mobile-container'>
        <img src={logoColor} className="App-backgroundMobile" alt="backgroundMobile"/>
        </div>
        </>
    )
}
export default Background;
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import logoMono from '../images/logoMono300x228.png'

const Footer = () => {

const textLink = {
    color: 'white',
    textDecoration: 'none'
}
const textLinkAddress = {
    color: 'white',
    textDecoration: 'none',
    fontSize:'15px'
}




  return (
    <MDBFooter id='footer' bgColor='black' color='white' className='text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Połącz się z nami w sieciach społecznościowych:</span>
        </div>

        <div>
        <MDBBtn outline color="light" floating className='m-1' href='https://pl-pl.facebook.com/restauracjapastelowa/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='mailto:pastelowacatering@gmail.com' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com/restauracjapastelowa?igshid=YmMyMTA2M2Y=' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='tel:504-075-908' role='button'>
            <MDBIcon fas icon="mobile-alt" />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='sms:+48505536398' role='button'>
            <MDBIcon fas icon="sms" />
          </MDBBtn>
          </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon fas icon="pizza-slice" className="me-3" uppercase />
                Pastelowa
              </h6>
              <p>
                <img src={logoMono} className='logoMono-footer' alt='logo mono pastelowa'/>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>#Tagi</h6>
              <p className='text-reset'>
                  #Finger Food
              </p>
              <p className='text-reset'>
                #Dostawa
              </p>
              <p className='text-reset'>
                #Catering
              </p>
              <p className='text-reset'>
                #Restauracja
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>PRZYDATNE LINKI</h6>
              <p>
                <Link to='/About' className='text-reset'>
                O Nas
                </Link>
              </p>
              <p>
                <Link to='/Promo' className='text-reset'>
                Oferta
                </Link>
              </p>
              <p>
                <Link to='/Galeria' className='text-reset'>
                Galeria
                </Link>
              </p>
              <p>
                <a href='https://pastelowa.com.pl/' className='text-reset' >
                  Pastelowa
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Kontakt</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                <a href="https://goo.gl/maps/HHYhwuMhiVMHxug78" 
                aria-label="Location"
                style={textLinkAddress}
                
                >
                Armii Krajowej 1A, 83-330 Żukowo
                </a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:pastelowacatering@gmail.com" aria-label="Gmail" style={textLink}>
                pastelowacatering@gmail.com
                </a>
              </p>
              <p>
                <MDBIcon fas icon="mobile" className="me-3" href="tel:504-075-908" />
                <a href="tel:505-536-398"
                 aria-label='telephone'
                 style={textLink}
                 >
                (+48) 505 536 398
                    </a> 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" href="tel:586-818-453" />
                <a href="tel:586-818-453"
                 aria-label='telephone'
                 style={textLink}
                 >(+48) 586 818 453
                    </a> 
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Copyright:{''}  
        <a className='text-reset fw-bold' href='https://pastelowa.com.pl/' style={textLink}> Pastelowa
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;

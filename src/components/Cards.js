import logo from '../images/logoColor.png'
import { CardGroup, Card, CardImg, CardBody,CardTitle, Button, NavLink } from 'reactstrap';
import ModalMenuCard from './ModalMenuCard';
const Cards = () => {


return (

    <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo}
      top
      width="50%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Finger Food
      </CardTitle>
      <Button color="danger">
       <NavLink  href="/FingerFood/">SPRAWDŹ</NavLink>
      </Button>
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Dania Mięsne
      </CardTitle>
      <ModalMenuCard/>
       {/* <Button color="danger">
      SPRAWDŹ
      </Button> */}
    </CardBody>
  </Card>
  <Card>
    <CardImg
      alt="Card image cap"
      src={logo}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Salatki i Dodatki 
      </CardTitle>
      <Button color="danger">
      SPRAWDŹ
      </Button>
    </CardBody>
  </Card>
</CardGroup>
//     <div className='cards'>
// <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src={logo} alt="Logo" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Finger Food</h2>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">SPRAWDŹ</button>
//     </div>
//   </div>
// </div>

// <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src={logo} alt="Logo" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Dania Mięsne</h2>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">SPRAWDŹ</button>
//     </div>
//   </div>
// </div>
// <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src={logo} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Dodatki</h2>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">SPRAWDŹ</button>
//     </div>
//   </div>
// </div>
// <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img src={logo} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Salatki</h2>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">SPRAWDŹ</button>
//     </div>
//   </div>
// </div>
// </div>
)
}
export default Cards;
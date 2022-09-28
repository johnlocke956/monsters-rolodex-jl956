import { Component } from 'react';
import './card.styles.css';

const Card = (props) => {
  const { id, name, email } = props.m;

  return (
    <div key={id} className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.m;
//     console.log('sdswdfw', id, name, email)
//     return (
//       <div key={id} className='card-container'>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;

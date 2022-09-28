import { Component } from 'react';
import Card from '../card/card-component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((m) => (
      <Card m={m} key={m.id} />
    ))}
  </div>
)

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((m) => (
//           <Card m={m} key={m.id}/>
//         ))}
//       </div>
//     );
//   }
// }

export default CardList;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import UserDefaultImg from '../../../assets/UserSmall.png'
import './card.css';

class Card extends Component {
  render() {
    const { id, name, lastName, winnings, country, flag } = this.props.user;
    return(
      <div key={id} className="col-sm-12" style={{marginBottom: '-12px'}}>
        <Link to={`/user/${id}`}>
          <div className="card text-black mb-3">
            <div className="card-body d-flex">
              <div className="col-4">
                <img src={UserDefaultImg} />
                <span style={{ paddingLeft: '15px' }}>
                  {name + ' ' + lastName}
                </span>
              </div>
              <div className="col-4">
                <div className='textContainer'>
                  {numeral(winnings).format('$0.00a')}
                </div>
              </div>
              <div className="col-4">
                <div className='textContainer'>
                  {country}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Card from '../Card/Card';
import Button from '../Button/Button';
import { columnsConfig } from './config';
import './List.css';

class List extends Component {

  handleOrder = (col) => {
    let ord = col.retrieveOrder ? col.retrieveOrder() : col.defaultOrder;
    if (col.name === this.props.currentOrder.field) {
      if (this.props.currentOrder.order === 'ASC') ord = 'DESC';
      if (this.props.currentOrder.order === 'DESC') ord = 'ASC';
    }
    this.props.setOrder(col.name, ord, col.sort);
  }

  onSelectUser = (id) => {
    this.props.setSelectedUser(id);
  }


  render() {
    return (
      <div className='container'>
        <div className='row newQuestionContainer'>
          <Link to="/new-user">
            <Button 
              type={'button'}
              className={'btn btn-secondary btn-lg'}
              name={'newQuestion'}
              label={'Add Player'}
              onClick={() => this.props.setSelectedUser(0)} />
          </Link>
        </div>
        <div className='row-fluid'>
          <div className='gridHeader d-flex'>
          {
            columnsConfig.map((c) => {
              return (
                <div onClick={() => this.handleOrder(c)} className={`headerCell col-${c.width}`}>
                  <div style={{ textAlign: 'center' }}>
                    <span>
                      {c.title}
                    </span>
                    <span className='orderArrow'>
                      {
                        c.name === this.props.currentOrder.field && this.props.currentOrder.order === 'ASC' && (
                          <FaArrowUp />
                        )
                      }
                      {
                        c.name === this.props.currentOrder.field && this.props.currentOrder.order === 'DESC' && (
                          <FaArrowDown />
                        )
                      }
                    </span>
                  </div>
                </div>
              );
            })
          }
          </div>
          <div className='row'>
            {this.props.users.map((u) =>
              <div onClick={() => this.onSelectUser(u.id)} className='cardContainer col-12'>
                <Card key={u.id} user={u}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default List;
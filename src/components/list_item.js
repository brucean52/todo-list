import React from 'react';
import Modal from './modal';

export default props => {
    const {complete} = props.item;

    const listStyle = {
        textDecoration: 'line-through',
        color: '#888'
    }

    const modalMessage = (
        <div>
            <h4>Are you sure you want to delete this item?</h4>
            <ul>
                <li>{props.item.title}</li>
            </ul>
        </div>
    );

    return (
        <li className='collection-item row'>
        <div style={complete ? listStyle: {}} className='col s10'>
            {props.item.title}
        </div>
        <div className='col s2'>
            <Modal callback={()=>props.delete(props.item._id)} text={modalMessage} className='btn btn-floating red'>
            <i className='material-icons'>delete_forever</i>
            </Modal>
            <button className={`btn green btn-floating ${complete ? 'yellow': 'green'}`} onClick={()=>props.complete(props.item._id)}>
                <i className='material-icons'>{complete ? 'undo': 'check'}</i>
            </button>
        </div>
        </li>
    );
}

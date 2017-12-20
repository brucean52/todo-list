import React, { Component } from 'react';
import ListItem from './list_item';

export default class ListContainer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        //console.log('Data:', this.props.list);

        const list = this.props.list.map((item, index)=> {
            return <ListItem key={index} index={index} item={item} delete={this.props.delete} complete={this.props.toggleComplete}/>
        });

        return(
            <div>
                <ul className='collection'>{list.length ? list : <li className='collection-item center-align'>No to Do Items</li>}</ul>
            </div>
        );
    }
}
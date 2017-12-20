import React, { Component } from 'react';

export default class AddItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        }

        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(event){
        event.preventDefault();
        //console.log(this.state);
        this.props.add(this.state);
        this.setState({
            title: '',
            details: ''
        });
    }

    render(){
        const {title, details}= this.state;
        return(
            <form onSubmit={this.handleAddItem}>
                <input type="text" placeholder='Title' value={title} onChange={e => this.setState({title: e.target.value})}/>
                <input type="text" placeholder='Details' value={details} onChange={({target}) => this.setState({details: target.value})}/>
                <button className='btn blue'>Add Item</button>
            </form>
        );
    }
}
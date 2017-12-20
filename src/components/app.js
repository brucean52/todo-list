import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import todo_data from '../todo_data';
import ListContainer from './list_container';
import AddItem from './add_item';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: todo_data
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    addItem(item){
        item.complete = false;
        this.setState({
            todoData: [item, ...this.state.todoData]
        });
    }

    deleteItem(index){
        const tempData = this.state.todoData.slice();
        //console.log(tempData);
        tempData.splice(index, 1);

        this.setState({
            todoData: tempData
        });
    }

    toggleComplete(index){
        const tempData = this.state.todoData.slice();
        tempData[index].complete = !tempData[index].complete;

        this.setState({
            todoData: tempData
        });

    }

    render(){
        const{todoData} = this.state;
        console.log('Data at App Render:',this.state.todoData);
        return(
            <div className='container'>
            <h1 className='center-align'>To Do List</h1>
            <AddItem add={this.addItem}/>
            <ListContainer delete={this.deleteItem} list={todoData} toggleComplete={this.toggleComplete}/>
        </div>
        );
    }
}


export default App;

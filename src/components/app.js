import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import axios from 'axios';
//import todo_data from '../todo_data';
import ListContainer from './list_container';
import AddItem from './add_item';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=teammate1';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoData: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
            this.setState({
                todoData: response.data.todos
            });
        // axios.get(`${BASE_URL}/todos${API_KEY}`).then((response)=>{
        //     console.log('response:', response);
        //     this.setState({
        //         todoData: response.data.todos
        //     });
        // })
        // .catch((error)=>{
        //     console.log('error:', error);
        // });    
    }

    async addItem(item){
        //item.complete = false;
        // this.setState({
        //     todoData: [item, ...this.state.todoData]
        // });
                    //url, item to send
    
        // axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((response)=>{
        //     console.log('Add Response:', response);

        //     this.getData();
        // });
        await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
        this.getData();
    }

    async deleteItem(id){
        // const tempData = this.state.todoData.slice();
        // //console.log(tempData);
        // tempData.splice(index, 1);

        // this.setState({
        //     todoData: tempData
        // });
        await axios.delete(`${BASE_URL}/todos/${id+API_KEY}`);
        this.getData();
    }

    async toggleComplete(id){
        // const tempData = this.state.todoData.slice();
        // tempData[index].complete = !tempData[index].complete;

        // this.setState({
        //     todoData: tempData
        // });
        await axios.put(`${BASE_URL}/todos/${id+API_KEY}`);
        this.getData();

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

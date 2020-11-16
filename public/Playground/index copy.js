import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//const tasks = ['Learn React JS', 'Learn Angular JS', 'Learn Vue JS'];

//const element = React.createElement('ol', null, tasks.map((task, index) => React.createElement('li', { key: index }, task)));

//const element = <ol>
//                <li>{tasks[0]}</li>
//                <li>{tasks[1]}</li>
//                <li>{tasks[2]}</li>
//                </ol>

//const element = <ol> {tasks.map((task, index) => React.createElement('li', { key: index }, task))} </ol> testing

//const element = <ol> 
//                {tasks.map((task, index) => <li key = {index}> 
//                                             {task} 
//                                            </li>)} 
//                </ol>

//const element = <div>
//                    <h2> Tasks List </h2>
//                    <ol> 
//                    {tasks.map((task, index) => <li key = {index}> 
//                                                {task} 
//                                                </li>)} 
//                    </ol>
//                </div>

//class Title extends Component {
//  render(){
//    return (
//      <h2> Tasks List </h2>
//    )
//  }
//}

class Title extends Component {
  render(){
    return (
      <h2> {this.props.title} </h2>
    )
  }
}

//class List extends Component {
//  render(){
//    return (
//      <ol> 
//      {tasks.map((task, index) => <li key = {index}> 
//                                  {task} 
//                                  </li>)} 
//      </ol>
//    )
//  }
//}

class List extends Component {
  render(){
    return (
      <ol> 
        {this.props.tasks.map((task, index) => <li key = {index}> 
                                                {task} 
                                               </li>)} 
      </ol>
    )
  }
}

//class Main extends Component {
//  render(){
//    return (
//      <div>
//        <Title/>
//        <List/>
//        <List/>
//      </div>
//    )
//  }
//}

class Main extends Component {
  render(){
    return (
      <div>
        <Title title = {'Tasks List'}/>
        <List tasks = {['Learn React JS', 'Learn Angular JS', 'Learn Vue JS']}/>
        <List tasks = {['Learn C#', 'Learn Java', 'Learn Spring']}/>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));

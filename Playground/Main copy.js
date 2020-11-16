import React, {Component} from 'react';
import List from './List'
import Title from './Title'

class Main extends Component {
    render(){
      return (
        <div>
          <Title title = {'Tasks List'}/>
          <List tasks = {['Learn ReactJS', 'Learn AngularJS', 'Learn VueJS']}/>
          <List tasks = {['Learn C#', 'Learn Java', 'Learn Python']}/>
        </div>
      )
    }
  }

export default Main
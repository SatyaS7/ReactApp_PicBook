import React, {Component} from 'react';

/*class Title extends Component {
    render(){
      return (
        <h2> {this.props.title} </h2>
      )
    }
}*/

function Title(props){
    return (
      <h2> {props.title} </h2>
    )
}

export default Title
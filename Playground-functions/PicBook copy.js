import React, {Component} from 'react';
import Photo from './Photo'

/*class PicBook extends Component{
    render(){
        return <div className = "photogrid">
            {this.props.posts.map((post, index) => <Photo key={index} post = {post}/>)}
        </div>
    }
}*/

function PicBook(props){
    return <div className = "photogrid">
            {props.posts.map((post, index) => <Photo key={index} post = {post}/>)}
        </div>
}

export default PicBook
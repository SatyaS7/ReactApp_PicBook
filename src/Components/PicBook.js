import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

/* When Remove button is clicked, the post is not consoled
class PicBook extends Component{
    render(){
        return <div className = "photogrid">
            {this.props.posts.map((post, index) => <Photo key={index} post = {post} onRemovePhoto = {this.onRemovePhoto}/>)}
        </div>
    }
}
*/

function PicBook(props){
    return (
        <div>
            {/* <button className = "addicon"></button> */}
            <Link className = "addicon" to="/AddPhoto"></Link>
            <div className = "photogrid">
                {props.posts
                .sort(function(x,y){
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
            </div>
        </div>
    )
}

PicBook.propTypes = {
    posts: PropTypes.array.isRequired
    // ,onRemovePhoto: PropTypes.func.isRequired
}

export default PicBook
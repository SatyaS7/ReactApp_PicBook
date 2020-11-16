import React from 'react';
import PropTypes from 'prop-types'

/* When Remove button is clicked, the post is not consoled
class Photo extends Component {
    render(){
        const post = this.props.post;
        return <figure className = "figure">
            <img className = "photo" src = {post.imageLink} alt = {post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className = "button-container">
            <button className = "remove-button" onClick = {() => post.onRemovePhoto}>Remove</button>
            </div>
        </figure>
    }
}
*/

function Photo(props){
    const post = props.post;
    return <figure className = "figure">
            <img className = "photo" src = {post.imageLink} alt = {post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className = "button-container">
                <button className = "remove-button" onClick = {() => {props.removePost(props.index)}}>Remove</button>
            </div>
        </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired
    // ,onRemovePhoto: PropTypes.func.isRequired
}


export default Photo
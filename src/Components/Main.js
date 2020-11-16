import React, {Component} from 'react'
import PicBook from './PicBook'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';

class Main extends Component {
    /*constructor(){
      super()
    }

    removePhoto(postRemoved){
        this.setState((state) => ({
          posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    navigate(){
      this.setState({
        screen: 'addPhoto'
      })
    }*/

    render(){
      //console.log(this.props.posts)
      return (
        <div>
          <h2><Link to="/">PicBook</Link></h2>
          <Route exact path = "/" render={() => (
            <div>
              <PicBook {...this.props}/>
            </div>
          )}/>
          <Route path = "/AddPhoto" render={({history}) => (
            <div>
              <AddPhoto {...this.props} onHistory={history}/>
            </div>
          )}/>
        </div>
      )
    }
}

export default Main
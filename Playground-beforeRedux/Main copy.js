import React, {Component} from 'react'
import PicBook from './PicBook'
import Title from './Title'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor(){
      super()
      /*console.log("Constructor");*/
      this.state = {
          posts: [
            {  
              id: "0",  
              description: "Beautiful Landscape",  
              imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +  
              "3919321_1443393332_n.jpg"  
            }, 
            {  
              id: "1",  
              description: "Nature",  
              imageLink: "https://libreshot.com/wp-content/uploads/2020/01/modrava-sumava.jpg"  
            }, 
            {  
              id: "2",  
              description: "On a vacation!",  
              imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"  
            }
        ],
        screen: 'photos'
      }
      this.removePhoto = this.removePhoto.bind(this);
      this.navigate = this.navigate.bind(this);
    }

    removePhoto(postRemoved){
        /*console.log(postRemoved.description);*/
        this.setState((state) => ({
          posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    navigate(){
      this.setState({
        screen: 'addPhoto'
      })
    }

    componentDidMount(){
      /*console.log("componentDidMount");*/
    }

    componentDidUpdate(prevProps, prevState){
      /*console.log("componentDidUpdate");*/
      console.log(prevState)
      console.log(this.state)
    }

    render(){
      /*console.log("Render");*/
      return (
        <div>
             {/* this.state.screen === 'photos' && */}
            <Route exact path = "/" render={() => (
              <div>
                <Title title = {'PicBook'}/>
                <PicBook posts = {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.onNavigate}/>
            </div>
            )}/>

            <Route path = "/AddPhoto" component = {AddPhoto}/>
        </div>
      )
    }
}

export default Main
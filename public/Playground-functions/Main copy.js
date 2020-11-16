import React, {Component} from 'react';
//import List from './List'
import PicBook from './PicBook'
import Title from './Title'

const posts = [
    {  
      id: "0",  
      description: "beautiful landscape",  
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
]  
  

class Main extends Component {
    render(){
      return (
        <div>
          <Title title = {'PicBook'}/>
          {/*  <List tasks = {['Learn ReactJS', 'Learn AngularJS', 'Learn VueJS']}/>
          <List tasks = {['Learn C#', 'Learn Java', 'Learn Python']}/> */}
          <PicBook posts = {posts}/>
        </div>
      )
    }
}

export default Main
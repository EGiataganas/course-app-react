import React, {Component} from "react"

class Home extends Component {
  constructor() {
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1. Title', description: 'This is a description', active: false},
        { id: 2, title: '2. Title', description: 'This is a description', active: false},
        { id: 3, title: '3. Title', description: 'This is a description', active: false},
        { id: 4, title: '4. Title', description: 'This is a description', active: false},
      ]
    }
  }
  render(){
    return(
      <div>This is our Home Component </div>
    )
  }
}

export default Home

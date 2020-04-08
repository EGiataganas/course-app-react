import React, {Component} from "react"
import Item from './Item'
import ActiveItem from './ActiveItem'

class Table extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    const items = this.props.course_modules.map((data) => {
      return(
        data.active ?
        <ActiveItem handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description}/> :
        <Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description}/>
      )
    })

    return(
      <div className="pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 mt-4">React for rails developers - Videos</h2>
          </div>
          {items}
        </div>
      </div>
    )
  }
}

export default Table

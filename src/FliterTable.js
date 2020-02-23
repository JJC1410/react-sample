import React from 'react';

class FliterTable extends React.Component{

	state = {
		search: ''
	}

  // data = {
  //   inputdata: [],
  // }

  handleChange(event) {
    let search = this.porps.data;
    search = search.filter(()=>{
      return search.search(event.targe.value) !== -1;
    })
  	this.setState({search: search})
    // this.setState({search : event.targe.value});
  }

  render(){

  	// console.log(this.state.inputdata)

  	var table = this.props.data.map((item) => {
  		var subItems = item.map((subItem) => {
  			return <td>{ subItem }</td>
        if (this.state.subItem.include(this.state.search))
        {
          this.setState({subItem : this.state.search})
          return <td>{subItem}</td>
        }
  		})
  		return <tr>{ subItems }</tr>
  	})

    console.log(this.props.data)

    return(
      <div className="SearchBar" placeholder="SearchBar">
        <input
        	type="text"
        	onChange={()=>this.handleChange}/>
        <table>
        	{ table }
        </table>
      </div>
    )
  }
}

export default FliterTable;

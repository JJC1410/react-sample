import React from 'react';

class FliterTable extends React.Component{

	state = {
		search: ''
	}

<<<<<<< HEAD
  data = {
    inputdata: [],
  }

  handleChange (event) {
    let search = this.state.inputdata;
=======
  // data = {
  //   inputdata: [],
  // }

  handleChange(event) {
    let search = this.porps.data;
>>>>>>> 6229b160c882336df55bdc2446e33889efb0c8d5
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
<<<<<<< HEAD
        	onChange={()=>this.handleChange}/>
=======
        	onChange={this.handleChange}/>
>>>>>>> 6229b160c882336df55bdc2446e33889efb0c8d5
        <table>
        	{ table }
        </table>
      </div>
    )
  }
}

<<<<<<< HEAD
export default FliterTable;
=======
export default FliterTable;
>>>>>>> 6229b160c882336df55bdc2446e33889efb0c8d5

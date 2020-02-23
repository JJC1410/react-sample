import React from 'react';
import FliterTable from './FliterTable'

class App extends React.Component {
  render() {

    var testdata = [
      ["Row1 Cell1", " Row1 Cell2", " Row1 Cell3"],
      ["Row2 Cell1", " Row2 Cell2", " Row2 Cell3"],
      ["Row3 Cell1", " Row3 Cell2", " Row3 Cell3"]
    ]

    return (
      <div className="App">
        <FliterTable data={testdata}/>
      </div>
    )
  }
}

export default App;

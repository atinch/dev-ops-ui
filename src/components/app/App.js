import React, { Component } from "react";

import 'semantic-ui-css/semantic.min.css';
import  { Button, Table, Container }  from "semantic-ui-react";
//import axios from "axios";
//import config from "src/config";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      homes: [{ id: 1, name: 'home', address: '14 myroad' }, { id: 2, name: 'work', address: '121 high street' }]
    };
  }
  clickMe = event => {
/*     axios
      .get(config.apiUrl + "/api/homes")
      .then(data => {
        this.setState({ homes: data.data });
        console.log(data.data);
      })
      .catch(err => {
        console.log("ERROR:", err);
      }); */
  };
  render() {
    const { homes } = this.state;

    return (
      <div className="App">
        <header className="App-header" />
        <body>
          <Container>
          <Button onClick={this.clickMe} >Click Me</Button>
          {homes.length > 0 ? (
            <Table celled className="table">
             <Table.Header >
               <Table.Row>
                 <Table.HeaderCell>Id</Table.HeaderCell>
                 <Table.HeaderCell>Name</Table.HeaderCell>
                 <Table.HeaderCell>Address</Table.HeaderCell>
               </Table.Row>
             </Table.Header>
             <Table.Body>
              {homes.map(home => (
                <Table.Row>
                  <Table.Cell>{home.id}</Table.Cell>
                  <Table.Cell>{home.name}</Table.Cell>
                  <Table.Cell>{home.address}</Table.Cell>
                  </Table.Row>
               ))}
             </Table.Body>
            </Table>
            ) : (
            <div style={{textAlign: 'left'}}>no records to show yet</div>
          )}
          </Container>
        </body>
      </div>
    );
  }
}

export default App;

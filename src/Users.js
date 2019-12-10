import React from 'react';


import {Table,Button,ButtonToolbar,Dropdown} from 'react-bootstrap';


class Users extends React.Component {
    constructor(props){
        super(props);

      

        

        this.state = {
            data : [
                {id: 'LRSD',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD3',name: 'John Don\'t', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD43',name: 'John Space Marine', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD2',name: 'Johnathan ', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD234',name: 'Papa John', address:'#2323,23,23,23', attendance:71},
                

            ]
        }


    }

    componentDidMount(){
       
     

    }


    renderTable = () => {
        
    }


    

    render(){
        let table = this.state.data.map((data) => (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.attendance}</td>
                <td><ButtonToolbar style={{flex:1, alignItems:"center", justifyContent:"space-between"}}>
                        <Button style={{ border:"none"}}>View More</Button>
                        <Button  style={{   backgroundColor:"#ef0165",border:"none"}}>Watch Live</Button>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                More
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/More-1">More 1</Dropdown.Item>
                                <Dropdown.Item href="#/More-2">More 2</Dropdown.Item>
                                <Dropdown.Item href="#/More-3">More 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                      
                       
                    </ButtonToolbar>
                </td>
                
            </tr>
        ))
        return(
            <Table responsive bordered>
            <thead>
              <tr>
                <th>Camera ID</th>
                <th>Officer Name</th>
                <th>Address</th>
                <th>Attendance</th>
                
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
             {table}
            </tbody>
          </Table>
        )
    }
}

export default Users;
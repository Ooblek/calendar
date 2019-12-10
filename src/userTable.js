import React from 'react';
import './Table.css';
import {Table} from 'react-bootstrap';

class userTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {id: 'LRSD',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD3',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD43',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD2',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD234',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},
                {id: 'LRSD5',name: 'John Doe', address:'#2323,23,23,23', attendance:71},

            ]
        }
    }

    // renderTableData(){
    //     return this.state.data.map((data,index) => {
    //         const {id, name, address, attendance} = data;
    //         return(
               
    //         )
    //     })

    // }
    render(){
        return(
            <Table responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                </tr>
            </tbody>
            </Table>
        )
    }
}

export default userTable;
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const DataGrid = (props) => {
   

    return(
        <BootstrapTable data={props.data} striped version='4'>
        <TableHeaderColumn isKey dataField='id' dataSort={ true }>Flat Number</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Owner Name</TableHeaderColumn>
        <TableHeaderColumn dataField='isRented'>Rented?</TableHeaderColumn>
    </BootstrapTable>
    )
}

export default DataGrid;
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//import { observer } from 'mobx';
import {observer} from 'mobx-react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

@observer
export default class Cadastro extends React.Component {
    constructor() {
        super();
    }

    handleChange(e) {
        this.props.store.changeData(e.target.name, e.target.value);
    }

    onSave = (e) => {
        this.props.store.persistData();
    }

    onRemove = (e) => {
        this.props.store.removeData();
    }

    onCancel = (e) => {
        this.props.store.clearData();
    }

    handleRowSel(rows) {
        if (rows.length > 0) {
            this.props.store.getDataById(rows[0]);
        }
    }

    render() {

        const {store} = this.props

        return (
            <div>

                <div>
                    <TextField name='reference' value={store.currentData.reference} floatingLabelText="Reference" floatingLabelFixed={true} onChange={this.handleChange.bind(this)}/>
                </div>
                <div>
                    <TextField name='name' value={store.currentData.name} floatingLabelText="Name" floatingLabelFixed={true} onChange={this.handleChange.bind(this)}/>

                </div>
                <div>
                    <RaisedButton label="Save" primary={true} onClick={this.onSave.bind(this)}/>
                    <RaisedButton label="Remove" primary={true} onClick={this.onRemove.bind(this)}/>
                    <RaisedButton label="Cancel" primary={true} onClick={this.onCancel.bind(this)}/>
                </div>

                <Table multiSelectable={false} onRowSelection={this.handleRowSel.bind(this)}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Reference</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>

                        {store.getAll().map(function(reg, key) {
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn>{key}</TableRowColumn>
                                    <TableRowColumn>{reg.reference}</TableRowColumn>
                                    <TableRowColumn>{reg.name}</TableRowColumn>
                                </TableRow>
                            );
                        })}

                    </TableBody>
                </Table>

                <h3>Quantity: {store.qtd}</h3>
                <p>Click on each line to edit.</p>

            </div>
        )
    }
}

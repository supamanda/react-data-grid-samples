import React from "react"
import { connect } from "react-redux"

import { fetchData } from "../actions/dataActions"

import ReactDataGrid from 'react-data-grid'
import { Toolbar } from './toolbar'

import _ from 'lodash'

//require('../../../node_modules/react-data-grid/dist/react-data-grid.css')

@connect((store, ownProps) => {
    return {
        data: store.dataReducer.data[ownProps.id],
    };
})
export class Grid extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome",
            rows: [{name:'Amanda'}],
            columns: this.getColumns([])
        };
    }

    componentDidMount() {
        let columns = this.getColumns(this.props.data)
            this.setState({
                rows: this.props.data,
                columns: columns
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            let columns = this.getColumns(this.props.data)
            this.setState({
                rows: this.props.data,
                columns: columns
            })
        }
    }

    getColumns(data) {
        let columns = []
        if (data && data.length > 0) {
            console.log("keys", Object.keys(data[0]))
            for (let key of Object.keys(data[0])) {
                let column = {
                    key: key,
                    name: key + this.props.id,
                    sortable: true,
                    filterable: true
                }
                columns.push(column)
            }

        } else {
            columns = [{key:'name',name:'Name'}]
        }
        return _.sortBy(columns, 'key')
    }

    rowGetter(i) {
        return this.state.rows[i]
    }

    newData() {
        console.log("fetching data", this.props.id)
        this.props.dispatch(fetchData(this.props.id))
    }

    handleGridRowsUpdated(event) {
        console.log('rows updated', event)
    }

    handleAddRow() {
        console.log('adding row')
    }

    handleFilterChange() {
        console.log('handling filter change')
    }

    onClearFilters() {
        console.log('clearing filters')
    }

    render() {
        const { data } = this.props;
        console.log("rendering the grid ", data, this.state)
        // enableCellSelect={true}
        //             columns={this.state.columns}
        //             rowGetter={this.rowGetter.bind(this)}
        //             rowsCount={this.state.rows.length}
        //             onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)}
        // rowHeight={50}
                    // rowScrollTimeout={200}
        return ( 
            <div>
                <ReactDataGrid
                    columns={this.state.columns}
                    rowGetter={this.rowGetter.bind(this)}
                    rowsCount={this.state.rows.length}
                    headerRowHeight={35}
                    headerFiltersHeight={45}
                    minHeight={300}
                    enableRowSelect
                    onAddFilter={this.handleFilterChange.bind(this)}
                    onClearFilters={this.onClearFilters.bind(this)}
                    toolbar={<Toolbar enableFilter />}
                    />
                <button onClick={this.newData.bind(this)}>New data</button>
            </div>
        );
    }
}
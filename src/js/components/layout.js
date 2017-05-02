import React from "react"
import { connect } from "react-redux"


import { Grid } from './grid'


export default class Layout extends React.Component {

    render() {
        
        return ( 
            <div>
                <Grid key="one" id="one" />
                <Grid key="two" id="two" />
            </div>
        );
    }
}
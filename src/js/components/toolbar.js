import React from 'react'

export class Toolbar extends React.Component {
    // need to override the radius for right corners because btn from react-data-grid conflicts with bootstrap
    renderToggleFilterIconButton() {
        return (<button
        type="button" className="btn-sm btn-default gridBtn"
        onClick={this.props.onToggleFilter}
        aria-label="Filter rows" title="Filter rows"
        >
        <span className="glyphicon glyphicon-filter" aria-hidden="true" />
        </button>);
    }
    
    render() {
        return (
            <div className="react-grid-Toolbar">
                <div className="tools">
                    <div className="btn-group btn-group-sm" >
                        {this.renderToggleFilterIconButton()}
                    </div>
                </div>
            </div>
        )
    }
}
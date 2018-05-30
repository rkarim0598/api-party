import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Maps.css'
import MapsFinder from './MapsFinder'

class Maps extends Component {
    state = {
        loc: '',
        clicked: false
    }

    handleChange = (ev) => {
        this.setState({ loc: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/maps/${this.state.loc}`)
        this.setState({ clicked: true })
    }
    render() {
        return (
            <div className="Maps">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Street_View_logo.png"
                    alt="Maps"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.loc}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up location</button>
                    </div>
                </form>
                <Route path="/maps/:loc" component={MapsFinder} />
                <Route exact path="/maps" render={() => <h3>Please enter a location</h3>} />
            </div>
        )
    }
}

export default Maps
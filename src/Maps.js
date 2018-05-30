import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Maps.css'

class Maps extends Component {
    state = {
        loc: '',
    }

    handleChange = (ev) => {
        this.setState({ loc: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/maps/${this.state.loc}`)
    }
    render() {
        return (
            <div className="Maps">
                <img
                    src="http://www.doomsteaddiner.net/blog/wp-content/uploads/2015/10/reddit-logo.png"
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
                <Route path="/maps/:loc" render={() => <h3>{this.state.loc}</h3>} />
                <Route exact path="/github" render={() => <h3>Please enter a location</h3>} />
            </div>
        )
    }
}

export default Maps
import React, { Component } from 'react'

import './MapsFinder.css'

class MapsFinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            locat: ''
        }
        console.log(props)
        // if (this.props.clicked === true)
        this.fetchLocData()
    }

    componentWillReceiveProps = (newProps) => {
        const locationChanged = newProps.location !== this.props.location
        if (locationChanged) {
            this.fetchLocData(newProps)
        }
        console.log(this.props)
    }

    fetchLocData = (props) => {
        this.setState({
            locat: `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${this.props.match.params.loc}
        &fov=90&pitch=10
        &key=AIzaSyACAxgJOrpJExzeIjj9py6COaZaKBGTgrc`})
    }
    render() {
        // debugger
        console.log(this.props)
        // const curr = this.props.location.pathname.url
        return (
            <div className="MapsFinder">
                <img src={this.state.locat} />
                <h3>{this.props.location.pathname.split('/')[2]}</h3>
            </div>
        )
    }
}

export default MapsFinder
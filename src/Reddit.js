import React, { Component } from 'react'

import './Reddit.css'

class Reddit extends Component {
    render() {
        return (
            <div className="Reddit">
                <img 
                    src="http://www.doomsteaddiner.net/blog/wp-content/uploads/2015/10/reddit-logo.png" 
                    alt="Reddit"
                    className="logo"
                />
            </div>
        )
    }
}

export default Reddit
import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTabIndex: 0,
            linkStyle: { width: window.innerWidth > 1026 ? 100 / props.links.length + '%' : '100%' },
            hrStyle: {
                width: window.innerWidth > 1026 ? 100 / props.links.length + '%' : '100%',
            }
        }
    }

    updateDimensions() {
        this.setState({
            ...this.state,
            linkStyle: { width: window.innerWidth > 1026 ? 100 / this.props.links.length + '%' : '100%' },
            hrStyle: {
                width: window.innerWidth > 1026 ? 100 / this.props.links.length + '%' : '100%',
                marginLeft: window.innerWidth > 1026 ? 100 / this.props.links.length * this.state.activeTabIndex + '%' : 0
            }
        })

    }

    /**
    * Add event listener for window resize
    */
    componentDidMount() {
        this.updateDimensions()
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    render() {
        return (
            <>
                {/* Navbar */}
                <ul className="navbar">
                    {this.props.links.map((link, idx) => (
                        <li key={link} onClick={() => {
                            this.setState({
                                ...this.state,
                                activeTabIndex: idx,
                                hrStyle: { ...this.state.hrStyle, marginLeft: window.innerWidth > 1026 ? 100 / this.props.links.length * idx + '%' : 0 },
                            })
                        }}>
                            <span style={this.state.linkStyle}>{link}</span>
                        </li>
                    ))}
                    <hr style={this.state.hrStyle} />
                </ul>

                {/* Active content */}
                <div className='content' key={this.state.activeTabIndex}>
                    {this.props.content[this.state.activeTabIndex]}
                </div>
            </>
        )
    }
}

export default Menu

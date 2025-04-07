import React from 'react'
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 22,
        }
    }
    render() {
        const { name, location } = this.props
        const { count, count2 } = this.state
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 })
                    }}
                >
                    Click here!
                </button>
                <h1>Count2: {count2}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location:{location}</h3>
            </div>
        )
    }
}

export default UserClass

import React from 'react'

class Details extends React.Component {
    constructor(props) {
        super() 

        this.state = {
            name: '',
            details: [],
            id: null
        }
    }

    static getDerivedStateFromProps(props) {
        const details = Object.entries(props.user).map(([key, value], index) => {
            if (key !== 'name' && key !== '_id') {
                return {
                    key: key,
                    value: value
                }
            }
            return null
        }).filter(detail => detail !== null)

        return {
            name: props.user.name,
            details: details,
            id: props.user._id
        }
    }

    render() {
        return (
            <div>
                <h4>Name</h4>
                <input type="text" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}/>

                <h4>Details</h4>
                {
                    this.state.details.map((detail, index) => {
                        return (
                            <div>
                                <input type="text" value={this.state.details[index].key}/>
                                <input type="text" value={this.state.details[index].value}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    handleChange = (event, path) => {
        this.setState({
            [path]: event.target.value
        })
    }
}

export default Details
import React from 'react'

function Card(props) {
    return (
        <div className="card mt-2 w-100">
            <div className="card-body">
                <div className="card-title">
                    {props.name}
                </div>
                {
                    Object.entries(props.user).map(([key, value], index) => {
                        if (key !== 'name' && key !== '_id') {
                            return (
                                <div key={index} className="card-subtitle mb-2 text-muted">
                                    {key}: {value}
                                </div>
                            )
                        }
                        return ''
                    })
                }
            </div>
        </div>
    )
}

export default Card
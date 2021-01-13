import React from 'react'

export default function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
        </div>
    )
}



import React from 'react'
import './issue.css'

export function Issue({ issue }) {
    const {title, room, reporter, priority, status, description} = issue;

    return (
        <li>
            <div className="issue">
                <p>title: {title}</p>
                <p>room: {room}</p>
                <p>reporter: {reporter.name}</p>
                <p>priority: {priority}</p>
                <p>status: {status}</p>
                <p>description: {description}</p>
            </div>
        </li>
    )
}

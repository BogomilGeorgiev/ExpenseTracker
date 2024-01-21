import React, { useEffect } from 'react'

export const Header = () => {

    const appName = 'Expense Tracker'

    useEffect(() => {
        document.title = appName
    }, [])


    return (
        <h2>{appName}</h2>
    )
}

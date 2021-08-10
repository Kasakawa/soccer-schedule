import React from 'react'
import Nav from './Nav'

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <main>{children}</main>
            {/* <Nav /> */}
        </div>
    )
}

export default Layout

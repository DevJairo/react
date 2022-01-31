import React from 'react'
import Container from './Container'
import Menu from './Menu'

function Index({title, children}) {
    return (
        <div>
            <Menu></Menu>
            <Container title={title}>
                {children}
            </Container>
        </div>
    )
}

export default Index

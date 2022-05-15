import React from 'react'
import { withContext } from '@components/hoc';
import { Card, Container } from '@components/custom';

function Home({ home }) {
    return (
        <Container>
        Home
        </Container>
     )
}
export default withContext(Home, ['home', 'todos'])
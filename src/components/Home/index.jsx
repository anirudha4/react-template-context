import React from 'react'
import Searchbar from './Searchbar'
import Results from './Results'
import { Card, Container, Line, Space } from '@components/custom'


export default function Home({ results }) {
    const handleChange = e => {
        console.log(e.target.value);
    }
    return (
        <Container>
            <Space top="2em" bottom="1em" />
            <Card>
                <Searchbar onChange={handleChange} />
                <Space top="2em" />
                <Line />
                <Space top="2em" />
                <Results results={results} />
            </Card>
        </Container>
    )
}

import { Card, Container, Space, Title } from '@components/custom'
import React from 'react'

export default function About() {
    return (
        <Container>
            <Space top="2em" />
            <Card>
                <Title>About</Title>
                <Space top="1em" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestias consectetur ullam. Unde ducimus earum nisi, dolores velit beatae ullam?</p>
            </Card>
        </Container>
    )
}

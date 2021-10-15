import React from 'react'
import Component from '@components/Home'
import { useStore } from './selectors'

export default function Home() {
    const { results } = useStore();
    return (
        <>
            <Component results={results} />
        </>
    )
}

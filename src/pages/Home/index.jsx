import React from 'react'
import Component from '@components/Home'
import { useStore } from './selectors'

export default function Home() {
    const state = useStore();
    return (
        <>
            <Component state={state} />
        </>
    )
}

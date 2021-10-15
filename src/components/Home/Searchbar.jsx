import React from 'react'
import Input from '@components/custom/Input'

export default function Searchbar({ onChange }) {
    return (
        <>
            <Input w100 type="text" onChange={onChange} placeholder="Search for github repositories" />
        </>
    )
}

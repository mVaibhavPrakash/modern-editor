import React, {useContext} from 'react'
import '../css/input.css'
import { InputContext } from '../hooks/InputContext';

export const Input = () => {
    const [Input, setInput] = useContext(InputContext);
    return (
        <textarea type="text" className="blogInput" value={Input} onChange={e => setInput(e.target.value)}/>
    )
}

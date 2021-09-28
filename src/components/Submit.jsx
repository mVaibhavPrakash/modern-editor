import {useContext, useEffect} from 'react'
import { EditContext } from '../hooks/EditContext'
import { InputContext } from '../hooks/InputContext'
import submitData from '../js/submitData.js'
import '../css/submit.css'

export const Submit = () => {

    const [Input, setInput] = useContext(InputContext)
    const [isEdit,setEdit] = useContext(EditContext)
    let data;

    useEffect(() =>{

        data= localStorage.getItem('data')
        
    },[Input,isEdit])

    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={e => submitData(e,data, Input, setInput,isEdit,setEdit)}>Submit</button>
        </div>
    )
}

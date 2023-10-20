import { useState } from 'react'
import './style.css'
import { useLocalStorage } from '../useLocalStorage'

function Message() {

    const [messageData, sendMessage] = useLocalStorage('Block', []) 
    console.log('messageData' + messageData)
    const [inputValue, sendValue] = useState()

    const [user] = useLocalStorage('USER', [])

    const changeChat = () => {
        
            sendMessage([...messageData, `${user}: ${inputValue}`])
            sendValue("")
        
    }

    
    
    return ( <div className='container'>
        <div className='blog'>
            <div>BLOG</div>
            {messageData.map((el, i) => {
                return (
                    <div key={i}>
                        {i + 1}. {el}

                    </div>
                );
                    
                
            }
            )}
        </div>

        <div className='buttonInput'>
            <label >write here</label>
            <input value={inputValue} onChange={(e) => sendValue(e.target.value)} />
            <button onClick={changeChat}>send</button>
            <button onClick={() => sendMessage([])}>Clean</button>
        </div>
    </div>
    )
}

export default Message
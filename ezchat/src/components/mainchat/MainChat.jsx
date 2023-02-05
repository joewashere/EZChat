import { useState, useRef, useEffect } from "react";

export default function MainChat(props) {
    const [msg, setMsg] = useState('');
    const [messages, setMessages] = useState([]);
    
    props.socket.on('chat message', function(msg) {
        setMessages([...messages, msg]);
    });

    const messageEndRef = useRef(null);
    
    function scrollToBottom() {
        messageEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToBottom()
      }, [messages]);


    function sendMessage() {
        //setMessages([...messages, msg]);
        props.socket.emit('chat message', [msg, props.username]);
        setMsg('');
    }

    return (
        <div className="basis-8/12 min-h-screen justify-end flex flex-col px-2">
            <div className="messages py-4 overflow-y-scroll max-h-[90vh]" id="chatWindow">
                {messages.map(message => (
                    <p className="py-1" key={message}>{message}</p>
                ))}
                <div ref={messageEndRef}></div>
            </div>
            <div className='flex flex-col'>
                <input 
                    type="text" 
                    value={msg} 
                    onKeyDown={e => e.key === 'Enter' ? sendMessage() : ''} 
                    onChange={e => setMsg(e.target.value)} 
                    placeholder="This is the chat box" 
                    className="min-w-full outline-0 bg-slate-600 p-2 focus:bg-slate-500"
                />
                <button className="bg-cta text-ctatext hover:bg-secondary px-2 py-2" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}
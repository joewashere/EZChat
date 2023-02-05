import { useState } from "react";

export default function Modal(props){
    const show = props.show;
    let user = props.user;

    const [newUser, setNewUser] = useState('');

    function setUser(){
        props.setUsername(newUser);
        props.socket.emit('new user', newUser);
    }


    if(show){
        return (
            <div className="overlay bg-black bg-opacity-80 flex flex-row absolute top-0 min-w-full min-h-full justify-center">
                <div className="bg-midnight p-8 max-h-36 mt-80">
                    <p className="text-paragraph mb-4">You need to choose a username first!</p>
                    <input value={newUser} onKeyDown={e => e.key === 'Enter' ? setUser() : ''} onChange={e => setNewUser(e.target.value)} type="text" className="p-2 mr-1 bg-slate-600" placeholder="Username"/>
                    <button className="p-2 bg-cta text-ctatext" onClick={setUser}>Select</button>
                </div>
            </div>
        );
    }
}
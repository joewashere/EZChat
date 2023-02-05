export default function RoomList(props) {
    return (
        <div className="basis-2/12 min-h-screen flex flex-col justify-between border-r border-slate-900 px-2">
            <div className="p-2">
                <p className="text-lg font-medium text-headline border-b border-secondary mb-2">Rooms</p>
                {props.rooms.map(room => (
                    <a key={room}>{room}</a>
                ))}
            </div>
          <button className="bg-cta text-ctatext py-2 hover:bg-secondary">Create Room</button>
        </div>
    );
}
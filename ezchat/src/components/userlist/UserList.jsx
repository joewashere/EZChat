export default function UserList(props) {
    return (
        <div className="basis-2/12 min-h-screen px-2 border-l border-slate-900">
            <p className="text-lg text-headline font-medium border-b border-secondary mb-2">Users</p>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
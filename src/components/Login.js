import React, {useState} from 'react';
export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(){
        console.log({
            email: email,
            password: password
        })
    }

    return (<div className="login">
        <form className="card p-4">
            <div className="h3">Login</div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label className="form-label">Password</label>
                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="d-flex flex-column align-items-center mt-3">
                <a className="btn btn-primary" onClick={submit}>Login</a>
            </div>
        </form>
    </div>);
}
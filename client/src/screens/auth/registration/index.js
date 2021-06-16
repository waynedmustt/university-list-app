import React, { useEffect, useState } from 'react';
import { coreService } from '../../../core/service';

const Register = (props) => {
    const { history } = props;
    const [isSaving, setIsSaving] = useState(false);

    const formState = {
        username: '',
        password: ''
    };
    const [user, setUser] = useState(formState);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const isLoggedIn = coreService.getItem('isLoggedIn')
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }, [])

    const submit = async (e) => {
        e.preventDefault();

        if (!user.username || !user.password) {
            setError('field is mandatory');
            return;
        }

        setIsSaving(true);
        coreService.setObjectItem('users', user)
        setIsSaving(false);

        setSuccess('register successfully');
        setTimeout(() => {
            window.location.replace('/auth/login');
        }, 2000)
    }
    return (
        <React.Fragment>
            {error ? 
                <div className="alert alert-danger" role="alert">
                    {error}
                </div> : null
            }
            {success ? 
                <div className="alert alert-success" role="alert">
                    {success}
                </div> : null
            }
            <form>
                <div className="row mb-3">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" 
                        value={user['username']}
                        onChange={(e) => setUser({
                            ...user, username: e.target.value
                        })}
                        disabled={isSaving}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" 
                        value={user['password']}
                        onChange={(e) => setUser({
                            ...user, password: e.target.value
                        })}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary"
                onClick={(e) => submit(e)}
                >Register</button>
                </form>
        </React.Fragment>
    );
}

export default Register;
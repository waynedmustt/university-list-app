import React, { useEffect, useState } from 'react';
import { coreService } from '../../../core/service';

const Login = (props) => {
    const { history } = props;

    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const submit = (e) => {
        e.preventDefault();

        if (!user.username || !user.password) {
            setError('field is mandatory');
            return;
        }

        setIsSubmitting(true);
        const savedUser = coreService.getObjectItem('users')
        setIsSubmitting(false);

        if (!savedUser) {
            setError('wrong username or password!');
            return;
        }

        const findUser = savedUser.username === user.username 
        && savedUser.password === user.password;

        if (!findUser) {
            setError('wrong username or password!');
            return;
        }
        setSuccess('login successfully. Will be redirecting to app...');
        coreService.setItem('isLoggedIn', true);
        setTimeout(() => {
            window.location.replace('/app/home');
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6">
                        <button type="submit" className="btn btn-primary mr-1"
                        onClick={e => submit(e)}
                        >Sign in</button>
                        <a href="# " onClick={e => {
                            e.preventDefault();
                            history.push('/auth/register');
                        }}>Do not have an account ? register now.</a>
                    </div>
                </div>
                </form>
        </React.Fragment>
    );
}

export default Login;
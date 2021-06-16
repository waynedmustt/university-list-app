import React, { useEffect, useState } from 'react';
import Modal from '../modal';
import {
 saveNewsLetter
} from '../../apis/newsletter';

const NewsLetter = () => {
    const [openNewsLetter, setOpenNewsLetter] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const formState = {
        email: '',
        firstName: '',
        lastName: ''
    };
    const [user, setUser] = useState(formState);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setOpenNewsLetter(true);
    }, [])

    const submit = async (e) => {
        e.preventDefault();

        if (!user.email || !user.firstName || !user.lastName) {
            setError('field is mandatory');
            return;
        }

        setIsSaving(true);
        const response = await saveNewsLetter(user);
        setIsSaving(false);
        if (response?.status !== 200) {
            setError('failed to save the data');
            return;
        }

        setSuccess('save successfully');
        setTimeout(() => {
            setOpenNewsLetter(false);
        }, 2000)
    }

    const renderModalBody = () => {
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
                    <div className="mb-3">
                        <label className="col-form-label">Email:</label>
                        <input type="text" className="form-control"
                        value={user['email']}
                        onChange={(e) => setUser({
                            ...user, email: e.target.value
                        })}
                        disabled={isSaving}
                        />
                    </div>
                    <div className="row row-cols-1 mb-3 text-center">
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="col-form-label">First Name:</label>
                                <input type="text" className="form-control"
                                value={user['firstName']}
                                onChange={(e) => setUser({
                                    ...user, firstName: e.target.value
                                })}
                                disabled={isSaving}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <label className="col-form-label">Last Name:</label>
                                <input type="text" className="form-control"
                                value={user['lastName']}
                                onChange={(e) => setUser({
                                    ...user, lastName: e.target.value
                                })}
                                disabled={isSaving}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }

    const renderModalFooter = () => {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary" // eslint-disable-next-line
                data-bs-dismiss="modal" onClick={e => setOpenNewsLetter(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={e => submit(e)}>Send message</button>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Modal
            id="newsLetterModal"
            title="Newsletter" 
            isOpen={openNewsLetter}
            setIsOpen={setOpenNewsLetter}
            renderBody={renderModalBody}
            renderFooter={renderModalFooter}
            />
        </React.Fragment>
    );
}

export default NewsLetter;
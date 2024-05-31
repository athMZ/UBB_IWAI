import React, { useState } from 'react';
import Input from './Input';
import '../InputModal.scss';

function InputModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className='add-task-button'>
                Add new task
            </button>

            {show && (
                <div className="modal-overlay" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="modal-container">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title" id="modal-title">Add Task</h3>
                                <div className="modal-input">
                                    <Input />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button onClick={handleClose} className='close-button'>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default InputModal;
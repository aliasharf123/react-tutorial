import React from 'react';
//btn btn-dark
import { FaTimes } from 'react-icons/fa';
import {GlobalContext} from './context'
function Modal() {
    const context = GlobalContext();

    return ( 
        <div className={context.showModal ? 'modal-over show-model':'modal-over'}>
                <div className='model-container'>
                    <div>
                        <button className='cloeSidebar' onClick={() => context.closeModel()}>
                            <FaTimes/>
                        </button>
                    </div>
                    <h2>Model Content</h2>
                </div>
        </div> 
    );
}

export default Modal;
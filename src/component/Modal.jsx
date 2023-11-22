import "./style.css";
const Modal = ({setModal}) => {

    function closeModal() {
setModal(false) ;
   }
    return (
        <div className='modal'>
            <div className='modal-window'>
                <button className="close" onClick={closeModal}>Close</button>
                <h2 className='modal-window_title'>Lorem ipsum dolor sit.</h2>
                <p className='modal-window_text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur id odit perferendis tempora molestiae? A!
                </p>
            </div>
        </div>
    );
};

export default Modal;
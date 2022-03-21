import './edit.scss'

const ButtonEdit = ({ show, close, title, children }) => {
    return ( 
        <>
        { show ? 
        
        <div className="modalContainer" onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <header className="modal_header">
                    <i class="fa-solid fa-xmark close" onClick={() => close()}></i>
                    <h2 className="modal_header-title">{title}</h2>
                    <button className="submit">Save</button>
                </header>
                <main className="modal_content">
                    <div className="cardContent">
                        <div className="cardContent_imgCover">
                            <img src="https://lovablemessages.com/wp-content/uploads/2021/12/bo-hinh-nen-3d-that-dep-va-that-hap-dan-24-1068x601.jpg" alt="" />
                                <div className="editIcon">
                                    <button>
                                        <i class="fa-solid fa-camera"></i>
                                    </button>
                                    <button>
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                </main>
                <footer className="modal_footer">
                </footer>
            </div>
        </div>
        
        : null }
        </>
     );
}
 
export default ButtonEdit;
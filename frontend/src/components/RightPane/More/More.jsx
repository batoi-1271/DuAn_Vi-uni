import './more.scss';

const More = ({ show, close, title, children }) => {
    return ( 
        <>
        { show ? 
            <div className="modalContainerPost" onClick={() => close()}>
                <div className="more" onClick={(e) => e.stopPropagation()}>
                    <main className="more_content">
                        <ul>
                            <li className='items'><i class="far fa-cogs"></i>Setting and private</li>
                            <li className='items'><i class="far fa-question-circle"></i>Help center</li>
                            <li className='items'><i class="fas fa-fill-drip"></i>Display</li>
                        </ul>
                    </main>
                </div>
            </div>
        
        : null }
        </>
     );
}
 
export default More;
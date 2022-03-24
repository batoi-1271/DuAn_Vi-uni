import './more.scss';

const More = ({ show, close, title, children }) => {
    return ( 
        <>
        { show ? 
            <div className="modalContainerPost" onClick={() => close()}>
                <div className="more" onClick={(e) => e.stopPropagation()}>
                    <main className="more_content">
                        <ul>
                            <li className='items'><i class="fa-solid fa-gear"/>Setting and private</li>
                            <li className='items'><i class="fa-solid fa-circle-question"/>Help center</li>
                            <li className='items'><i class="fa-solid fa-fill-drip"/>Display</li>
                        </ul>
                    </main>
                </div>
            </div>
        
        : null }
        </>
     );
}
 
export default More;
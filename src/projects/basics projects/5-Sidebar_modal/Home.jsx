import { AiOutlineMenu } from "react-icons/ai";
import {GlobalContext} from './context'
function Home() {
    const context = GlobalContext();
    return ( 
        <main>
            <button onClick={() => context.openSide()} className={context.showSide ? 'openSidebar show' : 'openSidebar'}> 
                <AiOutlineMenu/>
            </button>
            <div >
                <button className='btn btn-dark ' onClick={() => context.openModel()}>
                    show modal
                </button>
            </div>
        </main> 
    );
}

export default Home;
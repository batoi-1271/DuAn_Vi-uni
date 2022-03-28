import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Routes from './config/Routes';
import RightPane from './components/RightPane/RightPane';
import LeftPane from './components/LeftPane/LeftPane';

function App() {
    return (
            <BrowserRouter>
                <div className='app'>
                <Route render={props => (
                    <>
                        <LeftPane {...props} />
                        <Routes/>
                        <RightPane/>
                    </>
                )}/> 
                </div>
        </BrowserRouter>

    );
}

export default App;
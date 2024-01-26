import React from 'react'
import { useNavigate } from 'react-router-dom';

function IndexPage() {
    const navigate = useNavigate();

    const goToPage = (path) => {
        navigate(path);
    };
    return (
        <div>
            <h1>index</h1>
            <ul className='index-list'>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/accordian')}>
                        Accordian
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/counter')}>
                        Counter
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/molegame')}>
                        MoleGame
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/progressbar')}>
                    Progressbar
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/stopwatch')}>
                    stopwatch
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/tabs')}>
                    tabs
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/trafficlight')}>
                    Trafficlight
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/transfer')}>
                    transfer
                    </button>
                </li>
                <li className="index-list-item">
                    <button className="index-link" onClick={() => goToPage('/analogClock')}>
                    Analog Clock
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default IndexPage
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Notcoin} from './notcoin'

import './index.css'
import Header from "./components/header";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <main>
            <Header/>
            <Notcoin
                canIClickPlease={true}
                sleep={false}
                funMode={false}
                clickValue={1}
                cooldown={28}
                handleClick={() => {/*nothing*/
                }}
            />
        </main>

    </React.StrictMode>
)

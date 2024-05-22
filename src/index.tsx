import React from 'react'
import ReactDOM from 'react-dom/client'
import {Notcoin} from './notcoin'

import './index.css'
import Header from "./components/header";
import Viola from './viola';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
        <main>
            <Viola />
    </main>
)

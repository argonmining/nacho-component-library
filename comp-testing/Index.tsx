import React from 'react';
import ReactDOM from 'react-dom/client';
import {Entry} from "./Entry";
import {DarkModeProvider, MobileProvider} from "../src";
import '../src/components/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const element = document.getElementById('root')
if (element !== null) {
    const root = ReactDOM.createRoot(element);
    root.render(
        <React.StrictMode>
            <DarkModeProvider>
                <MobileProvider>
                    <Entry/>
                </MobileProvider>
            </DarkModeProvider>
        </React.StrictMode>
    )
}

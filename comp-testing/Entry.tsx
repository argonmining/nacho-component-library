import React, {FC, useMemo, useRef, useState} from "react";
import {CustomDropdown, CustomDropdownItem, List, Page, ThemeToggle, usePageResize} from "../src";
import './App.css'
import './Sidebar.css'
import logo from './logo.png'
import {Image} from "react-bootstrap";

const elements = ['dropdown', 'list']
export const Entry: FC = () => {
    const elementRef = useRef<HTMLDivElement | null>(null)
    const styling = usePageResize(elementRef, 'mainContent')
    const [comp, setComp] = useState('')

    const com = useMemo(() => {
        switch (comp) {
            case 'dropdown':
                return <div style={{maxWidth: '200px'}}>
                    <CustomDropdown title={'Nacho'}>
                        <CustomDropdownItem>Test</CustomDropdownItem>
                    </CustomDropdown>
                </div>
            case 'list':
                const items = []
                for (let i = 0; i < 30; i++) {
                    items.push({id: i, identifier: (Math.random() * 100).toString(), number: i + 1,})
                }
                return <List items={items} itemHeight={40} headerElements={['id', 'identifier', 'number']}/>
        }
        return null
    }, [comp])

    return <div className="App">
        <div id={'portal-container'}/>
        <div ref={elementRef} className={'navbar'} style={{display: 'block', width: '200px'}}>
            <div className={'sidebar-content'}>
                <div className={'sidebar-header'}>
                    <Image src={logo} style={{width: '40px', height: '40px'}}/>
                    <h2>powered by <br/> KatScan</h2>
                </div>
                <ThemeToggle/>
                <div className={'nav-section'}>
                    {elements.map(single =>
                        <div onClick={() => setComp(single)}
                             style={{padding: '8px 16px'}}
                             className={'nav-link'}>
                            {single}
                        </div>)}
                </div>
            </div>
        </div>
        <div className="main-content" style={styling}>
            <Page header={"Nacho Components"}>

                {com}
            </Page>
        </div>
    </div>
}
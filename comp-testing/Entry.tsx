import React, {FC, useEffect, useMemo, useState} from "react";
import {CustomDropdown, CustomDropdownItem, Page, useDarkMode} from "../src";

export const Entry: FC = () => {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
    const [comp, setComp] = useState('')

    useEffect(() => {
        if (!isDarkMode) {
            toggleDarkMode()
        }
    }, [isDarkMode, toggleDarkMode]);

    const com = useMemo(() => {
        switch (comp) {
            case 'dropdown':
                return <div style={{maxWidth: '200px'}}>
                    <CustomDropdown title={'Nacho'}>
                        <CustomDropdownItem>Test</CustomDropdownItem>
                    </CustomDropdown>
                </div>
        }
    }, [comp])
    return <div className="App">
        <div id={'portal-container'}/>
        <Page header={"Nacho Components"}>
            <button onClick={() => setComp('dropdown')}>drop</button>

            {com}
        </Page>
    </div>
}
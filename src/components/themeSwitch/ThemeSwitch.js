import React, { Component } from 'react';
import './ThemeSwitch.css'
import { LanguageContext } from '../languageProvider/LanguageProvider';

class ThemeCheckbox extends Component {
    static contextType = LanguageContext;

    constructor(props) {
        super(props);
        this.state = { checked: true }
    }

    render() {
        return (<>
            <input
                checked={this.state.checked}
                type="checkbox"
                id="themeSwitch"
                name="theme-switch"
                className="theme-switch-input"
                onChange={() => {
                    this.setState({ checked: !this.state.checked })
                    document.body.className = document.body.className === 'light' ? 'dark' : 'light'
                }}
            />
            <label htmlFor="themeSwitch" className="theme-switch-label">
                <span>{this.context.translate('switchTheme')}</span>
            </label>
        </>)
    }
}

export default ThemeCheckbox
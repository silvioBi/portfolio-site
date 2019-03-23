import React, { Component } from 'react';
import './LanguageBar.css'
import { LanguageContext } from '../languageProvider/LanguageProvider';

class LanguageBar extends Component {
    static contextType = LanguageContext;

    render() {
        return (<>
            <ul className="language-bar">
                <li>
                    {['EN', 'IT'].map(lan => (
                        <img
                            key={lan + 'button'}
                            className={this.context.language() == lan ? 'active' : 'inactive'}
                            width='50px'
                            height='30px'
                            src={'./images/' + lan + '-flag.svg'}
                            onClick={() => this.context.changeLanguage(lan)}>
                        </img>)
                    )}
                </li>
            </ul>
        </>)
    }
}

export default LanguageBar
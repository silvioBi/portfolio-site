import React, { Component } from 'react';
import { strings } from '../../strings';

const LanguageContext = React.createContext();
export { LanguageContext }

export class LanguageProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: props.language,
        }
        this.translate = this.translate.bind(this)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.language = this.language.bind(this)
    }

    changeLanguage(language) {
        this.setState({ language })
    }

    translate(message) {
        return strings[message][this.state.language]
    }

    language() {
        return this.state.language
    }

    render() {
        return (
            <>
                <LanguageContext.Provider
                    value={{
                        translate: this.translate,
                        changeLanguage: this.changeLanguage,
                        language: this.language,
                    }}
                >
                    {this.props.children}
                </LanguageContext.Provider>
            </>
        );
    }
}


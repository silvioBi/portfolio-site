import React, { Component } from 'react';
import './App.css';

// Various components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeCheckbox from '../themeSwitch/ThemeSwitch';
import Menu from '../menu/Menu';
import ImageWithCaption from '../imageWithCaption/ImageWithCaption';
import LanguageBar from '../languageBar/LanguageBar';

// Constants and languages
import { LanguageContext } from '../languageProvider/LanguageProvider';
import { variableNames } from '../../strings';
import ContactMe from '../contactMe/ContactMe';

class App extends Component {
  static contextType = LanguageContext;

  render() {
    // My name
    const name = 'Silvio Biasiol'

    // Sidebar message 
    const text = this.context.translate(variableNames.sidebarMessage)

    // The menu links
    const links = [variableNames.whatIDevelop, variableNames.myTools, variableNames.getInTouch, /* variableNames.whatIHaveMade, */]
      .map(link => this.context.translate(link))

    // The various tabs contents
    const content = [
      // The what i develop sections
      <div className='cards'>
        {[{
          icon: ['fab', 'chrome'],
          title: variableNames.webDevelopment,
          text: variableNames.webDevelopmentMessage,
        },
        {
          icon: ['fas', 'cash-register'],
          title: variableNames.eCommerce,
          text: variableNames.eCommerceMessage,
        },
        {
          icon: ['fas', 'wifi'],
          title: variableNames.ioTSolutions,
          text: variableNames.ioTSolutionsMessage,
        },
        {
          icon: ['fas', 'cubes'],
          title: variableNames.threeDDesignAndPrinting,
          text: variableNames.threeDDesignAndPrintingMessage,
        },
        {
          icon: ['fas', 'comments'],
          title: variableNames.chatbotsAndVoiceAssistants,
          text: variableNames.chatbotsAndVoiceAssistantsMessage,
        }]
          .map(({ icon, title, text }) => <div>
            <FontAwesomeIcon className='cards-icon' icon={icon} />
            <h3>{this.context.translate(title)}</h3>
            <p className="card-description">{this.context.translate(text)}</p>
          </div>)}
      </div>,
      // The frameworks section
      <div className='cards'>
        {[['fab', 'react'],
        ['fab', 'github'],
        ['fac', 'graphql'],
        ['fab', 'html5'],
        ['fab', 'node-js'],
        ['fab', 'js'],
        ['fab', 'python'],
        ['fac', 'gatsby'],
        ['fac', 'heroku'],
        ['fab', 'raspberry-pi'],
        ['fab', 'aws'],
        ['fab', 'alexa'],
        ['fab', 'linux'],
        ['fab', 'gulp'],
        ['fab', 'stripe']]
          .map(icon => (<FontAwesomeIcon className='cards-icon' icon={icon} />))
        }
      </div>,
      // The get in touch section
      <ContactMe
        namePlaceholder={this.context.translate(variableNames.namePlaceholder)}
        emailPlaceholder={this.context.translate(variableNames.emailPlaceholder)}
        messagePlaceholder={this.context.translate(variableNames.messagePlaceholder)}
        submitButtonPlaceholder={this.context.translate(variableNames.submitButtonPlaceholder)}
      />,
      // The what I have made section
      'TODO',
    ]

    return (
      <>
        {/* The oblique background polygon */}
        <div className="skewed-bg" />

        {/* Sidebar */}
        <div className='sidenav'>

          {/* The language bar */}
          <LanguageBar />

          {/* The profile picture with the name and brief description */}
          <ImageWithCaption width='50%' imgUrl='./images/myPicture.png' title={name} text={text} />

          {/* The theme toggle */}
          <ThemeCheckbox />

        </div>

        {/* Main page content and menu */}
        <div className='main'>
          <Menu links={links} content={content} />
        </div>
      </>
    );
  }
}

export default App;

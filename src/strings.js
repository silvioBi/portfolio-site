

import React from 'react';

// String keys
const variableNames = {
    sidebarMessage: 'sidebarMessage',
    whatIDevelop: 'whatIDevelop',
    myTools: 'myTools',
    whatIHaveMade: 'whatIHaveMade',
    getInTouch: 'getInTouch',
    switchTheme: 'switchTheme',
    webDevelopment: 'webDevelopment',
    webDevelopmentMessage: 'webDevelopmentMessage',
    eCommerce: 'eCommerce',
    eCommerceMessage: 'eCommerceMessage',
    ioTSolutions: 'ioTSolutions',
    ioTSolutionsMessage: 'ioTSolutionsMessage',
    threeDDesignAndPrinting: 'threeDDesignAndPrinting',
    threeDDesignAndPrintingMessage: 'threeDDesignAndPrintingMessage',
    chatbotsAndVoiceAssistants: 'chatbotsAndVoiceAssistants',
    chatbotsAndVoiceAssistantsMessage: 'chatbotsAndVoiceAssistantsMessage',
    namePlaceholder: 'namePlaceholder',
    emailPlaceholder: 'emailPlaceholder',
    messagePlaceholder: 'messagePlaceholder',
    submitButtonPlaceholder: 'submitButtonPlaceholder',
}
// String contained int the application
const strings = {
    [variableNames.submitButtonPlaceholder]: {
        EN: 'Send',
        IT: 'Invia',
    },
    [variableNames.messagePlaceholder]: {
        EN: 'Please leave a message :)',
        IT: 'Lasciami un messaggio :)',
    },
    [variableNames.emailPlaceholder]: {
        EN: 'E-mail address',
        IT: 'Indirizzo e-mail',
    },
    [variableNames.namePlaceholder]: {
        EN: 'Name',
        IT: 'Nome',
    },
    [variableNames.sidebarMessage]: {
        EN: 'Hi! My name is Silvio, I\'m a software developer living in Trento, Italy. I like 3D printing, wolfdogs and computer science',
        IT: 'Ciao! mi chiamo Silvio, lavoro come software developer e vivo a Trento in Italia. Mi piacciono le stampanti 3D, i cani lupo e l\'informatica',
    },
    [variableNames.whatIDevelop]: {
        EN: 'What I develop',
        IT: 'Cosa sviluppo',
    },
    [variableNames.myTools]: {
        EN: 'My Tools',
        IT: 'I miei strumenti',
    },
    [variableNames.whatIHaveMade]: {
        EN: 'What I have made',
        IT: 'Cosa ho fatto',
    },
    [variableNames.getInTouch]: {
        EN: 'Get in touch',
        IT: 'Contattami',
    },
    [variableNames.switchTheme]: {
        EN: 'Switch theme',
        IT: 'Cambia tema',
    },
    [variableNames.webDevelopment]: {
        EN: 'Web development',
        IT: 'Sviluppo per il web',
    },
    [variableNames.webDevelopmentMessage]: {
        EN: 'I build responsive sites, both backend and frontend using the latest technologies and frameworks for smarter web-apps.',
        IT: 'Sviluppo siti responsive occupandomi sia della parte backend che del frontend, nel farlo utilizzo le ultime tecnologie e framework per la creazione di web-apps più smart.',
    },
    [variableNames.eCommerce]: {
        EN: 'E-commerce',
        IT: 'Commercio elettronico',
    },
    [variableNames.eCommerceMessage]: {
        EN: 'I develop e-commerce for B2C and B2B clients',
        IT: 'Sviluppo piattaforme per il commercio elettronico per sistemi B2B o B2C',
    },
    [variableNames.ioTSolutions]: {
        EN: 'IoT solutions',
        IT: 'Applicazioni IoT',
    },
    [variableNames.ioTSolutionsMessage]: {
        EN: <>With <b>2+</b> years of experience in building IoT systems for outdoor and industrial applications</>,
        IT: <>Con <b>2+</b> anni di esperienza nella costruzione di sistemi IoT per soluzioni per esterni e per l'industria</>,
    },
    [variableNames.threeDDesignAndPrinting]: {
        EN: '3D Design and printing',
        IT: 'Modellazione e stampa 3D',
    },
    [variableNames.threeDDesignAndPrintingMessage]: {
        EN: 'I design and build machines, devices and embedded systems rugged enclosures',
        IT: 'Progetto e costruisco macchine, dispositivi e custodie resistenti per sistemi embedded',
    },
    [variableNames.chatbotsAndVoiceAssistants]: {
        EN: 'Chatbots and voice assistants',
        IT: 'Chatbots e assistenti vocali',
    },
    [variableNames.chatbotsAndVoiceAssistantsMessage]: {
        EN: 'I develop conversational bots to book a room, get your assets stats from remote, and any other thing you may need ;)',
        IT: 'Sviluppo bot conversazionali per prenotare una camera, controllare da remoto lo stato dei tuoi dispositivi, e qualunque altra cosa di cui tu abbia bisogno ;)',
    },
}

export { strings, variableNames }
import React from 'react'
import './ContactMe.css'

export default ({ namePlaceholder, emailPlaceholder, messagePlaceholder, submitButtonPlaceholder }) =>
    <div className="form-wrapper">
        <form id="form" class="topBefore" action="https://formspree.io/biasiol.silvio@gmail.com" method="POST">
            <input id="name" name="name" type="text" placeholder={namePlaceholder} />
            <input id="email" name="email" type="email" placeholder={emailPlaceholder} />
            <textarea id="message" name="message" type="text" placeholder={messagePlaceholder} />
            <input id="submit" type="submit" value={submitButtonPlaceholder} />
        </form>
    </div>
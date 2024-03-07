import React from 'react'
import Container from '../../Container'
import './Contact.css'
import facebook from '../../../assets/facebook.png'
import instagram from '../../../assets/instagram.png'
import youtube from '../../../assets/youtube.png'
import linkedin from '../../../assets/linkedin.png'
import github from '../../../assets/github.png'

const Contact = () => {
    return (
        <Container id="contact">
            <div className="contact-frame">
                <div className="contact-contents">
                    <div className="h2white">
                        CONTACT ME
                    </div>
                    <div className="socials">
                        <a href="https://www.facebook.com/gelotinx2/">
                            <img src={facebook} />
                        </a>
                        <a href="https://www.instagram.com/young.fresho/">
                            <img src={instagram} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCF0R7PXLl445w_0qYuA6d7A">
                            <img src={youtube} />
                        </a>
                        <a href="https://www.linkedin.com/in/mark-angelo-maligalig-74457a2b4/">
                            <img src={linkedin} />
                        </a>
                        <a href="https://github.com/kyletagulao/">
                            <img src={github} />
                        </a>

                    </div>
                </div>
                <div className="footer-text">
                    Copyright © 2024, All Rights Reserved
                </div>
            </div>
        </Container>
    )
}

export default Contact
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_balnk" aria-label="facebook" rel="noopener noreferrer">
                                 <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_balnk" aria-label="instagram" rel="noopener noreferrer">
                                 <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_balnk" aria-label="twitter" rel="noopener noreferrer">
                                 <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_balnk" aria-label="youtube" rel="noopener noreferrer">
                                 <FaYoutube/>
                            </SocialIconLink>

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

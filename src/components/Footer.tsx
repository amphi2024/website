import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faMastodon, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const AppFooter = styled.footer`
        text-align: center;
        padding: 20px;
        background-color: var(--footer-background-color);
        svg {
            font-size: 30px;
        }
        
        div{
            margin-top: 10px;
        }
    `;

const LinksSection = styled.div`
    a {
        font-size: 15px;
        color: var(--text-color);
        font-weight: bold;
        margin: var(--item-margin);   
    }
`;

const FooterButton = styled.a`
    background-color: transparent;
    padding: 8px;
    font-size: 15px;
    color: var(--text-color);
    cursor: pointer;
    
    &:hover {
        color: var(--text-color-secondary);
    }
`

function Footer() {

    const {t} = useTranslation();

    return (
        <AppFooter className="AppFooter">
            <div>
                © 2026 Amphi
            </div>
            <LinksSection>
                <Link to={"/privacy"}>
                    {t("privacyPolicy")}
                </Link>
                <Link to={"/terms"}>
                    {t("termsAndCondition")}
                </Link>
            </LinksSection>
            <div>
                <FooterButton href={"https://github.com/amphi2024"} target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub} />
                </FooterButton>
                <FooterButton href={"https://x.com/amphi2024"} target={"_blank"}>
                    <FontAwesomeIcon icon={faXTwitter}/>
                </FooterButton>
                <FooterButton rel={"me"} title={"Mastodon"} href={"https://mastodon.social/@amphi2024"} target={"_blank"}>
                    <FontAwesomeIcon icon={faMastodon}/>
                </FooterButton>
                <FooterButton href={"https://youtube.com/@amphi2024"} target={"_blank"}>
                    <FontAwesomeIcon icon={faYoutube}/>
                </FooterButton>
            </div>
        </AppFooter>
    );
}

export default Footer;
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const AppFooter = styled.footer`
        text-align: center;
        padding: 20px;
        background-color: var(--footer-background-color);

        a {
            font-size: 15px;
            color: var(--text-color);
            font-weight: bold;
            margin: var(--item-margin);
        }
        
        svg {
            font-size: 30px;
        }
        
        div{
            margin-top: 10px;
        }
    `;

const FooterButton = styled.button`
    background-color: transparent;
    padding: 8px;
    font-size: 15px;
    color: var(--text-color-secondary);
    
    &:hover {
        color: var(--text-color);
    }
`

function Footer() {

    const {t} = useTranslation();

    return (
        <AppFooter className="AppFooter">
            <div>
                © 2026 Amphi
            </div>
            <div>
                <Link to={"/privacy"}>
                    {t("privacyPolicy")}
                </Link>
                <Link to={"/terms"}>
                    {t("termsAndCondition")}
                </Link>
            </div>
            <div>
                <FooterButton onClick={() => {
                    window.open("https://github.com/amphi2024", "_blank");
                }}>
                    <FontAwesomeIcon icon={faGithub} />
                </FooterButton>
                <FooterButton onClick={() => {
                    window.open("https://x.com/amphi2024", "_blank");
                }}>
                    <FontAwesomeIcon icon={faXTwitter}/>
                </FooterButton>
                <FooterButton onClick={() => {
                    window.open("https://youtube.com/@amphi2024", "_blank");
                }}>
                    <FontAwesomeIcon icon={faYoutube}/>
                </FooterButton>
            </div>
        </AppFooter>
    );
}

export default Footer;
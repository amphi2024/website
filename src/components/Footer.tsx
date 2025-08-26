import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

function Footer() {

    const {t} = useTranslation();

    const AppFooter = styled.footer`
        text-align: center;
        padding: 20px;
        background-color: var(--footer-background-color);

        //* {
        //    margin: var(--item-margin);
        //}

        a {
            font-size: 15px;
            color: var(--text-color);
            font-weight: bold;
            margin: var(--item-margin);
        }
        
        div{
            margin-top: 10px;
        }
    `;

    return (
        <AppFooter className="AppFooter">
            <div>
                © 2024 - 2025 Amphi
            </div>
            <div>
                <Link to={"/privacy"}>
                    {t("privacyPolicy")}
                </Link>
                <Link to={"/terms"}>
                    {t("termsAndCondition")}
                </Link>
                <Link to={"https://github.com/amphi2024"}>
                    {t("github")}
                </Link>
            </div>
        </AppFooter>
    );
}

export default Footer;
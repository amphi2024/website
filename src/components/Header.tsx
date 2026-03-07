import styled from "styled-components";
import {SelectLanguage} from "./SelectLanguage.tsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const AppHeader = styled.header`
        justify-content: end;
        align-items: center;
        padding: 10px;
        height: var(--header-height);
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        right: 0;
    
        a {
            padding: 10px;
            color: var(--text-color);
            font-size: 14px;
            text-decoration: none;
            
            &:hover {
                text-decoration: none !important;
                color: var(--text-color-secondary);
            }
        }

        button {
            font-size: 18px;
            text-decoration: none;
            color: var(--text-color);
            font-weight: bold;
            background-color: transparent;
            padding: 8px;
            //border-radius: 10px;
            border-radius: 30px;
        }

        button:hover {
            background-color: rgba(125, 125, 125, 0.2);
            text-decoration: none;
        }

        select {
            outline: none;
            border: none;
            background: none;
            color: var(--text-color);
            -webkit-appearance: none;
            appearance: none;
            padding-left: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
`;

const Header = () => {

    const {t} = useTranslation();

    return (
        <AppHeader>

            <Link to={"/"}>
                {t("apps")}
            </Link>

            <Link to={"/pricing"}>
                {t("pricing")}
            </Link>

            <SelectLanguage/>

        </AppHeader>
    );
};

export default Header;

import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faGlobe} from "@fortawesome/free-solid-svg-icons";
import i18n from "i18next";
import {completedTranslations} from "../completedTranslations.ts";

const PageFooterControls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px;
`;

const PageFooterControlButton = styled.button`
    background-color: transparent;
    padding: 8px;
    font-size: 15px;
    border-radius: 10px;
    
    svg {
        padding-right: 8px;
    }
    
    &:hover {
        background-color: rgba(125, 125, 125, 0.1);
    }
`;

export function ReturnButton() {
    const location = useLocation();
    const navigate = useNavigate();
    const [t] = useTranslation();
    if(location.pathname === "/") {
        return null;
    }
    return (
        <PageFooterControls>
            <PageFooterControlButton onClick={() => navigate("/")}>
                <FontAwesomeIcon icon={faArrowLeft} />
                {t("homepage")}
            </PageFooterControlButton>
        </PageFooterControls>
    );
}

export function ImproveTranslationsButton() {
    const [t] = useTranslation();
    if(completedTranslations.includes(i18n.language)) {
        return null;
    }
    return (
        <PageFooterControls>
            <PageFooterControlButton onClick={() => {
                window.open("https://github.com/amphi2024/website", "_blank");
            }}>
                <FontAwesomeIcon icon={faGlobe} />
                {t("improveTranslations")}
            </PageFooterControlButton>
        </PageFooterControls>
    );
}
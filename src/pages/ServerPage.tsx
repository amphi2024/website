import {
    AppPage,
    AppPageSection,
    LinkButton
} from "../components/AppDownload.tsx";
import {DownloadButton} from "../components/DownloadButton.tsx";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {Helmet} from "react-helmet-async";

const serverVersion = "3.1.1";

const SetupGuide = styled.button`
    width: 220px;
    border-radius: var(--download-button-border-radius);
    height: 40px;
    background-color: var(--card-background-color);
    font-size: 18px;
    margin-top: 8px;

    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export default function ServerPage() {

    const {t, i18n} = useTranslation("server");

    return (
        <>
            <Helmet>
                <title>Server for Amphi Apps</title>
            </Helmet>
            <AppPage>
                <AppPageSection>
                    <h1>
                        {t("title")}
                    </h1>
                    <h2>
                        {t("subtitle")}
                    </h2>

                    <img src={"images/server-logo.png"} alt="Server Logo" style={{
                        width: "150px",
                    }}/>

                    <DownloadButton onClick={() => {
                        window.open(`https://github.com/amphi2024/server/releases/download/v${serverVersion}/server-${serverVersion}.jar`, "_blank");
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/server/releases", "_blank");
                    }}>{serverVersion} / {new Date(2026, 2, 22).toLocaleDateString(i18n.language, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                    </LinkButton>

                    <div>
                        <SetupGuide style={{
                            marginRight: "10px"
                        }} onClick={() => {
                            window.open("https://github.com/amphi2024/server", "_blank");
                        }}>{t("setupGuide")}</SetupGuide>

                        <SetupGuide onClick={() => {
                            window.open("https://youtube.com/@amphi2024", "_blank");
                        }}>{t("youtubeTutorial")}
                        </SetupGuide>
                    </div>

                </AppPageSection>

            </AppPage>
        </>
    );
}
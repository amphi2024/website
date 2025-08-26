import {
    AppPage,
    AppPageSection,
    Command,
    DownloadLink,
    DownloadLinkIcon,
    LinkButton
} from "../components/AppDownload.tsx";
import {faCircleDown} from "@fortawesome/free-regular-svg-icons";
import {DownloadButton} from "../components/DownloadButton.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";

export default function ServerPage() {

    const [t] = useTranslation();
    const nextStepsRef = useRef<HTMLDivElement>(null);
    const scrollToNextSteps = () => {
        nextStepsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        document.title = "Server for Amphi Apps";
    }, []);

    return (
        <AppPage>
            <AppPageSection>
                <h1>
                    {t("serverPageTitle")}
                </h1>
                <h2>
                    {t("serverPageSubtitle")}
                </h2>

                <img src={"images/server-logo.png"} alt="Server Logo" style={{
                    width: "150px",
                }}/>

                <DownloadButton onClick={() => {
                    window.open("https://github.com/amphi2024/server/releases/download/v1.3.0/server-1.3.0.jar", "_blank");
                }}/>

                <LinkButton onClick={() => {
                    window.open("https://github.com/amphi2024/server/releases", "_blank");
                }}>{t("allReleases")}
                </LinkButton>

                <LinkButton onClick={scrollToNextSteps}>
                    <FontAwesomeIcon icon={faArrowDown}/>
                    {t("nextSteps")}
                </LinkButton>
            </AppPageSection>

            <AppPageSection ref={nextStepsRef}>

                <h1>
                    Finish the Setup
                </h1>

                <h2>1. Download JRE</h2>

                <p>
                    Choose your preferred JRE (you can pick either Adoptium or Azul)
                </p>

                <DownloadLink href={"https://adoptium.net/temurin/releases/?package=jre"} target={"_blank"}
                              rel={"noreferrer"}>
                    <DownloadLinkIcon icon={faCircleDown}/>Adoptium
                </DownloadLink>
                <DownloadLink href={"https://www.azul.com/downloads/?package=jre"} target={"_blank"} rel={"noreferrer"}>
                    <DownloadLinkIcon icon={faCircleDown}/>Azul
                </DownloadLink>

                <p>
                    Make sure to select the correct version for your operating system and architecture.
                </p>

                <p>

                </p>

                <h2>2. Run the Server</h2>

                <h3>
                    Open up the terminal, And run this command
                </h3>

                <Command>
                    path/to/your/jre/bin/java -jar server.jar
                </Command>

                <p>
                    Also, if you are an advanced user, you can set up options like remote access (e.g., Tailscale or other VPN solutions), port forwarding, or running the server as a system service, depending on your needs.
                </p>

            </AppPageSection>

        </AppPage>
    );
}
import {AppPreview} from "../Home.tsx";
import {useEffect, useRef} from "react";
import {useTranslation} from "react-i18next";

import {
    AppPage,
    AppPageSection,
    DownloadFieldContainer,
    LinkButton,
    SelectField
} from "../../components/AppDownload.tsx";
import { useLocation} from "react-router-dom";
import {SelectButton} from "../../components/SelectButton.tsx";
import {useStore} from "../../store";
import {
    FLATPAK_LINK,
    HOMEBREW_LINK, CLOUD_APK, CLOUD_APPLE_APP_STORE, CLOUD_AUR,
    CLOUD_DEB,
    CLOUD_DEB_ARM, CLOUD_DMG,
    CLOUD_EXE, CLOUD_PLAY_STORE,
    CLOUD_RPM, CLOUD_RPM_ARM, CLOUD_SNAP,
    CLOUD_TAR,
    CLOUD_TAR_ARM,
    CLOUD_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {PackageManagerButton, PackageManagers, PackageManagerSection} from "../../components/PackageManager.tsx";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const windowsBinaryTypes = [
    CLOUD_EXE,
    CLOUD_ZIP,
];

const linuxBinaryTypes = [
    CLOUD_DEB,
    CLOUD_RPM,
    CLOUD_TAR,
    CLOUD_DEB_ARM,
    CLOUD_RPM_ARM,
    CLOUD_TAR_ARM
];

function SelectPlatformButtonForCloud() {
    const {selectedPlatform, cloudBinaryTypeWindows, setCloudBinaryTypeWindows, cloudBinaryTypeLinux, setCloudBinaryTypeLinux} = useStore();

    if(selectedPlatform.value === "windows") {
        return (
            <SelectButton items={windowsBinaryTypes} selectedItem={cloudBinaryTypeWindows} setSelectedItem={setCloudBinaryTypeWindows}/>
        );
    }
    if(selectedPlatform.value === "linux") {
        return (
            <SelectButton items={linuxBinaryTypes} selectedItem={cloudBinaryTypeLinux} setSelectedItem={setCloudBinaryTypeLinux}/>
        );
    }
    else {
        return null;
    }

}

export default function CloudPage() {

    const [t] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Cloud";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, cloudBinaryTypeWindows, cloudBinaryTypeLinux} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/cloud-preview-apple.png"
        : "/images/cloud-preview-libre.png";
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AppPage>
            <AppPageSection>
                <h1>
                    {t("cloudPageTitle")}
                </h1>
                <h2>
                    {t("cloudPageSubtitle")}
                </h2>
                <AppPreview src={preview} alt={"cloudAppPreview"} loading="eager"/>

                <DownloadFieldContainer>

                    <SelectField>
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={setSelectedPlatform}/>

                        <SelectPlatformButtonForCloud/>

                    </SelectField>

                    <DownloadButton onClick={() => {
                        switch (selectedPlatform.value) {
                            case "windows":
                                window.open(cloudBinaryTypeWindows.value, "_blank");
                                break;
                            case "macos":
                                window.open(CLOUD_DMG, "_blank");
                                break;
                            case "linux":
                                window.open(cloudBinaryTypeLinux.value, "_blank");
                                break;
                            case "android":
                                window.open(CLOUD_PLAY_STORE, "_blank");
                                break;
                            case "ios":
                                window.open(CLOUD_APPLE_APP_STORE, "_blank");
                                break;
                        }
                    }}/>

                    <PackageManagerButton onClick={() => {
                        if(selectedPlatform.value === "android") {
                            window.open(CLOUD_APK, "_blank");
                        }
                        else {
                            scrollToBottom();
                        }
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/cloud/releases", "_blank");
                    }}>{t("allReleases")}
                    </LinkButton>

                </DownloadFieldContainer>

            </AppPageSection>

            <AppPageSection ref={bottomRef}>
                <h1>
                    {t("downloadOnPackageManager")}
                </h1>
                <PackageManagers>
                    <PackageManagerSection platform={"Windows"} items={[
                        {label: "Scoop", link: SCOOP},
                    ]} />
                    <PackageManagerSection platform={"macOS"} items={[
                        {label: "Homebrew", link: HOMEBREW_LINK},
                    ]} />
                    <PackageManagerSection platform={"Linux"} items={[
                        {label: "Flatpak", link: FLATPAK_LINK},
                        {label: "Snap Store", link: CLOUD_SNAP},
                        {label: "AUR", link: CLOUD_AUR},
                    ]} />
                </PackageManagers>
            </AppPageSection>

        </AppPage>
    )
        ;
}
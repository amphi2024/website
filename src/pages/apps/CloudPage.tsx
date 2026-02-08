import {AppPreview} from "../Home.tsx";
import {useEffect} from "react";
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
import {type DownloadOption, useStore} from "../../store";
import {
    FLATPAK,
    HOMEBREW, CLOUD_APK, CLOUD_APPLE_APP_STORE, CLOUD_AUR,
    CLOUD_DEB,
    CLOUD_DEB_ARM, CLOUD_DMG,
    CLOUD_EXE, CLOUD_PLAY_STORE,
    CLOUD_RPM, CLOUD_RPM_ARM, CLOUD_SNAP,
    CLOUD_TAR,
    CLOUD_TAR_ARM,
    CLOUD_ZIP, platforms,
    SCOOP, CLOUD_VERSION
} from "../../downloadLinks";
import {DownloadButton} from "../../components/DownloadButton.tsx";


const downloadOptions: Record<string, DownloadOption[]>  = {
    windows: [
        SCOOP,
        CLOUD_EXE,
        CLOUD_ZIP,
    ],
    macos: [
        HOMEBREW,
        CLOUD_DMG
    ],
    linux: [
        CLOUD_SNAP,
        FLATPAK,
        CLOUD_AUR,
        CLOUD_DEB,
        CLOUD_RPM,
        CLOUD_TAR,
        CLOUD_DEB_ARM,
        CLOUD_RPM_ARM,
        CLOUD_TAR_ARM
    ],
    android: [
        CLOUD_PLAY_STORE,
        CLOUD_APK
    ],
    ios: [
        CLOUD_APPLE_APP_STORE
    ],
};

function SelectDownloadOption() {
    const {selectedPlatform, cloudDownloadOptions, setCloudDownloadOptions} = useStore();
    switch (selectedPlatform.value) {
        case "windows":
        case "macos":
        case "linux":
        case "android":
            return (
                <SelectButton items={downloadOptions[selectedPlatform.value]} selectedItem={cloudDownloadOptions[selectedPlatform.value]} setSelectedItem={(index) => {
                    setCloudDownloadOptions({
                        ...cloudDownloadOptions,
                        [selectedPlatform.value]: downloadOptions[selectedPlatform.value][index]
                    });
                }}/>
            );
        default:
            return null;
    }
}

export default function CloudPage() {

    const [t, i18n] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Cloud";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, cloudDownloadOptions} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/cloud-preview-apple.png"
        : "/images/cloud-preview-libre.png";

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
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={(index) => {
                            setSelectedPlatform(platforms[index]);
                        }}/>

                        <SelectDownloadOption/>

                    </SelectField>

                    <DownloadButton downloadOption={cloudDownloadOptions[selectedPlatform.value]} onClick={() => {
                        window.open(cloudDownloadOptions[selectedPlatform.value].value, "_blank");
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/cloud/releases", "_blank");
                    }}>{CLOUD_VERSION} / {new Date(2025, 9, 9).toLocaleDateString(i18n.language, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'})}
                    </LinkButton>

                </DownloadFieldContainer>

            </AppPageSection>

        </AppPage>
    )
        ;
}
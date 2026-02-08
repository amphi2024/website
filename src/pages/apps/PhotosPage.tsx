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
    HOMEBREW, PHOTOS_APK, PHOTOS_APPLE_APP_STORE, PHOTOS_AUR,
    PHOTOS_DEB, PHOTOS_DEB_ARM, PHOTOS_DMG, PHOTOS_EXE, PHOTOS_PLAY_STORE, PHOTOS_RPM, PHOTOS_RPM_ARM, PHOTOS_SNAP,
    PHOTOS_TAR, PHOTOS_TAR_ARM, PHOTOS_VERSION, PHOTOS_ZIP,
    platforms,
    SCOOP
} from "../../downloadLinks";
import {DownloadButton} from "../../components/DownloadButton.tsx";


const downloadOptions: Record<string, DownloadOption[]>  = {
    windows: [
        SCOOP,
        PHOTOS_EXE,
        PHOTOS_ZIP,
    ],
    macos: [
        HOMEBREW,
        PHOTOS_DMG
    ],
    linux: [
        PHOTOS_SNAP,
        FLATPAK,
        PHOTOS_AUR,
        PHOTOS_DEB,
        PHOTOS_RPM,
        PHOTOS_TAR,
        PHOTOS_DEB_ARM,
        PHOTOS_RPM_ARM,
        PHOTOS_TAR_ARM
    ],
    android: [
        PHOTOS_PLAY_STORE,
        PHOTOS_APK
    ],
    ios: [
        PHOTOS_APPLE_APP_STORE
    ],
};

function SelectDownloadOption() {
    const {selectedPlatform, photosDownloadOptions, setPhotosDownloadOptions} = useStore();
    switch (selectedPlatform.value) {
        case "windows":
        case "macos":
        case "linux":
        case "android":
            return (
                <SelectButton items={downloadOptions[selectedPlatform.value]} selectedItem={photosDownloadOptions[selectedPlatform.value]} setSelectedItem={(index) => {
                    setPhotosDownloadOptions({
                        ...photosDownloadOptions,
                        [selectedPlatform.value]: downloadOptions[selectedPlatform.value][index]
                    });
                }}/>
            );
        default:
            return null;
    }
}

export default function PhotosPage() {

    const [t, i18n] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Photos";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, photosDownloadOptions} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/photos-preview-apple.png"
        : "/images/photos-preview-libre.png";

    return (
        <AppPage>
            <AppPageSection>
                <h1>
                    {t("photosPageTitle")}
                </h1>
                <h2>
                    {t("photosPageSubtitle")}
                </h2>
                <AppPreview src={preview} alt={"photosAppPreview"} loading="eager"/>

                <DownloadFieldContainer>

                    <SelectField>
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={(index) => {
                            setSelectedPlatform(platforms[index]);
                        }}/>

                        <SelectDownloadOption/>

                    </SelectField>

                    <DownloadButton downloadOption={photosDownloadOptions[selectedPlatform.value]} onClick={() => {
                        window.open(photosDownloadOptions[selectedPlatform.value].value, "_blank");
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/photos/releases", "_blank");
                    }}>{PHOTOS_VERSION} / {new Date(2026, 0, 19).toLocaleDateString(i18n.language, {
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
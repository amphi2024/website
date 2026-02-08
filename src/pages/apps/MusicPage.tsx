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
import {useLocation} from "react-router-dom";
import {SelectButton} from "../../components/SelectButton.tsx";
import {type DownloadOption, useStore} from "../../store";
import {
    FLATPAK,
    HOMEBREW, MUSIC_APK, MUSIC_APPLE_APP_STORE, MUSIC_AUR,
    MUSIC_DEB,
    MUSIC_DEB_ARM, MUSIC_DMG,
    MUSIC_EXE, MUSIC_PLAY_STORE,
    MUSIC_RPM, MUSIC_RPM_ARM, MUSIC_SNAP,
    MUSIC_TAR,
    MUSIC_TAR_ARM, MUSIC_VERSION,
    MUSIC_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const downloadOptions: Record<string, DownloadOption[]>  = {
    windows: [
        SCOOP,
        MUSIC_EXE,
        MUSIC_ZIP,
    ],
    macos: [
        HOMEBREW,
        MUSIC_DMG
    ],
    linux: [
        MUSIC_SNAP,
        FLATPAK,
        MUSIC_AUR,
        MUSIC_DEB,
        MUSIC_RPM,
        MUSIC_TAR,
        MUSIC_DEB_ARM,
        MUSIC_RPM_ARM,
        MUSIC_TAR_ARM
    ],
    android: [
        MUSIC_PLAY_STORE,
        MUSIC_APK
    ],
    ios: [
        MUSIC_APPLE_APP_STORE
    ],
};

function SelectDownloadOption() {
    const {selectedPlatform, musicDownloadOptions, setMusicDownloadOptions} = useStore();
    switch (selectedPlatform.value) {
        case "windows":
        case "macos":
        case "linux":
        case "android":
            return (
                <SelectButton items={downloadOptions[selectedPlatform.value]} selectedItem={musicDownloadOptions[selectedPlatform.value]} setSelectedItem={(index) => {
                    setMusicDownloadOptions({
                        ...musicDownloadOptions,
                        [selectedPlatform.value]: downloadOptions[selectedPlatform.value][index]
                    });
                }}/>
            );
        default:
            return null;
    }
}

export default function MusicPage() {

    const [t, i18n] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Music";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, musicDownloadOptions} = useStore();
    let preview: string = "/images/music-preview-android-windows.webp";
    switch (selectedPlatform.value) {
        case "macos":
        case "ios":
            preview = "/images/music-preview-apple.webp";
            break;
        case "linux":
            preview = "/images/music-preview-linux.webp";
            break;
    }

    return (
        <AppPage>
            <AppPageSection>
                <h1>
                    {t("musicPageTitle")}
                </h1>
                <h2>
                    {t("musicPageSubtitle")}
                </h2>
                <AppPreview src={preview} alt={"musicAppPreview"} loading="eager"/>

                <DownloadFieldContainer>

                    <SelectField>
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={(index) => {
                            setSelectedPlatform(platforms[index]);
                        }}/>

                        <SelectDownloadOption/>

                    </SelectField>

                    <DownloadButton downloadOption={musicDownloadOptions[selectedPlatform.value]} onClick={() => {
                        window.open(musicDownloadOptions[selectedPlatform.value].value, "_blank");
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/music/releases", "_blank");
                    }}>{MUSIC_VERSION} / {new Date(2026, 0, 2).toLocaleDateString(i18n.language, {
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
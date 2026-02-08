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
    HOMEBREW, NOTES_APK, NOTES_APPLE_APP_STORE, NOTES_AUR,
    NOTES_DEB,
    NOTES_DEB_ARM, NOTES_DMG,
    NOTES_EXE, NOTES_PLAY_STORE,
    NOTES_RPM, NOTES_RPM_ARM, NOTES_SNAP,
    NOTES_TAR,
    NOTES_TAR_ARM, NOTES_VERSION,
    NOTES_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const downloadOptions: Record<string, DownloadOption[]>  = {
    windows: [
        SCOOP,
    NOTES_EXE,
    NOTES_ZIP,
],
macos: [
    HOMEBREW,
    NOTES_DMG
],
    linux: [
        NOTES_SNAP,
        FLATPAK,
        NOTES_AUR,
        NOTES_DEB,
        NOTES_RPM,
        NOTES_TAR,
        NOTES_DEB_ARM,
        NOTES_RPM_ARM,
        NOTES_TAR_ARM
    ],
    android: [
        NOTES_PLAY_STORE,
        NOTES_APK
    ],
    ios: [
        NOTES_APPLE_APP_STORE
    ],
};

function SelectDownloadOption() {
    const {selectedPlatform, notesDownloadOptions, setNotesDownloadOptions} = useStore();
    switch (selectedPlatform.value) {
        case "windows":
        case "macos":
        case "linux":
        case "android":
            return (
                <SelectButton items={downloadOptions[selectedPlatform.value]} selectedItem={notesDownloadOptions[selectedPlatform.value]} setSelectedItem={(index) => {
                    setNotesDownloadOptions({
                        ...notesDownloadOptions,
                        [selectedPlatform.value]: downloadOptions[selectedPlatform.value][index]
                    });
                }}/>
            );
        default:
            return null;
    }
}

export default function NotesPage() {

    const [t, i18n] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Notes";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, notesDownloadOptions} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/notes-preview-apple.webp"
        : "/images/notes-preview-libre.webp";

    return (
        <AppPage>
            <AppPageSection>
                <h1>
                    {t("notesPageTitle")}
                </h1>
                <h2>
                    {t("notesPageSubtitle")}
                </h2>
                <AppPreview src={preview} alt={"notesAppPreview"} loading="eager"/>

                <DownloadFieldContainer>

                    <SelectField>
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={(index) => {
                            setSelectedPlatform(platforms[index]);
                        }}/>

                        <SelectDownloadOption/>

                    </SelectField>

                    <DownloadButton downloadOption={notesDownloadOptions[selectedPlatform.value]} onClick={() => {
                        window.open(notesDownloadOptions[selectedPlatform.value].value, "_blank");
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/notes/releases", "_blank");
                    }}>{NOTES_VERSION} / {new Date(2026, 0, 27).toLocaleDateString(i18n.language, {
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
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
    HOMEBREW_LINK, NOTES_APK, NOTES_APPLE_APP_STORE, NOTES_AUR,
    NOTES_DEB,
    NOTES_DEB_ARM, NOTES_DMG,
    NOTES_EXE, NOTES_PLAY_STORE,
    NOTES_RPM, NOTES_RPM_ARM, NOTES_SNAP,
    NOTES_TAR,
    NOTES_TAR_ARM,
    NOTES_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {PackageManagerButton, PackageManagers, PackageManagerSection} from "../../components/PackageManager.tsx";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const windowsBinaryTypes = [
    NOTES_EXE,
    NOTES_ZIP,
];

const linuxBinaryTypes = [
    NOTES_DEB,
    NOTES_RPM,
    NOTES_TAR,
    NOTES_DEB_ARM,
    NOTES_RPM_ARM,
    NOTES_TAR_ARM
];

function SelectPlatformButtonForNotes() {
    const {selectedPlatform, notesBinaryTypeWindows, setNotesBinaryTypeWindows, notesBinaryTypeLinux, setNotesBinaryTypeLinux} = useStore();
    if(selectedPlatform.value === "windows") {
        return (
            <SelectButton items={windowsBinaryTypes} selectedItem={notesBinaryTypeWindows} setSelectedItem={setNotesBinaryTypeWindows}/>
        );
    }
    if(selectedPlatform.value === "linux") {
        return (
            <SelectButton items={linuxBinaryTypes} selectedItem={notesBinaryTypeLinux} setSelectedItem={setNotesBinaryTypeLinux}/>
        );
    }
    else {
        return null;
    }

}

export default function NotesPage() {

    const [t] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Notes";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, notesBinaryTypeWindows, notesBinaryTypeLinux} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/notes-preview-apple.png"
        : "/images/notes-preview-libre.png";
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={setSelectedPlatform}/>

                        <SelectPlatformButtonForNotes/>

                    </SelectField>

                    <DownloadButton onClick={() => {
                        switch (selectedPlatform.value) {
                            case "windows":
                                window.open(notesBinaryTypeWindows.value, "_blank");
                                break;
                            case "macos":
                                window.open(NOTES_DMG, "_blank");
                                break;
                            case "linux":
                                window.open(notesBinaryTypeLinux.value, "_blank");
                                break;
                            case "android":
                                window.open(NOTES_PLAY_STORE, "_blank");
                                break;
                            case "ios":
                                window.open(NOTES_APPLE_APP_STORE, "_blank");
                                break;
                        }
                    }}/>

                    <PackageManagerButton onClick={() => {
                        if(selectedPlatform.value === "android") {
                            window.open(NOTES_APK, "_blank");
                        }
                        else {
                            scrollToBottom();
                        }
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/notes/releases", "_blank");
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
                        {label: "Snap Store", link: NOTES_SNAP},
                        {label: "AUR", link: NOTES_AUR},
                    ]} />
                </PackageManagers>
            </AppPageSection>

        </AppPage>
    )
        ;
}
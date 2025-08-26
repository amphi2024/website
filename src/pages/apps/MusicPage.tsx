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
    HOMEBREW_LINK, MUSIC_APK, MUSIC_APPLE_APP_STORE, MUSIC_AUR,
    MUSIC_DEB,
    MUSIC_DEB_ARM, MUSIC_DMG,
    MUSIC_EXE, MUSIC_PLAY_STORE,
    MUSIC_RPM, MUSIC_RPM_ARM, MUSIC_SNAP,
    MUSIC_TAR,
    MUSIC_TAR_ARM,
    MUSIC_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {PackageManagerButton, PackageManagers, PackageManagerSection} from "../../components/PackageManager.tsx";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const windowsBinaryTypes = [
    MUSIC_EXE,
    MUSIC_ZIP,
];

const linuxBinaryTypes = [
    MUSIC_DEB,
    MUSIC_RPM,
    MUSIC_TAR,
    MUSIC_DEB_ARM,
    MUSIC_RPM_ARM,
    MUSIC_TAR_ARM
];

function SelectPlatformButtonForMusic() {
    const {selectedPlatform, musicBinaryTypeWindows, setMusicBinaryTypeWindows, musicBinaryTypeLinux, setMusicBinaryTypeLinux} = useStore();

    if(selectedPlatform.value === "windows") {
        return (
            <SelectButton items={windowsBinaryTypes} selectedItem={musicBinaryTypeWindows} setSelectedItem={setMusicBinaryTypeWindows}/>
        );
    }
    if(selectedPlatform.value === "linux") {
        return (
            <SelectButton items={linuxBinaryTypes} selectedItem={musicBinaryTypeLinux} setSelectedItem={setMusicBinaryTypeLinux}/>
        );
    }
    else {
        return null;
    }

}

export default function MusicPage() {

    const [t] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Music";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, musicBinaryTypeWindows, musicBinaryTypeLinux} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/music-preview-apple.png"
        : "/images/music-preview-libre.png";
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={setSelectedPlatform}/>

                        <SelectPlatformButtonForMusic/>

                    </SelectField>

                    <DownloadButton onClick={() => {
                        switch (selectedPlatform.value) {
                            case "windows":
                                window.open(musicBinaryTypeWindows.value, "_blank");
                                break;
                            case "macos":
                                window.open(MUSIC_DMG, "_blank");
                                break;
                            case "linux":
                                window.open(musicBinaryTypeLinux.value, "_blank");
                                break;
                            case "android":
                                window.open(MUSIC_PLAY_STORE, "_blank");
                                break;
                            case "ios":
                                window.open(MUSIC_APPLE_APP_STORE, "_blank");
                                break;
                        }
                    }}/>

                    <PackageManagerButton onClick={() => {
                        if(selectedPlatform.value === "android") {
                            window.open(MUSIC_APK, "_blank");
                        }
                        else {
                            scrollToBottom();
                        }
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/music/releases", "_blank");
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
                        {label: "Snap Store", link: MUSIC_SNAP},
                        {label: "AUR", link: MUSIC_AUR},
                    ]} />
                </PackageManagers>
            </AppPageSection>

        </AppPage>
    )
        ;
}
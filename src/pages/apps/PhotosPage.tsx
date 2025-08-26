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
    HOMEBREW_LINK, PHOTOS_APK, PHOTOS_APPLE_APP_STORE, PHOTOS_AUR,
    PHOTOS_DEB,
    PHOTOS_DEB_ARM, PHOTOS_DMG,
    PHOTOS_EXE, PHOTOS_PLAY_STORE,
    PHOTOS_RPM, PHOTOS_RPM_ARM, PHOTOS_SNAP,
    PHOTOS_TAR,
    PHOTOS_TAR_ARM,
    PHOTOS_ZIP, platforms,
    SCOOP
} from "../../downloadLinks";
import {PackageManagerButton, PackageManagers, PackageManagerSection} from "../../components/PackageManager.tsx";
import {DownloadButton} from "../../components/DownloadButton.tsx";

const windowsBinaryTypes = [
    PHOTOS_EXE,
    PHOTOS_ZIP,
];

const linuxBinaryTypes = [
    PHOTOS_DEB,
    PHOTOS_RPM,
    PHOTOS_TAR,
    PHOTOS_DEB_ARM,
    PHOTOS_RPM_ARM,
    PHOTOS_TAR_ARM
];

function SelectPlatformButtonForPhotos() {
    const {selectedPlatform, photosBinaryTypeWindows, setPhotosBinaryTypeWindows, photosBinaryTypeLinux, setPhotosBinaryTypeLinux} = useStore();

    if(selectedPlatform.value === "windows") {
        return (
            <SelectButton items={windowsBinaryTypes} selectedItem={photosBinaryTypeWindows} setSelectedItem={setPhotosBinaryTypeWindows}/>
        );
    }
    if(selectedPlatform.value === "linux") {
        return (
            <SelectButton items={linuxBinaryTypes} selectedItem={photosBinaryTypeLinux} setSelectedItem={setPhotosBinaryTypeLinux}/>
        );
    }
    else {
        return null;
    }

}

export default function PhotosPage() {

    const [t] = useTranslation();
    const location = useLocation();

    useEffect(() => {
        document.title = "Amphi Photos";
    }, [t, location]);
    const {selectedPlatform, setSelectedPlatform, photosBinaryTypeWindows, photosBinaryTypeLinux} = useStore();
    const preview = selectedPlatform.value === "macos" || selectedPlatform.value === "ios"
        ? "/images/photos-preview-apple.png"
        : "/images/photos-preview-libre.png";
    const bottomRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
                        <SelectButton items={platforms} selectedItem={selectedPlatform} setSelectedItem={setSelectedPlatform}/>

                        <SelectPlatformButtonForPhotos/>

                    </SelectField>

                    <DownloadButton onClick={() => {
                        switch (selectedPlatform.value) {
                            case "windows":
                                window.open(photosBinaryTypeWindows.value, "_blank");
                                break;
                            case "macos":
                                window.open(PHOTOS_DMG, "_blank");
                                break;
                            case "linux":
                                window.open(photosBinaryTypeLinux.value, "_blank");
                                break;
                            case "android":
                                window.open(PHOTOS_PLAY_STORE, "_blank");
                                break;
                            case "ios":
                                window.open(PHOTOS_APPLE_APP_STORE, "_blank");
                                break;
                        }
                    }}/>

                    <PackageManagerButton onClick={() => {
                        if(selectedPlatform.value === "android") {
                            window.open(PHOTOS_APK, "_blank");
                        }
                        else {
                            scrollToBottom();
                        }
                    }}/>

                    <LinkButton onClick={() => {
                        window.open("https://github.com/amphi2024/photos/releases", "_blank");
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
                        {label: "Snap Store", link: PHOTOS_SNAP},
                        {label: "AUR", link: PHOTOS_AUR},
                    ]} />
                </PackageManagers>
            </AppPageSection>

        </AppPage>
    )
        ;
}
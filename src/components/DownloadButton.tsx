import styled from "styled-components";
import {type DownloadOption, useStore} from "../store";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGooglePlay, faApple} from '@fortawesome/free-brands-svg-icons';
import {faIceCream, faStore} from "@fortawesome/free-solid-svg-icons";
import {HomebrewIcon} from "./icons/HomebrewIcon.tsx";
import {SnapcraftIcon} from "./icons/SnapcraftIcon.tsx";
import {ArchIcon} from "./icons/ArchIcon.tsx";

const Button = styled.button`
    width: 276px;
    border-radius: var(--download-button-border-radius);
    height: 50px;
    background-color: var(--highlight-color);
    color: white;
    font-size: 18px;
    margin-top: 8px;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--highlight-color-light);
    }

`;

const AppStoreButton = styled.button`
    width: 276px;
    border-radius: var(--download-button-border-radius);
    height: 50px;
    background-color: var(--highlight-color);
    color: white;
    font-size: 14px;
    margin-top: 8px;
    font-weight: 500;

    //i {
    //    margin-left: 15px;
    //    margin-right: 18px;
    //    font-size: 20px;
    //}
    //

    span {
        font-size: 18px;
    }

    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--highlight-color-light);
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 8px;
    margin-right: 18px;
    font-size: 20px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    text-align: left;
`;

export function DownloadButton({onClick, downloadOption = null}: { onClick: () => void , downloadOption?: DownloadOption | null}) {
    const [t] = useTranslation();
    const {selectedPlatform} = useStore();

    switch (selectedPlatform.value) {
        case "windows":
            switch (downloadOption?.type) {
                case "scoop":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <StyledFontAwesomeIcon icon={faIceCream}/>
                                </Column>
                                <Column>
                                    GET IT ON
                                    <span>
                            Scoop
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
                default:
                    return (
                        <Button onClick={onClick}>
                            {t("download")}
                        </Button>
                    );
            }
        case "macos":
            switch (downloadOption?.type) {
                case "homebrew":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <HomebrewIcon />
                                </Column>
                                <Column>
                                    Download on the
                                    <span>
                            Homebrew
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
                default:
                    return (
                        <Button onClick={onClick}>
                            {t("download")}
                        </Button>
                    );
            }
        case "linux":
            switch (downloadOption?.type) {
                case "flatpak":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <StyledFontAwesomeIcon icon={faStore}/>
                                </Column>
                                <Column>
                                    GET IT ON
                                    <span>
                            Amphihub
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
                case "aur":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <ArchIcon />
                                </Column>
                                <Column>
                                    GET IT ON
                                    <span>
                            AUR
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
                case "snap":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <SnapcraftIcon />
                                </Column>
                                <Column>
                                    GET IT ON
                                    <span>
                            Snap Store
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
             default:
                 return (
                     <Button onClick={onClick}>
                         {t("download")}
                     </Button>
                 );
            }
        case "android":
            switch (downloadOption?.type) {
                case "play_store":
                    return (
                        <AppStoreButton onClick={onClick}>
                            <Row>
                                <Column>
                                    <StyledFontAwesomeIcon icon={faGooglePlay}/>
                                </Column>
                                <Column>
                                    GET IT ON
                                    <span>
                            Google Play
                        </span>
                                </Column>
                            </Row>
                        </AppStoreButton>
                    );
                default:
                    return (
                        <Button onClick={onClick}>
                            {t("download")}
                        </Button>
                    );
            }
        case "ios":
            return (
                <AppStoreButton onClick={onClick}>
                    <Row>
                        <Column>
                            <StyledFontAwesomeIcon icon={faApple} style={{fontSize: "25px"}}></StyledFontAwesomeIcon>
                        </Column>
                        <Column>
                            Download on the
                            <span>
                            App Store
                        </span>
                        </Column>
                    </Row>
                </AppStoreButton>
            );
    }
    return (
        <Button onClick={onClick}>
            {t("download")}
        </Button>
    );
}
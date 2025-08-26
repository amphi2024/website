import styled from "styled-components";
import {useStore} from "../store";
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

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

export function DownloadButton({onClick} : {onClick: () => void}) {
    const [t] = useTranslation();
    const {selectedPlatform} = useStore();

    if(selectedPlatform.value === "android") {
        return (
            <AppStoreButton onClick={onClick}>
                <Row>
                    <Column>
                        <StyledFontAwesomeIcon icon={faGooglePlay} />
                        {/*<i className="fa-brands fa-google-play"></i>*/}
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
    }
    if(selectedPlatform.value === "ios") {
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
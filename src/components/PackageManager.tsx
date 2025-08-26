import styled from "styled-components";
import {LinkButton} from "./AppDownload.tsx";
import {useStore} from "../store";
import {useTranslation} from "react-i18next";

export const PackageManagers = styled.div`
    background-color: var(--card-background-color);
    width: 250px;
    padding: 15px;
    border-radius: var(--card-border-radius);
    font-size: 20px;
    
`;

const Label = styled.div`
    font-weight: bold;
`;

const PacManItem = styled.a`
    color: var(--highlight-color);
`;

const PacManItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    width: 100px;
`;

export function PackageManagerSection({platform, items}: {platform: string, items: {label: string, link: string}[]}) {
    return (
        <Section>
            <Label>
                {platform}
            </Label>
            <PacManItems>
                {items.map((item, index) => {
                    return (
                        <PacManItem href={item.link} target={"_blank"} rel="noreferrer" key={index}>
                            {item.label}
                        </PacManItem>
                    );
                })}
            </PacManItems>

        </Section>
    );
}

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export function PackageManagerButton({onClick}: {onClick: () => void}) {

    const [t] = useTranslation();
    const {selectedPlatform} = useStore();
    if(selectedPlatform.value === "android") {
        return (
            <LinkButton onClick={onClick}>{t("downloadAPK")}</LinkButton>
        );
    }
    if(selectedPlatform.value === "ios") {
        return null;
    }

    return (
        <LinkButton onClick={onClick}>{t("downloadOnPackageManager")}</LinkButton>
    );
}
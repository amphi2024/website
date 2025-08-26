import styled from "styled-components";
import {type ReactNode, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export function Command({ children }: { children: ReactNode }) {

    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faDollarSign}/>);
    const DollarSign = styled.span`
        color: rgb(123, 123, 123);
    `;

    const Code = styled.code`
        background-color: var(--footer-background-color);
        color: var(--text-color);
        display: flex;
        gap: 10px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: rgba(125, 125, 125, 0.2);
        }
    `;

    return (


        <Code onClick={async () => {
            setIcon(<FontAwesomeIcon icon={faCheck}/>);
            await navigator.clipboard.writeText(children!.toString());
            setInterval(() => {
                setIcon(<FontAwesomeIcon icon={faDollarSign}/>);
            }, 2000);
        }}>
            <DollarSign>{icon}</DollarSign>
            <span>
                {children}
                </span>
        </Code>


    );
}

export const DownloadLink = styled.a`
    color: var(--highlight-color);
    font-size: 1rem;
    border-radius: 10px;
    font-weight: bold;
    padding: 3px;
    cursor: pointer;

    //i {
    //    margin-right: 8px;
    //}
`;

export const DownloadLinkIcon = styled(FontAwesomeIcon)`
    margin-right: 5px;
`;

export const AppPage = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const AppPageSection = styled.section`
    height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-items: center;

    h1 {
        margin-top: 60px;
        font-size: 2.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
        
        h2 {
            font-size: 1.25rem;
        }
    }
`;

export const DownloadFieldContainer = styled.div`
    width: 276px;
    height: 175px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 15px;
    margin-top: 15px;

    a {
        margin-top: 5px;
    }
`;

export const LinkButton = styled.button`
    border: none;
    background: none;
    outline: none;
    color: var(--highlight-color);
    margin-top: 8px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const SelectField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
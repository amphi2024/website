import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";
import * as React from "react";

const Container = styled.div`
    position: relative;
`;

const SelectButtonElement = styled.button`
    background-color: transparent;
    position: relative;
    cursor: pointer;
`;

const Menu = styled.div`
    position: absolute;
    right: 0;
    top: 35px;
    width: 134px;
    height: 500px;
    overflow-y: scroll;
    background: var(--background-color, white);
    border: 1px solid rgb(203, 213, 224);
    border-radius: 4px;
    box-shadow: 0 2px 5px rgb(0 0 0 / 0.15);
    z-index: 1000;

    @media (prefers-color-scheme: dark) {
        border: 1px solid  rgba(255, 255, 255, 0.3);
    }
`;

const MenuItem = styled.div`
  padding: 6px 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 240);
  }

    @media (prefers-color-scheme: dark) {
        &:hover {
            background-color: rgb(50, 50, 50);
        }
    }
`;


const languages = [
    { value: "ar", label: "العربية" },
    { value: "bn", label: "বাংলা" },
    { value: "cs", label: "Čeština" },
    { value: "da", label: "Dansk" },
    { value: "de", label: "Deutsch" },
    { value: "el", label: "Ελληνικά" },
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fi", label: "Suomi" },
    { value: "fr", label: "Français" },
    { value: "he", label: "עברית" },
    { value: "hi", label: "हिन्दी" },
    { value: "hu", label: "Magyar" },
    { value: "id", label: "Indonesia" },
    { value: "it", label: "Italiano" },
    { value: "ja", label: "日本語" },
    { value: "ko", label: "한국어" },
    { value: "ms", label: "Melayu" },
    { value: "nl", label: "Nederlands" },
    { value: "no", label: "Norsk" },
    { value: "pa", label: "ਪੰਜਾਬੀ" },
    { value: "pl", label: "Polski" },
    { value: "pt", label: "Português" },
    { value: "ro", label: "Română" },
    { value: "ru", label: "Русский" },
    { value: "sv", label: "Svenska" },
    { value: "th", label: "ไทย" },
    { value: "tr", label: "Türkçe" },
    { value: "uk", label: "Українська" },
    { value: "ur", label: "اردو" },
    { value: "vi", label: "Tiếng Việt" },
    { value: "zh", label: "中文" }
];

export function SelectLanguage() {
    const {i18n} = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang).then();
    };
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const listener = (e: MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
        document.body.removeEventListener("click", listener);
    }

    const toggleMenu = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if(!isOpen) {
            setIsOpen(true);
            document.body.addEventListener("click", listener);
        }
        else {
            setIsOpen(false);
        }
    }

    const handleSelect = (index: number) => {
        changeLanguage(languages[index].value);
        setIsOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Container>
            <SelectButtonElement onClick={toggleMenu} aria-haspopup="listbox" aria-expanded={isOpen}>
                <FontAwesomeIcon icon={faLanguage} aria-hidden="true"/>
            </SelectButtonElement>
            {isOpen && (
                <Menu role="listbox">
                    {languages.map((item, index) => (
                        <MenuItem
                            key={item.value || index}
                            role="option"
                            // aria-selected={selectedItem === index}
                            onClick={() => handleSelect(index)}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </Container>
    );
}
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import type {DownloadOption, Platform} from "../store.ts";

const SelectButtonElement = styled.button`
    width: 134px;
    height: 30px;
    border-radius: var(--download-button-border-radius, 4px) !important;
    border: 1px solid rgb(203, 213, 224) !important;
    background-color: transparent;
    position: relative;
    padding: 0 30px 0 10px;
    cursor: pointer;
    text-align: left;
    color: var(--text-color);

    svg {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
    }

    &:hover {
        border-color: rgb(175, 175, 175) !important;
    }

    @media (prefers-color-scheme: dark) {
        border: 1px solid  rgba(255, 255, 255, 0.3) !important;

        &:hover {
            border-color: rgb(110, 110, 110) !important;
        }
    }
`;

const Container = styled.div`
    position: relative;
    width: 134px;
`;

const Menu = styled.div`
    position: absolute;
    left: 0;
    top: 35px;
    width: 134px;
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

export function SelectButton({ items, selectedItem, setSelectedItem}: { items: (DownloadOption | Platform)[], selectedItem: DownloadOption | Platform, setSelectedItem: (index: number) => void}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const handleSelect = (index: number) => {
        setSelectedItem(index);
        setIsOpen(false);
    };

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
        <Container ref={containerRef}>
            <SelectButtonElement onClick={toggleMenu} aria-haspopup="listbox" aria-expanded={isOpen}>
                {selectedItem?.label || "Select"}
                <FontAwesomeIcon icon={faChevronDown} aria-hidden="true"/>
                {/*<i className="fa-solid fa-chevron-down" aria-hidden="true"></i>*/}
            </SelectButtonElement>
            {isOpen && (
                <Menu role="listbox">
                    {items.map((item, index) => (
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
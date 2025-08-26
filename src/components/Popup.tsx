import styled from "styled-components";
import type {ReactNode} from "react";

export default function Popup({ isOpen, onClose, children , width}: { isOpen: boolean, onClose: () => void, children: ReactNode, width?: string }) {

    if (!isOpen) return null;

    const PopupOverlay = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;

    const PopupContent = styled.div`
        background-color: white;
        padding: 20px;
        border-radius: var(--card-border-radius);
        width: 70%;
        max-width: 600px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        position: relative;
        animation: fadeIn 0.3s ease-out;
        display: flex;
        flex-direction: column;
        text-align: center;
    `;

    const PopupCloseButton = styled.button`
        background-color: transparent !important;
        font-size: 20px !important;
        cursor: pointer !important;
        color: var(--highlight-color) !important;
    `;

    const PopupHeader = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: end;
    `;

    return (
        <PopupOverlay onClick={onClose}>
            <PopupContent style={{width: width}} onClick={(e) => e.stopPropagation()}>
                <PopupHeader>
                    <PopupCloseButton className={"popup-close-button"} onClick={onClose}><i
                        className="fa-regular fa-circle-xmark"></i></PopupCloseButton>
                </PopupHeader>
                { children }
            </PopupContent>
        </PopupOverlay>
    );
}
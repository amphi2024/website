import styled from "styled-components";
import type {ReactNode} from "react";

export default function Page({ children }: { children: ReactNode }) {
    const Element = styled.div`
        background-color: var(--background-color);
        padding: 16px;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;

        button {
            background-color: var(--background-color);
            color: var(--highlight-color);
            font-size: 1rem;
            padding: 1rem;
            border-radius: 10px;
            font-weight: bold;

            &:hover {
                color: var(--highlight-color-light);
            }
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
            margin: 15px;
        }

        h3 {
            font-size: 1.25rem;
            margin: 15px;
        }
        
        p {
            max-width: 50vmax;
        }
    `;
    return <Element>{ children }</Element>;
}
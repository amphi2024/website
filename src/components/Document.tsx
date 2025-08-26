import styled from "styled-components";
import type {ReactNode} from "react";

export default function Document({ children }: { children: ReactNode }) {
    const Div = styled.div`
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: start;
        margin-top: var(--header-height);
        
        h1 {
            margin-top: 0;
            margin-bottom: 0;
        }

        h2 {
            padding-left: 0.5rem;
        }
        h3 {
            margin-top: 0;
            margin-bottom: 0;
            padding-left: 1.5rem;
        }

        h4 {
            margin-top: 0;
            margin-bottom: 0;
        }

        p {
            padding-left: 2.5rem;
        }

        a {
            color: var(--text-color);
            padding-left: 3.5rem;
        }
        strong {
            
        }
    `;

    return (
        <Div>
            {children}
        </Div>
    );
}
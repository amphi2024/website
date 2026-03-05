import {Link, useLocation} from "react-router-dom";
import styled, {css} from "styled-components";
import {useTranslation} from "react-i18next";
import {type CSSProperties, type ReactNode, useEffect, useRef, useState} from "react";

export const AppPreview = styled.img`
    height: 55vmin;
    object-fit: contain;
`;

export const HomePage = styled.div`
  scroll-behavior: smooth;
         background-color: var(--background-color);
         text-align: center;
         justify-content: center;
         display: flex;
         align-items: center;
         flex-direction: column;
`;

export const StyledSection = styled.section<{revealed: boolean}>`
    //  height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: opacity 0.6s ease, transform 0.6s ease;
    opacity: 0;
    transform: translateY(40px);

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 2.5em;
    }

    h3 {
        font-size: 1.75em;
    }

    p {
        font-size: 25px;
    }

    button {
        background-color: var(--highlight-color);
        color: var(--button-text-color);
        font-size: 20px;
        border-radius: 10px;
        padding: 10px 25px;

        transition: background-color 0.3s ease;

        &:hover {
            background-color: var(--highlight-color-light);
        }
    }
    
    @media (max-width: 768px) {
        h1 {
            font-size: 2.5em;
        }

        h2 {
            font-size: 2em;
        }

        h3 {
            font-size: 1.5em;
        }

        p {
            font-size: 25px;
        }
    }


    ${({revealed}) =>
            revealed &&
            css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const AppButton = styled.img`
    width: 65px;
    cursor: pointer;
    padding: 8px;
`;


const HomePageSection = ({ children, style }: {children: ReactNode, style?: CSSProperties}) => {
    const {t} = useTranslation("home");
    const location = useLocation();
    const ref = useRef(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [location, t]);

    return (
        <StyledSection ref={ref} revealed={revealed} style={style}>
            { children }
        </StyledSection>
    );
};

const MainPreview = styled.img`
    height: 50vh;
    object-fit: contain;
    padding-bottom: 15px;

    @media (max-width: 768px) {
        height: 40vh;
    }
`;

const HomePageImage = styled.img`
    height: 60vh;
    object-fit: contain;
    
    @media (max-width: 1000px) {
       width: 80vw;
    }
`

function Home() {
    const {t} = useTranslation("home");

    const location = useLocation();
    useEffect(() => {
        document.title = t('title');
    }, [location, t]);

    const bottomRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HomePage>
            <HomePageSection style={{height: "100vh"}}>
                <h1 style={{paddingTop: "var(--header-height)"}}>
                    {t("hero.title")}
                </h1>

                <p>
                    {t("hero.subtitle")}
                </p>

                <MainPreview src={"/images/homepage-banner.png"} alt="hompage banner" />

                <div>
                    <button onClick={scrollToBottom}>
                        {t("startNow")}
                    </button>
                </div>
            </HomePageSection>
            <HomePageSection style={{backgroundColor: "var(--card-background-color)"}}>
                <h2>
                    {t("setup.title")}
                </h2>

                <p>
                    {t("setup.subtitle")}
                </p>

                <HomePageCardGrid>
                    <HomePageCard>
                        <h3>
                            {t("setup.features.noDeps.title")}
                        </h3>
                        <p>
                            {t("setup.features.noDeps.description")}
                        </p>
                    </HomePageCard>

                    <HomePageCard>
                        <h3>
                            {t("setup.features.builtInDb.title")}
                        </h3>
                        <p>
                            {t("setup.features.builtInDb.description")}
                        </p>
                    </HomePageCard>

                    <HomePageCard>
                        <h3>
                            {t("setup.features.crossPlatform.title")}
                        </h3>
                        <p>
                            {t("setup.features.crossPlatform.description")}
                        </p>
                    </HomePageCard>

                    <HomePageCard>
                        <h3>
                            {t("setup.features.simpleConfig.title")}
                        </h3>
                        <p>
                            {t("setup.features.simpleConfig.description")}
                        </p>
                    </HomePageCard>

                    <HomePageCard>
                        <h3>
                            {t("setup.features.clean.title")}
                        </h3>
                        <p>
                            {t("setup.features.clean.description")}
                        </p>
                    </HomePageCard>

                    <HomePageCard>
                        <h3>
                            {t("setup.features.quickStart.title")}
                        </h3>
                        <p>
                            {t("setup.features.quickStart.description")}
                        </p>
                    </HomePageCard>
                </HomePageCardGrid>

            </HomePageSection>

            <HomePageSection style={{height: "100vh"}}>
                <h2>
                    {t("design.title")}
                </h2>

                <p>
                    {t("design.subtitle")}
                </p>

                <HomePageImage src={"/images/homepage.webp"} alt="homepage banner" />

            </HomePageSection>

            <HomePageSection >
                <h2 ref={bottomRef}>
                    {t("sync.title")}
                </h2>

                <p>
                    {t("sync.subtitle")}
                </p>

                <Link to={"/server"}>
                    <button>
                        {t("setupServer")}
                    </button>
                </Link>

                <h3>
                    {t("downloadApps")}
                </h3>


                <div style={{
                    gap: "10px",
                }}>
                    <Link to={"/notes"}>
                        <AppButton src={"/images/notes-logo.png"} alt={"notes"}/>
                    </Link>
                    <Link to={"/music"}>
                        <AppButton src={"/images/music-logo.png"} alt={"music"}/>
                    </Link>
                    <Link to={"/photos"}>
                        <AppButton src={"/images/photos-logo.png"} alt={"photos"}/>
                    </Link>
                    <Link to={"/cloud"}>
                        <AppButton src={"/images/cloud-logo.png"} alt={"cloud"}/>
                    </Link>
                </div>

            </HomePageSection>

        </HomePage>
    );
}

const HomePageCardGrid = styled.div`
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
    gap: 20px;
    padding-bottom: 50px;
    
    @media (max-width: 768px) {
        width: 100%;
        grid-template-columns: 1fr;
    }
`

const HomePageCard = styled.div`
    background-color: var(--background-color);
    border-radius: var(--card-border-radius);
    padding: 10px;
    
    h3 {
        font-size: 20px;
    }
    
    p {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        margin: 15px;
    }
`

export default Home;
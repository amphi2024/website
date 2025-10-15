import Header from "./components/Header.tsx";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Privacy from "./pages/Privacy.tsx";
import PrivacyPolicyArchive from "./pages/archives/PrivacyPolicyArchive.tsx";
import ServerPage from "./pages/ServerPage.tsx";
import Terms from "./pages/Terms.tsx";
import styled from "styled-components";
import TermsArchive from "./pages/archives/TermsArchive.tsx";
import NotesPage from "./pages/apps/NotesPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import {useEffect, useRef} from "react";
import i18n from "i18next";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useStore} from "./store";
import MusicPage from "./pages/apps/MusicPage.tsx";
import PhotosPage from "./pages/apps/PhotosPage.tsx";
import {ImproveTranslationsButton, ReturnButton} from "./components/PageFooterControls.tsx";
import CloudPage from "./pages/apps/CloudPage.tsx";

const Container = styled.div`
    
        background-color: var(--background-color);

        img {
            object-fit: contain;
        }

        button {
            border: none;
            outline: none;
            cursor: pointer;
        }

        a {
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    `;

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 페이지 전환 시 스크롤 맨 위로 이동
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {

    const location = useLocation();
    const {setSelectedPlatform} = useStore();
    // const nodeRef = useRef(null);
    const nodeRef = useRef(null);


    useEffect(() => {

        const browserLang = navigator.language.split("-")[0]; // 예: "en-US" → "en"
        const supportedLangs = [
            "ar", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "he",
            "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pa", "pl",
            "pt", "ro", "ru", "sv", "th", "tr", "uk", "ur", "vi", "zh"
        ];

        if (supportedLangs.includes(browserLang)) {
            i18n.changeLanguage(browserLang).then();
        } else {
            i18n.changeLanguage("en").then();
        }

        const userAgent = navigator.userAgent;

        // Check for different OS patterns in userAgent
        if (/Windows NT/i.test(userAgent)) {
            setSelectedPlatform({label: "Windows", value: "windows"});
        } else if (/Mac OS X/i.test(userAgent) && !/iPhone|iPad|iPod/i.test(userAgent)) {
            setSelectedPlatform({label: "macOS", value: "macos"});
        } else if (/Linux/i.test(userAgent) && !/Android/i.test(userAgent)) {
            setSelectedPlatform({label: "Linux", value: "linux"});
        } else if (/Android/i.test(userAgent)) {
            setSelectedPlatform({label: "Android", value: "android"});
        } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
            setSelectedPlatform({label: "iOS", value: "ios"});
        } else {
            setSelectedPlatform({label: "Windows", value: "windows"});
        }
    }, []);

    return (
        <>
            <ScrollToTop />
            <Container>
                <SwitchTransition >
                    <CSSTransition
                        key={location.pathname}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                        nodeRef={nodeRef}
                    >
                        <div ref={nodeRef}>
                            <Routes location={location}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/notes" element={<NotesPage/>}/>
                                <Route path="/music" element={<MusicPage/>}/>
                                <Route path="/photos" element={<PhotosPage/>}/>
                                <Route path="/cloud" element={<CloudPage/>}/>
                                <Route path="/server" element={<ServerPage/>}/>
                                <Route path="/privacy" element={<Privacy/>}/>
                                <Route path="/terms" element={<Terms/>}/>
                                <Route path="/archive/servers" element={<Navigate to="/server" replace />} />
                                <Route path="/archive/privacy" element={<PrivacyPolicyArchive/>}/>
                                <Route path="/archive/terms" element={<TermsArchive/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </div>
                    </CSSTransition>
                </SwitchTransition >
                <ReturnButton/>
                <ImproveTranslationsButton/>
                <Header/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;

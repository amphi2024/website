import styled from "styled-components";
import {SelectLanguage} from "./SelectLanguage.tsx";

const Header = () => {

    // const DonateImageButton = styled.img`
    //     width: 80%;
    //     max-height: 60px;
    //     margin: 8px;
    //     cursor: pointer;
    // `;
    const AppHeader = styled.header`
        justify-content: end;
        align-items: center;
        padding: 10px;
        height: var(--header-height);
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 0;
        right: 0;

        button {
            font-size: 18px;
            text-decoration: none;
            color: var(--text-color);
            font-weight: bold;
            background-color: transparent;
            padding: 8px;
            //border-radius: 10px;
            border-radius: 30px;
        }

        button:hover {
            background-color: rgba(125, 125, 125, 0.2);
            text-decoration: none;
        }

        select {
            outline: none;
            border: none;
            background: none;
            color: var(--text-color);
            -webkit-appearance: none;
            appearance: none;
            padding-left: 15px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
    `;
    // const [isPopupOpened, setPopupOpen] = useState(false);

    return (
        <AppHeader>

            {/*<button onClick={() => {*/}

            {/*}}>*/}
            {/*    {t("apps")}*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}

            {/*}}>*/}
            {/*    {t("games")}*/}
            {/*</button>*/}

            {/*<button onClick={() => {*/}
            {/*    setPopupOpen(true);*/}
            {/*}}>*/}
            {/*    {t("donate")}*/}
            {/*</button>*/}

            {/*<select value={i18n.language} onChange={(event) => {*/}
            {/*    changeLanguage(event.target.value);*/}
            {/*}}>*/}
            {/*    <option value={"ar"}>العربية</option>*/}
            {/*    <option value={"bn"}>বাংলা</option>*/}
            {/*    <option value={"cs"}>Čeština</option>*/}
            {/*    <option value={"da"}>Dansk</option>*/}
            {/*    <option value={"de"}>Deutsch</option>*/}
            {/*    <option value={"el"}>Ελληνικά</option>*/}
            {/*    <option value={"en"}>English</option>*/}
            {/*    <option value={"es"}>Español</option>*/}
            {/*    <option value={"fi"}>Suomi</option>*/}
            {/*    <option value={"fr"}>Français</option>*/}
            {/*    <option value={"he"}>עברית</option>*/}
            {/*    <option value={"hi"}>हिन्दी</option>*/}
            {/*    <option value={"hu"}>Magyar</option>*/}
            {/*    <option value={"id"}>Indonesia</option>*/}
            {/*    <option value={"it"}>Italiano</option>*/}
            {/*    <option value={"ja"}>日本語</option>*/}
            {/*    <option value={"ko"}>한국어</option>*/}
            {/*    <option value={"ms"}>Melayu</option>*/}
            {/*    <option value={"nl"}>Nederlands</option>*/}
            {/*    <option value={"no"}>Norsk</option>*/}
            {/*    <option value={"pa"}>ਪੰਜਾਬੀ</option>*/}
            {/*    <option value={"pl"}>Polski</option>*/}
            {/*    <option value={"pt"}>Português</option>*/}
            {/*    <option value={"ro"}>Română</option>*/}
            {/*    <option value={"ru"}>Русский</option>*/}
            {/*    <option value={"sv"}>Svenska</option>*/}
            {/*    <option value={"th"}>ไทย</option>*/}
            {/*    <option value={"tr"}>Türkçe</option>*/}
            {/*    <option value={"uk"}>Українська</option>*/}
            {/*    <option value={"ur"}>اردو</option>*/}
            {/*    <option value={"vi"}>Tiếng Việt</option>*/}
            {/*    <option value={"zh"}>中文</option>*/}
            {/*</select>*/}

            <SelectLanguage/>

            {/*<Popup isOpen={isPopupOpened} onClose={() => setPopupOpen(false)}>*/}

            {/*    <a href={"https://ko-fi.com/amphi2024"} target={"_blank"} rel="noopener noreferrer">*/}
            {/*        <DonateImageButton src={kofiButton} alt={"ko-fi"}/>*/}
            {/*    </a>*/}

            {/*    <a href={"https://buymeacoffee.com/amphiprionn"} target={"_blank"} rel="noopener noreferrer">*/}
            {/*        <DonateImageButton src={bmcButton} alt={"ko-fi"}/>*/}
            {/*    </a>*/}

            {/*</Popup>*/}

        </AppHeader>
    );
};

export default Header;

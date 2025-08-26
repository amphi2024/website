import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Document from "../components/Document.tsx";

export default function Privacy() {

    const [t] = useTranslation();

    useEffect(() => {
        document.title = t("privacyPolicy");
    }, [t]);

    return (
        <Document>
            <h1>Privacy Policy</h1>
            <h5>
                July 25, 2025
            </h5>

            <h4>
                This page introduces our Privacy Policy. We recommend reviewing the Privacy Policy before using our services.
            </h4>

            <h2>Personal Data Collection and Use</h2>

            <p>
                These applications are open source, designed with a strong commitment to user privacy.<br></br>All data
                remains entirely under your control. We do not collect, store, or process any personal data while you use these applications. All data is stored locally on your device or on your self-hosted server. We have no access to your data and do not store it
                on any of our servers.
            </p>

            <h2>
                Cookies
            </h2>

            <p>
                This website does not store cookies, and none of our other services use cookies either.
            </p>

            <h2>
                Security
            </h2>

            <p>
                These apps do not collect user information and are committed to protecting your data. However, we believe that no software can be 100% secure, and we recommend taking additional security measures to protect against potential risks.
            </p>
            <h2>
                Third-Party Data Collection
            </h2>

            <p>
                We use various libraries to build our services. While none of the libraries we use are intended to collect data, there is a risk that developers or hackers may introduce malicious code into these libraries to collect data. Please understand that it is difficult for us to thoroughly review all of these risks. and aware that the operating system or manufacturer of the device you are using may collect data.
            </p>

            <h2>
                Changes to this Privacy Policy
            </h2>

            <p>
                Our Privacy Policy may be updated from time to time. If any changes are made, we will archive previous versions of the Privacy Policy to ensure you can review and compare the changes.
            </p>

            <Link to={"/archive/privacy"}>Previous Privacy Policies -{">"}</Link>

            <h2>
                Contact us
            </h2>
            <p>
                If you have any questions about this Privacy Policy, You can contact us at the following email:
                amphiprioninae2024@gmail.com
            </p>
        </Document>
    );
}
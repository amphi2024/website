import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import Document from "../components/Document.tsx";
import {Link} from "react-router-dom";

export default function Terms() {
    const [t] = useTranslation();

    useEffect(() => {
        document.title = t("termsAndCondition");
    }, [t]);

    return (
        <Document>
            <h1>Terms of Service</h1>
            <h5>
                January 10, 2025
            </h5>

            <h2>Introduction</h2>
            <p>These Terms govern your use of the Services, including any apps, games, and websites we provide. Our
                Services are designed with a strong commitment to user privacy, and we prioritize your control over your
                data.</p>

            <h2>Definitions</h2>
            <ul>
                <li><strong>Services:</strong> All apps, games, and websites provided by us.</li>
                <li><strong>User:</strong> Any individual who agrees to these Terms and uses the Services.</li>
                <li><strong>Account:</strong> The user-specific credentials required to access certain features of the
                    Services.
                </li>
            </ul>

            <h2>User Registration and Account</h2>
            <h3>Eligibility</h3>
            <p>You must be at least 10 years old to use our Services. Users under the age of 10 are not permitted to use
                the Services. By using the Services, you represent and warrant that you meet this age requirement. We
                are not responsible for any issues arising from the use of our Services by users under 10 years old.</p>

            <h3>Account Creation</h3>
            <p>Currently, we do not require API accounts or app accounts for any of our Services. Future updates may
                include features requiring accounts, and we will notify users of any data collection practices at that
                time.</p>

            <h2>Use of Services</h2>
            <h3>General Use</h3>
            <p>You may use the Services for lawful purposes only. You agree not to engage in activities that could harm,
                disable, or disrupt the Services or interfere with other users’ enjoyment of the Services.</p>

            <h3>Data Collection</h3>
            <p>We do not collect, store, or process personal data while you use the Services. All data remains on your
                device or self-hosted server. For third-party APIs (e.g., music services), refer to their privacy
                policies
                for data collection practices.</p>

            <h2>Backup and Data Recovery</h2>
            <p>We are not liable for any data loss. You are responsible for maintaining backups of your data. While we
                continuously improve user interface features to make backup and recovery easier, ensuring the security
                of your data is ultimately your responsibility.</p>

            <h2>Privacy Policy</h2>
            <p>We are committed to protecting your privacy. For detailed information about how we handle your personal
                data, please refer to our Privacy Policy</p>

            <h2>Security</h2>
            <p>We recommend taking additional measures to secure your device and data. While we strive to provide secure
                software, we cannot guarantee 100% security as no system is completely secure. Note that operating
                systems
                or device manufacturers may collect data independently of our Services.</p>

            <h2>Third-Party Libraries and Data Collection</h2>
            <p>We use third-party libraries and frameworks to build our Services. These are not intended to collect
                data,
                but we cannot guarantee they are free of vulnerabilities. Please check your device settings for privacy
                options.</p>

            <h2>Dispute Resolution</h2>
            <p>If issues arise, we encourage users to contact us via email at <u>amphiprioninae2024@gmail.com</u> before
                pursuing legal action. Informal resolution attempts help us address concerns promptly and efficiently.
                <br></br>However, due to our small team size, we may not be able to provide a quick response or
                immediate
                resolution. We appreciate your patience and understanding as we strive to resolve your concerns as
                quickly as possible. Please note that if we assess that the issue can be resolved by the user
                independently, we may not provide a response. Rest assured, this is not an intention to neglect any
                issues, but rather a reflection of our team's capacity and efforts to prioritize where we can be most
                helpful.
            </p>


            <h2>Governing Law</h2>
            <p>These Terms are governed by the laws of South Korea. Disputes will be resolved through binding
                arbitration
                in Seoul, South Korea, under South Korean law.</p>

            <h2>Changes to Terms of Service</h2>
            <p>
                Our Terms of Service may be updated from time to time. If any changes are made, we will archive previous
                versions of the Terms of Service to ensure you can review and compare the changes.
            </p>

            <Link to={"/archive/terms"}>Previous Terms of Service -{">"}</Link>

            <h2>Termination</h2>
            <p>We may suspend or terminate your access to the Services if you violate these Terms. Users can terminate
                their use by uninstalling apps or discontinuing use of our website.</p>

            <h2>Disclaimers and Limitations of Liability</h2>
            <p>Our Services are provided "as-is" without warranties. We are not liable for indirect, incidental, or
                consequential damages arising from the use of our Services. Use of our Services is at your own risk.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Terms of Service, You can contact us at the following email:
                amphiprioninae2024@gmail.com</p>

        </Document>
    )
        ;
}
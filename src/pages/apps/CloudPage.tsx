// import {Section, SectionTexts} from "../Home.tsx";
// import React, {useState} from "react";
// import {useTranslation} from "react-i18next";
// import styled from "styled-components";
// import {DownloadButtonGroup, SelectOs} from "../../components/AppDownload.tsx";
//
// export default function CloudPage({osIndex}) {
//
//     const [t] = useTranslation();
//     const [index, setIndex] = useState(osIndex);
//
//     const fragments = [
//             (
//                 <DownloadButtonGroup>
//                     Upcoming
//                 </DownloadButtonGroup>
//             ),
//             (
//                 <DownloadButtonGroup>
//                     Upcoming
//                 </DownloadButtonGroup>
//             ),
//             (
//                 <DownloadButtonGroup>
//                     Upcoming
//                 </DownloadButtonGroup>
//             ),
//             (
//                 <DownloadButtonGroup>
//                     Upcoming
//                 </DownloadButtonGroup>
//             ),
//             (
//                 <DownloadButtonGroup>
//                     Upcoming
//                 </DownloadButtonGroup>
//             )
//         ]
//     ;
//
//     return (
//         <Section>
//
//             <SectionTexts>
//
//                 <h2>
//                     {t("cloudAppName")}
//                 </h2>
//
//                 <SelectOs>
//                     <button onClick={() => setIndex(0)}>
//                         <i className="fa-brands fa-windows"
//                            style={{color: index === 0 ? "var(--highlight-color)" : null}}></i>
//                     </button>
//                     <button onClick={() => setIndex(1)}>
//                         <i className="fa-brands fa-apple"
//                            style={{color: index === 1 ? "var(--highlight-color)" : null}}></i>
//                     </button>
//                     <button onClick={() => setIndex(2)}>
//                         <i className="fa-brands fa-linux"
//                            style={{color: index === 2 ? "var(--highlight-color)" : null}}></i>
//                     </button>
//                     <button onClick={() => setIndex(3)}>
//                         <i className="fa-brands fa-android"
//                            style={{color: index === 3 ? "var(--highlight-color)" : null}}></i>
//                     </button>
//                     <button onClick={() => setIndex(4)}>
//                         <i className="fa-brands fa-apple"
//                            style={{color: index === 4 ? "var(--highlight-color)" : null}}></i>
//                     </button>
//                 </SelectOs>
//
//                 {fragments[index]}
//
//             </SectionTexts>
//
//         </Section>
//     );
// }
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import {Helmet} from 'react-helmet-async';
import {useState} from "react";

const Card = styled.div`
    border-radius: var(--card-border-radius);
    background-color: var(--background-color);
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;

    p {
        font-size: 16px;
    }
`;

const Price = styled.div`
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    
    span {
        font-size: 14px;
        font-weight: normal;
    }
`;
const Grid = styled.div`
    width: 100%;
    min-height: 450px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
    gap: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: var(--card-background-color);
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: var(--header-height);

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1em;
    }

    h3 {
        font-size: 1.5em;
    }

`;

const StyledButton = styled.button`
    background-color: var(--highlight-color);
    color: var(--button-text-color);
    font-size: 18px;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    font-weight: bold;

    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--highlight-color-light);
    }
`;

const Lines = styled.ul`
    padding-left: 0;
    padding-right: 0;
    padding-top: 50px;
    list-style: none;

    li {
    }
`;

const ToggleContainer = styled.div`
  display: flex;
  position: relative;
  width: 240px;
  height: 40px;
  background: var(--card-background-color);
  border-radius: 20px;
  margin: 20px auto 40px;
  cursor: pointer;
  padding: 4px;
`;

const ToggleOption = styled.div<{ active: boolean }>`
  flex: 1;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.active ? 'var(--text-color)' : '#868e96')};
  transition: color 0.2s ease;

  span {
    margin-left: 4px;
    font-size: 10px;
    color: var(--highlight-color);
  }
`;

const SlidingBg = styled.div<{ isYearly: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: var(--background-color);
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  transform: ${props => (props.isYearly ? 'translateX(100%)' : 'translateX(0)')};
`;

export function Pricing() {

    const {t} = useTranslation();
    const [isYearly, setIsYearly] = useState(false);


    return (
        <>
            <Helmet>
                <title>{t('pricing')}</title>
            </Helmet>
            <Container>
                <h1>
                    Don't want the hassle of setting up a server?
                </h1>
                {/*<h2>*/}
                {/*    We are here to help. Unlock your ecosystem and enjoy*/}
                {/*</h2>*/}
                <h2>We're preparing something great. Join the waitlist for early access.</h2>

                <ToggleContainer onClick={() => setIsYearly(!isYearly)}>
                    <ToggleOption active={!isYearly}>Monthly</ToggleOption>
                    <ToggleOption active={isYearly}>
                        Yearly <span>-20%</span>
                    </ToggleOption>
                    {/* 슬라이딩 배경 */}
                    <SlidingBg isYearly={isYearly} />
                </ToggleContainer>

                <Grid>
                    <Card>

                        <h3>
                            Clownfish
                        </h3>

                        <p>
                            For syncing texts and small images
                        </p>

                        <Price>
                            $0
                            <span>
                                /month
                            </span>
                        </Price>

                        <StyledButton onClick={() => {
                            // window.open("https://amphi2024.lemonsqueezy.com/checkout/buy/98fe7f37-edbb-4684-901e-825e5410636a", "_blank");
                            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6mrlTGEVz3E18APKOZXIJu44pkkINfRaHvOfq_Zfub7HWyw/viewform?usp=publish-editor", "_blank");
                        }}>
                            Join Waitlist
                        </StyledButton>

                        <Lines>
                            <li>10GB Storage</li>
                            <li>500GB Monthly Transfer</li>
                        </Lines>

                    </Card>

                    <Card>

                        <h3>
                            Dolphin
                        </h3>

                        <p>
                            For syncing texts, images, and small videos
                        </p>

                        <Price>
                            {isYearly ? "$4" : "$5"}
                            <span>
                                /month
                            </span>
                        </Price>

                        <StyledButton onClick={() => {
                            // window.open("https://amphi2024.lemonsqueezy.com/checkout/buy/98fe7f37-edbb-4684-901e-825e5410636a", "_blank");
                            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6mrlTGEVz3E18APKOZXIJu44pkkINfRaHvOfq_Zfub7HWyw/viewform?usp=publish-editor", "_blank");
                        }}>
                            Join Waitlist
                        </StyledButton>

                        <Lines>
                            <li>50GB Storage</li>
                            <li>1TB Monthly Transfer</li>
                        </Lines>

                    </Card>

                    <Card>

                        <h3>
                            Whale
                        </h3>

                        <p>
                            For syncing texts, images, and videos
                        </p>

                        <Price>
                            {isYearly ? "$8" : "$10"}
                            <span>
                                /month
                            </span>
                        </Price>

                        <StyledButton onClick={() => {
                            // window.open("https://amphi2024.lemonsqueezy.com/checkout/buy/98fe7f37-edbb-4684-901e-825e5410636a", "_blank");
                            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6mrlTGEVz3E18APKOZXIJu44pkkINfRaHvOfq_Zfub7HWyw/viewform?usp=publish-editor", "_blank");
                        }}>
                            Join Waitlist
                        </StyledButton>


                        <Lines>
                            <li>512GB Storage</li>
                            <li>2TB Monthly Transfer</li>
                        </Lines>

                    </Card>

                    <Card>

                        <h3>
                            Leviathan
                        </h3>

                        <p>
                            For syncing texts, images, and large videos
                        </p>

                        <Price>
                            {isYearly ? "$20" : "$25"}
                            <span>
                                /month
                            </span>
                        </Price>

                        <StyledButton onClick={() => {
                            // window.open("https://amphi2024.lemonsqueezy.com/checkout/buy/98fe7f37-edbb-4684-901e-825e5410636a", "_blank");
                            window.open("https://docs.google.com/forms/d/e/1FAIpQLSd6mrlTGEVz3E18APKOZXIJu44pkkINfRaHvOfq_Zfub7HWyw/viewform?usp=publish-editor", "_blank");
                        }}>
                            Join Waitlist
                        </StyledButton>


                        <Lines>
                            <li>2TB Storage</li>
                            <li>10TB Monthly Transfer</li>
                        </Lines>

                    </Card>
                </Grid>
            </Container>
        </>
    );
}
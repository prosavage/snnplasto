import styled from "styled-components";
import PropsTheme from "../../../styles/theme/PropsTheme";
import { Button } from "../../ui/Button";
import Image from "next/image";

function Header() {
  return (
    <>
      <Wrapper>
        <Text>
          <h1>
            <HeroTextGreen>RECYCLED</HeroTextGreen> <br /> PLASTICS
          </h1>
          <SubText>
            Your partner in RPET and other cool stuff & PET Flake
            delivery.
          </SubText>
          <HeroButton>
            <h2>Contact Us</h2>
          </HeroButton>
        </Text>
        <HeroImage src={"/img/hero/hero.svg"} width={400} height={400} />
      </Wrapper>
    </>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5em;
  max-width: 1280px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 700px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const HeroTextGreen = styled.span`
  color: ${(props: PropsTheme) => props.theme.accentColor};
`;

const SubText = styled.h2`
  margin-top: 25px;
  color: #9a8e8e;
  max-width: 350px;
  text-align: center;
`;

const HeroButton = styled(Button)`
  margin: 25px 0;
  max-width: 250px;
`;

const HeroImage = styled.img`
  @media (max-width: 1000px) {
    display: none;
  }
`;


import Head from "next/head";
import styled from "styled-components";
import ContactUs from "../components/pages/contact-us/ContactUs";
import Header from "../components/pages/home/Header";
import LearnMore from "../components/pages/learn-more/LearnMore";
export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Wave src={"/img/hero/bottomwave.svg"} />
      <LearnMore />
      <ContactUs />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wave = styled.img`
  width: 100%;
`;

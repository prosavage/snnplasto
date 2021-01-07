import styled from "styled-components";
import Product from "./Product";

function LearnMore() {
  return (
    <Wrapper id={"learn-more"}>
      <Content>
        <Product title={"Post Consumer Recycled PET"} description={"rPET flakes & Pellets"} image={"/img/learn-more/product.jpg"} />
        <Product title={"Other Polymers"} description={"Recycled PP, LDPE"} image={"/img/learn-more/other-polymers.jpg"} />
        <Product title={"Services"} description={""} image={"/img/learn-more/services.gif"} />
      </Content>
      <Wave2 src="/img/learn-more/wave2.svg" alt="" />
    </Wrapper>
  );
}

export default LearnMore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg, #6ac65e -8.6%, #afd986 107.17%);
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Wave2 = styled.img`
  width: 100%;
`;

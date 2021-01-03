import styled from "styled-components";

function Product() {
    return <Wrapper>
        <Picture>
            <Image src={"/img/learn-more/product.jpg"}/>
        </Picture>
        <Seperator/>
        <Text>
            <h2>Recycled PET</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </Text>
    </Wrapper>
}

export default Product;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;;
    background: white;
    width: 325px;
    min-height: 450px;
    border-radius: 15px;
    border: 2px solid black;
    overflow: hidden;
    margin: 1em 0;
`

const Picture = styled.div`
    flex-basis: 35%;
`

const Text = styled.div`
    flex-basis: 65%;
    padding: 1em;
`

const Seperator = styled.hr`
    height: 2px;
    background: black;
    border: none;
`

const Image = styled.img`
    object-fit: cover;
    width: 325px;
    height: 175px;
`
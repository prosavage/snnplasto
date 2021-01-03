import styled from "styled-components";
import { Button } from "../../ui/Button";

function ContactUs() {
  return (
    <Wrapper>
      <h1>CONTACT US</h1>
      <Form>
        <Content>
          <BioData>
            <InputContainer>
              <label>Email</label>
              <input
                type="email"
                title={"email"}
                placeholder={"example@email.com"}
              />
            </InputContainer>
            <FullName>
              <NameInputContainer>
                <label>First Name</label>
                <input
                  type="text"
                  title={"first name"}
                  placeholder={"first name"}
                />
              </NameInputContainer>
              <NameInputContainer>
                <label>Last Name</label>
                <input
                  type="text"
                  title={"last name"}
                  placeholder={"last name"}
                />
              </NameInputContainer>
            </FullName>
            <InputContainer>
              <label>Phone Number</label>
              <input
                type="tel"
                title={"Phone Number"}
                placeholder={"Phone Number"}
              />
            </InputContainer>

            <SelectorContainer>
              <label>Industry</label>
              <select name={"industry"}>
                <option>PET</option>
                <option>Option One</option>
                <option>Option One</option>
                <option>Option One</option>
              </select>
            </SelectorContainer>
          </BioData>
          <Message placeholder={"message"} />
        </Content>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
}

export default ContactUs;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3em 0;
  width: 100%;
  align-items: center;
  max-width: 1280px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin: 3em;

  @media(max-width: 1000px) {
      flex-direction: column;
      max-width: 500px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1em 0.5em;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FullName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
`;

const BioData = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 35%;
  margin: 0 0.5em;
`;

const Message = styled.textarea`
  flex-basis: 40%;
  margin: 0 0.5em;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectorContainer = styled(InputContainer)`
  margin: 1em 0;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  max-width: 300px;
`;

const NameInputContainer = styled(InputContainer)`
    width: 48%;
`
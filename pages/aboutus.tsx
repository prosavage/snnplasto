import styled from "styled-components";

export default function AboutUs(props) {
  return (
    <Wrapper>
      <div>
        <h2>About Us</h2>
      </div>
      <p>
        The main objective of SNN Plastotrade is to offer its customers an easy
        access to competitive <strong>plastic raw material</strong> sources,
        irrespective of where in the world they are located and also provide
        hand holding support during every step of the buying process.
      </p>
      <div>
        <p>
          <strong>SNNP</strong> is run by a team of professionals with extensive
          experience in plastic raw material industries across the globe. The
          team comprises of professionals having worked for many years with
          prominent industry players in the field of Polymers & Textiles
        </p>
      </div>
      <div>
        <p>
          <strong>SNNP</strong> is active in the following business sectors:
        </p>
        <ul>
          <li>PET Resisns (Bottle Grade, Film, & Textile Grades)</li>
          <li>
            RPET Flakes for various industries which include high end Sheet to
            fiber applications
          </li>
          <li>
            Polyester Textiles (Textile & Fiber Grade Chips, Fibers, POY, DTY)
          </li>
          <li>Polyolefin (PP, PE, PVC & PS) - Recycled and Virgin</li>
        </ul>
      </div>
      <div>
        <p>
          Consulting services for bottle to bottle projects are on of our prime
          areas.
        </p>
      </div>
      <div>
        <p>
          <strong>SNNP</strong> has already made inroads with good share of
          import flows in various countries across the globe, mainly in Europe,
          Middle East, North Africa & India.
        </p>
      </div>
      <div>
        <p>
          A strong network of international suppliers allow SNNP to secure a
          continuous flow of products with supply commitments to major users all
          around the world.
        </p>
      </div>

      <div>
        <h2> Business Consulting Services:</h2>
      </div>
      <div>
        <p>
          We have expertise & commissioned few food grade RPET plants in Middle
          East & Africa. Self has established Food grade products to EU & NA.
        </p>
      </div>
      <div>
        <p>
          We provide complete consulting services in Plastics recycling sector
          which includes feasibility till final completion of Project.
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  justify-content: center;
  max-width: 1000px;
  div {
    margin: 0.5em 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  
`;

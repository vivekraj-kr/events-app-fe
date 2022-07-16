import styled from "styled-components";

const StyledShowcase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  color: #7c8890;
  background-image: url("/images/events-banner.jpeg");
  background-size: cover;
  background-position: top right;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const StyledText = styled.div`
  width: 50%;
  line-height: 30px;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Showcase = () => {
  return (
    <StyledShowcase>
      <StyledText>
        <h1>Welcome to design system events</h1>
        <p>
          design systems conference focused on how we work together. We provide
          tools and standards to scale across an increasing number of devices,
          platforms, and products. But real success comes when people align
          around a shared vision and language. Diverse perspectives for design,
          development, and product unite so more people can be a part of the
          conversation.
        </p>
      </StyledText>
    </StyledShowcase>
  );
};

export default Showcase;

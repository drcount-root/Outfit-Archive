import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 9px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.719);
  opacity: 0.8;
  position: absolute;
  border-radius: 9px;
  backdrop-filter: blur(14px);

  h2 {
    font-weight: bold;
    margin: 10px 6px 0;
    font-size: 26px;
    color: #000000;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    color: rgb(0, 0, 0);
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    border-radius: 9px;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.6;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

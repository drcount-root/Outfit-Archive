import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  background-color: rgba(239, 239, 239, 0.275);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(9px);
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 40px;
  border-radius: 4px;
`;

export const LogoText = styled.p`
  font-family: "Dancing Script", cursive;
  font-weight: 400;
  font-size: 2.7rem;

  &:hover {
    color: rgb(202, 55, 22);
    transition: 0.5s;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Dancing Script", cursive;
  font-weight: bold;

  &:hover {
    color: rgb(202, 55, 22);
    transition: 0.5s;
  }
`;

/* Converting Scss to Styled Component */

/*

.navigation {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  background-color: rgb(239, 239, 239);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  position: sticky;
  top: 0;
  z-index: 1;

  .logo-container {
    height: 100%;
    // width: 70px;
    padding: 15px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .logo-container img {
    width: 40px;
    border-radius: 4px;
  }

  .logo-container p {
    font-family: "Dancing Script", cursive;
    font-weight: 400;
    font-size: 2.7rem;
  }

  .logo-container p:hover {
    color: rgb(202, 55, 22);
    transition: 0.5s;
  }

  .nav-links-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .nav-link {
      padding: 10px 15px;
      cursor: pointer;
      font-family: "Dancing Script", cursive;
      font-weight: bold;
    }

    .nav-link:hover {
      color: rgb(202, 55, 22);
      transition: 0.5s;
    }

    .darkmode {
      background-color: #1a1a1a;
      border-radius: 25px;
      border: 1px solid black;
      padding: 3px;
    }

    .lightmode {
      background-color: #fff;
      border-radius: 25px;
      border: 1px solid rgb(255, 255, 255);
      padding: 3px;
    }
  }
}

.navAtDarkMode {
  backdrop-filter: blur(9px);
  background-color: rgba(0, 0, 0, 0);
  border-bottom: 1px solid rgba(57, 56, 56, 0.21);

  .logo-container p {
    color: white;
  }

  .nav-link {
    color: white;
  }
}

.navAtLightMode {
  backdrop-filter: blur(9px);
  background-color: rgba(255, 255, 255, 0.003);
  color: #000000;
}

*/

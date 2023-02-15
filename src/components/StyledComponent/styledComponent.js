import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const HomeContainer = styled.div`
  width:100%;
  height:100%;
`;

export const Iframe = styled.iframe`
  width:100%;
  height:100%;
  z-index:-1;
  opacity: 0.8;
  border:none;

  &::after{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
  }
`
/* 빈태그 */
export const EmptyContent = styled.div``;

/* footer */

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
    width:98%;
  }
`;

export const FooterLinkContainer = styled.div`
width: 500px;

@media (max-width: 768px) {
  width: 100%;
}
`;

export const FooterLinkTitle = styled.h1`
color: gray;
font-size: 17px;
text-align: center;
`;

export const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

export const FooterLink = styled.a`
color: gray;
font-size: 14px;
width: 110px;
margin-bottom: 21px;
text-decoration: none;
text-align: center;
&:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  margin-bottom: 16px;
}
`;


export const FooterDescContainer = styled.div`
  margin-top: 30px @media (max-width: 768px) {
      margin-top: 20px;
  }
`;

export const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;

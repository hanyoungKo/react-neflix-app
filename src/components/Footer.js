import React from 'react'
import * as styledComponent from "./StyledComponent/styledComponent"

function Footer() {
  return (
    <styledComponent.FooterContainer>
        <styledComponent.EmptyContent>
            <styledComponent.FooterLinkContainer>
                <styledComponent.FooterLinkTitle>
                    넷플릭스 대한민국
                </styledComponent.FooterLinkTitle>
                <styledComponent.FooterLinkContent>
                    <styledComponent.FooterLink href="https://help.netflix.com/ko/node/412">넷플릭스 소개</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/ko">고객 센터</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/ko/">미디어 센터</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/legal/privacy">이용약관</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/legal/privacy">개인정보</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com//legal/corpinfo">회사정보</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/ko/contactus">문의하기</styledComponent.FooterLink>
                    <styledComponent.FooterLink href="https://help.netflix.com/legal/notices">법적고지</styledComponent.FooterLink>
                </styledComponent.FooterLinkContent>
                <styledComponent.FooterDescContainer>
                    <styledComponent.FooterDescRights>
                        Netflix Rights Reserved by Hanyoung KO 
                    </styledComponent.FooterDescRights>
                </styledComponent.FooterDescContainer>
            </styledComponent.FooterLinkContainer>
        </styledComponent.EmptyContent>
    </styledComponent.FooterContainer>
  )
}

export default Footer
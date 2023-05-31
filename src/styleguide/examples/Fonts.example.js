import React from 'react'
import { BodyBold1, BodyBold2, BodyBold3, ButtonTextMedium, ButtonTextNormal, H1, H2, H3, H4, H5, R1, ButtonTextSmall, ButtonTextMini, ButtonTextMiniSemi } from '../constants/fonts';

export const FontsExample = () => {
  return (
    <div>
        <H1>H1   </H1>
        <H2>H2   </H2>
        <H3>H3   </H3>
        <H4>H4   </H4>
        <H5>H5   </H5>
        <br></br>
        <R1>R1</R1>
        <br/>
        <BodyBold1>BodyBold1   </BodyBold1>
        <BodyBold2>BodyBold2   </BodyBold2>
        <BodyBold3>BodyBold3   </BodyBold3>
        <br/>
        <ButtonTextNormal>ButtonNormal    </ButtonTextNormal>
        <ButtonTextMedium>ButtonMedium    </ButtonTextMedium>
        <ButtonTextSmall>ButtonSmall    </ButtonTextSmall>
        <ButtonTextMini>ButtonMini    </ButtonTextMini>
        <ButtonTextMiniSemi>ButtonMiniSemi    </ButtonTextMiniSemi>
    </div>
  )
}

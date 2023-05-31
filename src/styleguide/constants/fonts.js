import React from "react"
import { Text, Platform } from "react-native-web"

import getTemplate from '../managers/templateManager';

const template = getTemplate()

export const H1 = (props) => <div><Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: (Platform.OS === 'web') ? 48 : 32 , }, props.style]}>{props.children}</Text></div>
export const H2 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: (Platform.OS === 'web') ? 32 : 24 , }, props.style]}>{props.children}</Text>
export const H3 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 600, fontSize: (Platform.OS === 'web') ? 32 : 20 , }, props.style]}>{props.children}</Text>
export const H4 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: (Platform.OS === 'web') ? 24 : 16 , }, props.style]}>{props.children}</Text>
export const H5 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: (Platform.OS === 'web') ? 20 : 14 , }, props.style]}>{props.children}</Text>

export const R1 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 400, fontSize: (Platform.OS === 'web') ? 48 : 32 , }, props.style]}>{props.children}</Text>

export const BodyRegular1 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 400, fontSize: 18, }, props.style]}>{props.children}</Text>
export const BodyRegular2 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 400, fontSize: 16, }, props.style]}>{props.children}</Text>
export const BodyRegular3 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 400, fontSize: 14, }, props.style]}>{props.children}</Text>

export const BodyBold1 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 18, }, props.style]}>{props.children}</Text>
export const BodyBold2 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 16, }, props.style]}>{props.children}</Text>
export const BodyBold3 = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 14, }, props.style]}>{props.children}</Text>

export const ButtonTextNormal = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 18, userSelect: 'none'}, props.style]}>{props.children}</Text>
export const ButtonTextMedium = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 16, userSelect: 'none'}, props.style]}>{props.children}</Text>
export const ButtonTextSmall = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 700, fontSize: 14,userSelect: 'none'}, props.style]}>{props.children}</Text>
export const ButtonTextMini = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 400, fontSize: 12, userSelect: 'none'}, props.style]}>{props.children}</Text>
export const ButtonTextMiniSemi = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 600, fontSize: 12,userSelect: 'none'}, props.style]}>{props.children}</Text>

export const Label = (props) => <Text allowFontScaling={false} {...props} style={[{ fontFamily: "Roboto", fontWeight: 600, fontSize: 12 , color: template.colors.darkGray}, props.style]}>{props.children}</Text>



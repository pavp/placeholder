import React from "react"
import { TransitionSpecs as stackTransitionSpecs } from "@react-navigation/stack"
import { View } from "react-native"

const Screen = ({ children, ...props }) => {
    const isFunction = typeof children === "function"

    return <View {...props}>{isFunction ? children(props) : children}</View>
}

export const createStackNavigator = () => ({ Group: View, Navigator: View, Screen })

export const CardStyleInterpolators = {
    forFadeFromCenter: () => undefined,
}

export const TransitionSpecs = {
    ...stackTransitionSpecs,
}

const _ = "._11nazb9vl6ebh{color:black}";
const _2 = "._bhf3fx0gfd8e{font-weight:400}";
const _3 = "._14bxwm3iybv1b{color:green}";
const _4 = "._gx5gtyg0la19{font-weight:600}";
const _5 = "._2cldjp62jw1op{color:red}";
const _6 = "._31g3c96xxa2y8{background:white}";
const _7 = "._23mcj2ne8gkn5{font-weight:900}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled, css } from '@compiled/react';
const styles = {
    default: css({
        color: 'black',
        fontWeight: 400
    }),
    success: css({
        color: 'green',
        fontWeight: 600
    }),
    fail: css({
        color: 'red',
        fontWeight: 600
    }),
    bg: css({
        background: 'white',
        fontWeight: 900
    })
};
const Component = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_11nazb9vl6ebh _bhf3fx0gfd8e _31g3c96xxa2y8 _23mcj2ne8gkn5",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Component.displayName = "Component" }
export const View = () => <Component />




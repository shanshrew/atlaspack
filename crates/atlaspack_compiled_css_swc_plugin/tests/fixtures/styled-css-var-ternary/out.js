const _ = "._9r811ty3sa9s{background-color:black}";
const _2 = "._1tebe7f4ok0f1{color:white}";
const _3 = "._2pen35pgkwabh{background-color:white}";
const _4 = "._11nazb9vl6ebh{color:black}";
const _5 = "._2lc3wxd97hc4w{font-size:30px}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled, css } from '@compiled/react';
const dark = css`background-color: black; color: white;`;
const light = css({
  'background-color': 'white',
  color: 'black'
});
const Component = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_2lc3wxd97hc4w",
        __cmplp.isDark ? "_9r811ty3sa9s _1tebe7f4ok0f1" : "_2pen35pgkwabh _11nazb9vl6ebh",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Component.displayName = "Component" }
export const View = () => <Component />




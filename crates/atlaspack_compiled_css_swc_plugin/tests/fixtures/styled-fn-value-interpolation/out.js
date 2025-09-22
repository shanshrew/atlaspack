const _ = "._1j9ubmm02xuak{color:blue}";
const _2 = "._2cldjp62jw1op{color:red}";
const _3 = "._7hglyzy65nwj{text-decoration-line:line-through}";
const _4 = "._7udiqoq3re0m{text-decoration-line:none}";
const _5 = "._2jgdmih4qmuyn{-webkit-line-clamp:3}";
const _6 = "._1l9oxfdysiel6{-webkit-line-clamp:1}";
const _7 = "._2lc3wxd97hc4w{font-size:30px}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const Component = forwardRef((props, __cmplr)=>{
    const { as: C = "button", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_2lc3wxd97hc4w",
        __cmplp.isPrimary ? "_1j9ubmm02xuak" : "_2cldjp62jw1op",
        __cmplp.isDone ? "_7hglyzy65nwj" : "_7udiqoq3re0m",
        __cmplp.isClamped ? "_2jgdmih4qmuyn" : "_1l9oxfdysiel6",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Component.displayName = "Component" }
export const View = () => <Component />



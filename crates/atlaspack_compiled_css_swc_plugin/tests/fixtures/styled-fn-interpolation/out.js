const _ = "._1j9ubmm02xuak{color:blue}";
const _2 = "._2dh7fcw680551{background:blue}";
const _3 = "._161t5kjge1cub{border-width:3px}";
const _4 = "._2d2qs25guhizx{border-style:solid}";
const _5 = "._3gqj8fcqvt6y4{border-color:yellow}";
const _6 = "._2cldjp62jw1op{color:red}";
const _7 = "._31g3c96xxa2y8{background:white}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const Component = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_161t5kjge1cub _2d2qs25guhizx _3gqj8fcqvt6y4 _2cldjp62jw1op _31g3c96xxa2y8",
        __cmplp.isPrimary && "_1j9ubmm02xuak _2dh7fcw680551",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Component.displayName = "Component" }
export const View = () => <Component />



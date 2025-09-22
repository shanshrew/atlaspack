const _ = "._2k0a89ondytg1:hover{color:blue}";
const _2 = "._39kq6hhh8gqcg:hover{color:red}";
const _3 = "._1l25g5mxpqvfk{font-size:12px}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const C = forwardRef((props, __cmplr)=>{
    const { as: __cmplC = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <__cmplC {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_1l25g5mxpqvfk",
        __cmplp.isActive ? "_2k0a89ondytg1" : "_39kq6hhh8gqcg",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { C.displayName = "C" }
export const View = () => <C />



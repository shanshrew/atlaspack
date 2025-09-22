const _ = "._1e2r60k6vau9m .child:hover{color:blue}";
const _2 = "._2oaytfv3cts8k .child:hover{color:red}";
const _3 = "._1xxdovqrhrkf3{font-size:14px}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const C = forwardRef((props, __cmplr)=>{
    const { as: __cmplC = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <__cmplC {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_1xxdovqrhrkf3",
        __cmplp.active ? "_1e2r60k6vau9m" : "_2oaytfv3cts8k",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { C.displayName = "C" }
export const View = () => <C />



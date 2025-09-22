const _ = "._3ljghnafvoeto{font-size:10px}";
const _2 = "@media (min-width:600px){._1j9ubmm02xuak{color:blue}._2cldjp62jw1op{color:red}}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const C = forwardRef((props, __cmplr)=>{
    const { as: __cmplC = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <__cmplC {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_3ljghnafvoeto",
        __cmplp.isPrimary ? "_1j9ubmm02xuak" : "_2cldjp62jw1op",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { C.displayName = "C" }
export const View = () => <C />



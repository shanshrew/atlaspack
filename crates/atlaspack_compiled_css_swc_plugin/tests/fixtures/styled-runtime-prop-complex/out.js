const _ = "._3i1ucnntxyr35{background-color:pink}";
const _2 = "._23p2kqvi510bx{width:var(--_1bof0su4adfql)}";
const _3 = "._22l7qeuoxo33q{min-width:var(--_1qkqjrxtiksby)}";
const _4 = "._1hwzx7gat4x7y{max-width:var(--_1qkqjrxtiksby)}";
const _5 = "._1ge6u9b0gxp4z{height:var(--_394fu5bqchkct)}";
import { ax as ax, ix as ix } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
export const Complex = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={{
        ...__cmpls,
        "--_1bof0su4adfql": ix((()=>{ return __cmplp.dim.width + 10 + "px" })()),
        "--_1qkqjrxtiksby": ix(__cmplp.width),
        "--_394fu5bqchkct": ix(__cmplp.dim.height)
    }} ref={__cmplr} className={ax([
        "_3i1ucnntxyr35 _23p2kqvi510bx _22l7qeuoxo33q _1hwzx7gat4x7y _1ge6u9b0gxp4z",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Complex.displayName = "Complex" }
export const View = () => <Complex />




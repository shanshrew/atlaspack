const _ = "._3brydmfogyp95{width:var(--_1qkqjrxtiksby)}";
const _2 = "._22l7qeuoxo33q{min-width:var(--_1qkqjrxtiksby)}";
const _3 = "._1hwzx7gat4x7y{max-width:var(--_1qkqjrxtiksby)}";
import { ax as ax, ix as ix } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
export const BadgeSkeleton = forwardRef((props, __cmplr)=>{
    const { as: C = "span", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={{
        ...__cmpls,
        "--_1qkqjrxtiksby": ix(__cmplp.width)
    }} ref={__cmplr} className={ax([
        "_3brydmfogyp95 _22l7qeuoxo33q _1hwzx7gat4x7y",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { BadgeSkeleton.displayName = "BadgeSkeleton" }
export const View = () => <BadgeSkeleton />




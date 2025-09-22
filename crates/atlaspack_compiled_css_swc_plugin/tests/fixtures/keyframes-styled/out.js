const _ = "@keyframes k3cx9vr0skpt4i{0%{opacity:0}to{opacity:1}}";
const _2 = "._2zcrku5wcdgfh{animation-name:k3cx9vr0skpt4i}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled, keyframes } from '@compiled/react';
const fade = null;
const Button = forwardRef((props, __cmplr)=>{
    const { as: C = "button", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_2zcrku5wcdgfh",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") {
    Button.displayName = "Button";
}
console.log(Button);

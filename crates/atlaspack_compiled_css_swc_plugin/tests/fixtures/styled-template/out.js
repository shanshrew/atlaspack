const _ = "._2cldjp62jw1op{color:red}";
const _2 = "._2k0a89ondytg1:hover{color:blue}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const Button = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_2cldjp62jw1op _2k0a89ondytg1",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { Button.displayName = "Button" }
export const Btn = () => <Button />



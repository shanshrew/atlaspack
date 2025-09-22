const _ = "._2cldjp62jw1op{color:red}";
import { ax as ax } from "@compiled/react/runtime";
import { forwardRef } from "react";
import { styled } from '@compiled/react';
const mixin = ()=>({
    color: 'red'
});
const ListItem = forwardRef((props, __cmplr)=>{
    const { as: C = "div", style: __cmpls, ...__cmplp } = props;
    if (__cmplp.innerRef) throw new Error("Please use 'ref' instead of 'innerRef'.");
    return <C {...__cmplp} style={__cmpls} ref={__cmplr} className={ax([
        "_2cldjp62jw1op",
        __cmplp.className
    ])}/>;
});
if (process.env.NODE_ENV !== "production") { ListItem.displayName = "ListItem" }
export const View = () => <ListItem />




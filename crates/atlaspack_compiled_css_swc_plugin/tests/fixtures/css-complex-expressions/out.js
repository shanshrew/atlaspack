const _ = "._1j9ubmm02xuak{color:blue}";
const _2 = "._1medhilq6opj5{border-width:1px}";
const _3 = "._2d2qs25guhizx{border-style:solid}";
const _4 = "._1km63hjd4yjs2{border-color:blue}";
const _5 = "._1l25g5mxpqvfk{font-size:12px}";
const _6 = "._24g8p13znt280{font-weight:500}";
import { ax as ax } from "@compiled/react/runtime";
import { css } from '@compiled/react';
const bgColor = 'blue';
const fontSize = 12;
const fontStyling = {
    weight: 500
};
const sizes = {
    mixin1: ()=>`1px solid ${bgColor}`,
    mixin2: ()=>({
            fontSize
        }),
    mixin3: function() {
        return {
            fontWeight: fontStyling.weight
        };
    }
};
const styles2 = css({
  color: 'blue',
  border: sizes.mixin1(),
  ...sizes.mixin2(),
  ...sizes.mixin3(),
});
<div className={ax(["_1j9ubmm02xuak _1medhilq6opj5 _2d2qs25guhizx _1km63hjd4yjs2 _1l25g5mxpqvfk _24g8p13znt280"])}/>;



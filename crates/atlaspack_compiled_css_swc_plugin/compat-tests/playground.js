import { runTransform } from './transform.js';

const source = `
import { css, cssMap } from '@compiled/react';

const getComplex = () => {
  const r = "r";
  return Math.random() > 0.5 ? r + 'ed' : 'blue';  
} 
<div css={{color: getComplex()}} />;

`;
    const { result } = runTransform(source, {
      isSource: true,
      extract: false,
      emitCode: true,
      config: {},
      filename: 'css-cssMap-basic.fixture.jsx',
    });

console.log(result.code)

const _ = "._2cldjp62jw1op{color:red}";
const _2 = "._2k0a89ondytg1:hover{color:blue}";
const _3 = "._39n6oyr8qy6ud{background-color:#eee}";
const _4 = "._28sg12oior2xi{color:crimson}";
import { ax as ax } from "@compiled/react/runtime";
import { css, cssMap } from '@compiled/react';
const isActive = true;
const count = 1;
const themes = cssMap({
  primary: {
    color: 'red',
    '&:hover': {
      color: 'blue'
    }
  },
  secondary: {
    backgroundColor: '#eee'
  },
  danger: {
    color: 'crimson'
  }
});
<>
  <div className={ax(["_2cldjp62jw1op _2k0a89ondytg1"])}/>;
  <div className={ax(["_2cldjp62jw1op _2k0a89ondytg1", isActive && themes.secondary])}/>;
  <div className={ax([false && themes.secondary, "_2cldjp62jw1op _2k0a89ondytg1", cx('A')])}/>;
  <div className={ax(["_39n6oyr8qy6ud", "_28sg12oior2xi", count > 0 && themes.primary])}/>;
</>;

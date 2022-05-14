### 自定义库的打包

- 支持的引入方式
  <font style='color:green;'>common.js</font>、<font style='color:green;'>ES Moudle</font>、<font style='color:green;'>CDN 方式`<script>`</font>
  和如下方式

```javascript
require(['library-name'], function () {})
```

- 库中如果需要引入第三方依赖，须在业务层引入
  webpack.config.js

```JavaScript
...
externals: ['lodash'], // 忽略 lodash打包
  externals: {
    lodash: {
      // root: '_',  // script引入时的全局变量
      commonjs: 'lodash', // 在commonjs模块中引入，名称必须是lodash
    },
  },
...
```

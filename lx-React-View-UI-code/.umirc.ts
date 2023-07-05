import {defineConfig} from 'dumi';

export default defineConfig({
  title: 'React-Component-Library',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: ['autoFocus', 'form', 'formAction', 'formEncType', 'title'],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  exportStatic: {
    htmlSuffix: true
  },
  history: {
    type: 'hash',
  },
  navs: [
    null,
    {
      title: '联系我',
      path: 'https://github.com/username-boy',
    },
  ],
});

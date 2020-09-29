const vue = [
  ['说一下vue的生命周期'],
  ['传值方式有哪几种'],
  ['父子组件怎么去监听生命周期', `<List @hook:mounted="listenMounted" />`],
  ["computed 和 watch 的区别",[`computed 是多对一或一对一关系，有缓存擅长计算场景，watch 是一对多关系，根据自已变化影响其他值`]],
  ['vue router 怎么做鉴权'],
  ['说一下Vuex'],
  ["diff算法", [`
    vue 的diff算法强调就地复用，比较是同层级虚拟节点，其次新旧节点队列都有首尾两个指针，新旧首尾指针两两比较节点向中间靠近，相同节点并且位置相同则直接复用，相同节点位置不同移动节点位置复用，新增删除按照新节点显示操作
    `]
  ],
  ["虚拟dom怎么判断节点相同",[`当两个VNode的tag、key、isComment都相同，并且同时定义或未定义data的时候，且如果标签为input则type必须相同。这时候这两个VNode则算sameVnode，`]]
  ];
const js = [
  [
    'es6有哪些新的功能',
    'let,const,class，for..of，解构，模板字符串，箭头函数，参数默认值',
  ],
  [
    '数组的方法有哪些',
    'push、pop、from、fill、indexOf、include、flat、map、reduce、every、some',
  ],
  [
    '生成一个新类的过程',
    `1. 创建一个新对象;
    2. 将新对象的 _proto_ 指向 构造函数的 prototype
    3. 执行构造函数，将this指向新对象(为这个新对象添加属性);
    4. 构造函数返回的结果，如果是对象类型返回构造函数的返回对象，如果不是返回经过加工的新对象`,
  ],
  ['怎么实现继承'],
  ['异步的方式有哪些'],
  ['promise 有哪几种状态'],
  ["1 == true 结果是什么，发生了什么"],
  ["Vue2.x响应式数据原理"],
  ["vue 优化方式",[`
  v-if和v-for不能连用,
  如果需要使用v-for给每项元素绑定事件时使用事件代理
  SPA 页面采用keep-alive缓存组件
  key保证唯一
  使用路由懒加载、异步组件
  防抖、节流第三方模块按需导入
  长列表滚动到可视区域动态加载(IntersectionObserver)
  图片懒加载`]]

];

const engineering = [
  ['webpack打包原理'],
  ['loader 和 plugin 是什么'],
  ['写过 loader 和 plugin ?',[`写过plugin demo，简单来讲就是plugin中会有编译器和被编译文件两个对象，可以通过编译器获得webpack配置，编译对象获得文件被修改后的结果，主要使用这两个对象在不同的钩子里对文件进行修改`]],
  ['webpack 有哪些优化手段'],
  ['webpack动态加载的原理是什么'],
  ['webpack摇树的原理是什么'],
];

const node = [['node 的事件循环']];
const npm = [['有发布过自己的npm包吗']];
const baseList = [
  ["说一下回流和重绘"],
  ['前端渲染流程'],
  ['前端优化方式'], 
  ['前端事件循环']
];
const network = [
  ["https 实现方式"],
  ["http2.0 有哪些新特性"],
  ["前端socket实现"]
]

const MicroFe = [
  ['了解微前端吗，介绍一下']
];

const list = [
  ...vue,
  ...js,
  ...engineering,
  ...node,
  ...npm,
  ...network,
  ...baseList,
  ...MicroFe,
];

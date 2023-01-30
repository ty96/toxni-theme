## 前前言 - Fore-foreword

- 2023-01-30 更新：

看到八年前大一搞的这个主题，还写了些心得体会，不免觉得岁月不饶人。突然想复活这个主题，升级到了 `ghost@5.x`，解决了些 breaking change，现在可以正常使用，后续再抽时间把当时简单的 `code inject` 部分作以更改，慢慢找找当年对一切充满好奇的感觉吧~

博客域名 toxni 找不回来了，就暂时挂在 fxxking.cool/blog 下面吧。


## 前言 - Foreword

原文: [http://fxxking.cool/blog/theme/](http://fxxking.cool/blog/theme/)

Original article: [http://fxxking.cool/blog/theme/](http://fxxking.cool/blog/theme/)

大一时就鼓捣着想自己搭一个博客，搜寻了挺长时间，最终在 `Wordpress` 和 `Ghost` 之间选择了后者。一开始就用的官方的主题，后来用了一段时间 [Allan Li](http://allan.li/) 的 [EverBlog](https://github.com/lialun/EverBlog)。最终还是决定自己构建一个主题。


## 使用 - Usage
* 中文说明

1. 点击 `Star` (噗开玩笑的)
2. `Clone or Download -> Download Zip`
3. 去 `Ghost` 后台，`General -> Upload A Theme` 就可以了

* English Version

1. Press `Star` (Just kidding lol)
2. `Clone or Download -> Download Zip `
3. GO to your `Ghost` admin panel，`General -> Upload A Theme`, that's it.

## Code Injection

注意，你需要去后台 Code Injection 注入以下代码，这些信息将会展示到作者信息页。

```js
<script>
var personalInfo = {
  School: '电子科技大学(985, 211)',
  Major: '网络工程',
  Steam: '<a href="http://steamcommunity.com/id/ty96" target=_blank>http://steamcommunity.com/id/ty96</a>',
  Github: '<a href="https://github.com/ty96" target=_blank>https://github.com/ty96</a>',
}

var personalBooks = [
  {
    name: '《Javascript权威指南》',
    image: 'https://img3.doubanio.com/lpic/s8958854.jpg',
    comment: '前端届的新华字典，常放在手边翻阅。'
  },
  {
    name: '《JavaScript语言精粹》',
    image: 'https://img3.doubanio.com/lpic/s3651235.jpg',
    comment: '',
  },
]

var personalGames = [
  {
    name: 'Clicker Heroes',
    image: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/363970/2c4d7dad61946f8a81548a21955ccdcf9199364b.jpg',
    comment: '0.1 hrs last two weeks / 136 hrs on record'
  },
  {
    name: 'Assassins Creed II',
    image: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/33230/6d29461ee9303967cb32c2142afaf9bbdb911b6f.jpg',
    comment: '',
  },
]

var counter = {
  isShown: true,
  countName: 'Time with <a href="xxx" target="_blank">Linien</a> is running...',
  countStart: 'Mon Jul 20 2015 20:00:00 GMT+0800 (CST)',
}
</script>
```

## 设计风格 - My Design Styles

玩 `PS` 的时候还是初中吧，那会的设计风格 (如果那会有的话 = =) 大概是喜欢搞些 3D 字体，乱用渐变，堆积素材，看起来像极了五六线小县城的宣传单。


后来高中喜欢上了泼墨风，收集了一大堆毛笔字体，泼墨效果笔刷，整页以黑白灰为主，再配上几句诗词赋，俨然一副逼格我最高的模样。

到了大学，当了个小部长 (其实就是做海报剪视频的苦力)，接触到了 `PPT` 动效，于是乎各种炫酷的动画乱入，做一个七八页的 PPT 都得熬个通宵，的确炫酷，也的确很有成就感。大二加了互联网工作室，接触到了扁平化，也学了 `Illustrator`，只要是个图标就 `45度阴影` 乱加一通 (其实我做的很难看)。

再后来，也许是懒得动手动脑了，我的设计风格就成了白色背景，无衬线字体，只写关键字，简单动效甚至无动效，用一个词形容的话就是 `性冷淡`。

回到这个主题来，背景为一个很素的 canvas，来自[另一个 Ghost 主题](https://snowz.me/)。字体颜色为 `#357ca0` 和 `#888888`，前者为标题或者是重要文本，后者为普通文本。行内代码颜色为主题色的反色，`#ca835f` 差不多是橙色。动效只有页面加载时的一个简单向上淡出，以及某些页面右下角的 `GIF` 图。代码框借鉴了 [MDN](https://developer.mozilla.org) 的风格，代码高亮用的 [Prism](http://prismjs.com/)，高亮颜色根据设计风格调整了一些颜色。同时适配了移动端，没有用任何类库。


## 样式展示 - Theme Styles

* 中文说明

[http://fxxking.cool/blog/theme/](http://fxxking.cool/blog/theme/)


* English Version

[http://fxxking.cool/blog/theme/](http://fxxking.cool/blog/theme/)

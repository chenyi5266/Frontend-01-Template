# CSS排版

## 盒模型

## 正常流 Normal flow

### 如何进行正常流排版
* 收集盒进行
  * 行内包含的元素: 文字，字母，inline-box
* 计算盒在行中的排布
* 计算行的排布

### 正常流的行模型 
* inline format context(IFC) 对应行模型(左右排布)
* inline block 的 vertical-align属性，建议只用属性 top，bottom，middle

### float 与 clear

### 边距margin折叠
block format cotext(BFC) 对应块模型(上下排布)

margin 折叠只发生在 BFC 里，

block container: 里面能装 block element的容器

容器是正常流，内部也能容纳正常流，并且 overflow 为 visible，会在该 BFC 里面发生折叠

如果产生新的BFC，不会发生 margin 合并，可以解决 margin 折叠问题。

•  解决 margin 折叠问题常用方式：
  ◦  浮动元素；
  ◦  绝对定位元素，即 position 设置为 absolute 和 fixed；
  ◦  display 设置为 inline-block、flow-root、flex、inline-flex、grid、inline-grid等；
  ◦  overflow 设置为非 visible，(非创建新的 BFC)

### overflow:visiable 与 BFC
block-level 表示可以被放入bfc，flex，table， grid，block
block-container 表示可以容纳bfc
block-box = block-level + block-container
block-box 如果 overflow 是 visible， 那么就跟父bfc合并

大家请记住下面这个表现原则：如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。
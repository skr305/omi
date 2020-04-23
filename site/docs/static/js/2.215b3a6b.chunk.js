webpackJsonp([2],{71:function(n,e){n.exports="## \u670d\u52a1\u5668\u7aef\u6e32\u67d3\n\n\u670d\u52a1\u5668\u7aef\u6e32\u67d3\u82f1\u6587\u53eb Server-Side Rendering\uff0c\u7b80\u79f0 SSR\uff0c\u6709\u4e24\u5927\u4f18\u52bf:\n\n* \u5bf9 SEO \u53cb\u597d\n* \u66f4\u5feb\u7684\u9996\u5c4f\u5c55\u793a\u65f6\u95f4\n\n\u7528\u670d\u52a1\u5668\u7aef\u6e32\u67d3 (SSR) \u4e5f\u6709\u7f3a\u70b9\uff0c\u6bd4\u5982\u589e\u52a0\u670d\u52a1\u5668\u7aef\u5f00\u9500\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u6743\u8861\u662f\u5426\u4f7f\u7528 SSR\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 [omi-snap](https://github.com/Tencent/omi/blob/master/tutorial/omi-snap.cn.md) \u9884\u6e32\u67d3\uff0c\u9884\u6e32\u67d3\u4e0d\u9700\u8981\u670d\u52a1\u5668\u7aef\u989d\u5916\u7684\u5f00\u9500\uff0c\u76f4\u63a5\u5728\u6784\u5efa\u65f6\u5019\u65e0\u5934\u6d4f\u89c8\u5668\u751f\u6210\u9aa8\u67b6\u5c4f\uff0c\u6240\u4ee5\u4e5f\u5c31\u6ca1\u6709\u52a8\u6001\u6570\u636e\u5185\u5bb9\uff0c\u800c SSR \u53ef\u4ee5\u8fd4\u56de\u52a8\u6001\u6570\u636e\u751f\u6210\u7684 HTML\uff0c\u8fd8\u53ef\u4ee5\u628a\u6570\u636e\u5e8f\u5217\u5316\u4e0e HTML \u4e00\u540c\u8fd4\u56de\u3002\n\n## \u5feb\u901f\u4f7f\u7528\n\n```bash\n$ npm i omi-cli -g      # \u5168\u5c40\u5b89\u88c5 cli\n$ omi init-ssr my-app     # \u521d\u59cb\u5316\u9879\u76ee \n$ cd my-app           \n$ npm start             # \u5f00\u53d1\n$ npm run build         # \u53d1\u5e03\n```\n\n## \u539f\u7406\u89e3\u6790\n\n\u5b9a\u4e49\u7ec4\u4ef6\uff1a\n\n```jsx\nimport { WeElement, define } from 'omio'\n\ndefine('my-element', class extends WeElement {\n  install() {\n    this.data = { liked: false }\n  }\n\n  static css = 'button{ color: red; }'\n\n  render() {\n    if (this.data.liked) {\n      return 'You liked this.'\n    }\n\n    return <button onClick={() => {\n      this.data.liked = true\n      this.update()\n    }} >Like</button>\n  }\n})\n```\n\n\u6ce8\u610f\u8fd9\u91cc\u4f7f\u7528\u4e86 omio\uff0cSSR \u53ea\u80fd\u4f7f\u7528 omio\uff0c\u800c\u4e0d\u80fd\u4f7f\u7528 omi\uff0c\u56e0\u4e3a omi \u662f web components\uff0cnode \u65e0\u6cd5\u6e32\u67d3 web components\u3002\n\n> omi \u548c omio \u9879\u76ee\u90fd\u5fc5\u987b\u4f7f\u7528 omio \u8fdb\u884c SSR\n\n\u8d77\u4e2a node \u670d\u52a1\u5668:\n\n```jsx\nvar express = require('express')\nvar app = express()\nvar Omi = require('omio')\nrequire('./my-element')\n\napp.get('/', function (req, res) {\n  const obj = Omi.renderToString(<my-element />)\n  res.end(`<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>Omi SSR</title>\n    ${toString(obj.css)}\n  </head>\n  <body>${obj.html}</body>\n</html>`)\n})\n\nfunction toString(css){\n  return (\n     css.map(style => {\n          return `<style id=\"${style.id}\">${style.css}</style>`\n      }\n    ))\n  )\n}\n\napp.listen(3000)\n```\n\n\u76f4\u51fa\u7684 HTML \u7ed3\u6784:\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>Omi SSR</title>\n    <style type=\"text/css\" id=\"_ss0\">button[_ss0]{color:red;}</style>\n  </head>\n  <body><button _ss0>Like</button></body>\n</html>\n```\n\n\u663e\u793a\u6548\u679c:\n\n![](https://github.com/Tencent/omi/raw/master/assets/hello-ssr.png)\n\n\n"}});
//# sourceMappingURL=2.215b3a6b.chunk.js.map
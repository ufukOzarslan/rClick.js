# rClick.js ![bower-image]

> This plugin enables you to use jQuery to attach events triggered by the right mouse button. Three right-click events are supported: click, mouseup, and mousedown. There is also a built-in method to disable browser context menus.

## Installation

```bash
bower install rClick.js 
```

## Usage


```js
$(function () {

    $(window).rClick({
        click: 'right',
        element: $('#tooltip'),
        delay : 100
    });

})
```

## Demo

#### web.whatsapp
![demo-image]

#### hublabs.rclick.js
![demo-image-2]

- http://academy.hublabs.com.tr/rClick.js

[bower-image]: https://img.shields.io/bower/v/bootstrap.svg
[demo-image]: http://academy.hublabs.com.tr/rClick.js/image/demo-image.png
[demo-image-2]: http://academy.hublabs.com.tr/rClick.js/image/demo-image-2.png

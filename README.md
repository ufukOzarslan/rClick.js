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

```html
<div id="tooltip" class="hidden">
    <ul>
        <li><a href="#">Contact information</a></li>
        <li><a href="#">Select message</a></li>
        <li><a href="#">Quiet</a></li>
        <li><a href="#">Clear message</a></li>
        <li><a href="#">Delete chat</a></li>
    </ul>
</div>
```

```css
.hidden {
    display: none;
}

#tooltip {
    border-left: 1px solid #d2cece;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #aba8a8;
    border-right: 1px solid #d4d1d1;
    border-radius: 5px;
    background: #efefef;
    -moz-box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.2);
}

#tooltip ul {
    padding: 0;
}

#tooltip ul li {
    padding: 12px 30px 12px 20px;
}

#tooltip ul li a {
    display: block;
    text-decoration: none;
    color: #444;
    font-size: 14.5px;
    cursor: pointer;
    text-align: left;
}

#tooltip ul li:hover, #tooltip ul li.active {
    background: #d8d8d8;
}
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

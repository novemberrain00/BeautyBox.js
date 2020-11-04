# BeatyBox.js
BeatyBox - simple and easy to customize lightbox plugin for your website.

Gratitude
----

"BeautyBox.js" uses animations of library "Animate.css". Creator of beautybox thanks creators of animate.css for giving an opportunity to use it!
Animate.css: https://github.com/animate-css/animate.css


Installation
-----

`npm i beautybox`

or download files:

- beautybox.js/beautybox.min.js
- beautybox.css/beautybox.min.css

then add this code in your HTML before  </head>:

```html
<link rel="stylesheet" type="text/css" href="css/beautybox.min.css"/>
```

and it before </body>:

```html
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"</script>
<script type="text/javascript" src="js/beautybox.min.js"></script>
```


Usage
-----

just add beautybox(pictures, options), where "pictures" - is selector of images those must be shown, and "options" is objects with options


Options
-----

### animationNameEntrance ###  
**Description**: name of container's animations when it's appears  
**Type**: string  
**Arguments**: all animations from animate.css containing "entrance" or "in" in name  
**Default**: "fadeIn"  

***

### animationNameExit ###
**Description**: name of container's animations when it's disappears  
**Type**: string  
**Arguments**: all animations from animate.css containing "exit" or "out" in name  
**Default**: "fadeOut"  
***

### slideEntrance ###
**Description**: name of slides' animations when it's appears
**Type**: string
**Arguments**: all animations from animate.css containing "in" or "entrance" in name
**Default**: "fadeIn"
***

### animationDuration ### 
**Description**: duration of container animations
**Type**: integer | float
**Default**: 1
***

### slideEntranceDuration ### 
**Description**: duration of slide animation of entrance
**Type**: integer | float
**Default**: 1
***

### switching ### 
**Description**: type of switching of slides 
**Type**: string
**Arguments**: "click" | "arrows"
**Default**: arrows
***

### closing ### 
**Description**: type of closing of container
**Type**: string
**Arguments**: "tap" | "cross" | "esc" | "all"
**Default**: cross
***

### arrowPrev ### 
**Description**: html code of left arrow
**Type**: string
**Default**:
```html
	<div class="beautybox-svg-wrapper">
		<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
	</div>
```
***

### arrowNext ### 
**Description**: html code of right arrow
**Type**: string
**Default**:
```html
	<div class="beautybox-svg-wrapper">
		<?xml version="1.0" ?><svg id="blue_copy" style="enable-background:new 0 0 100 100;" version="1.1" viewBox="0 0 100 100" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_4_copy"><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7   C27.852,25.902,29.798,24.778,31.356,25.677z"/><path d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3   C71.538,51.124,71.538,48.876,69.981,47.977z"/><path d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046   l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z" style="fill:none;stroke:#000000;stroke-miterlimit:10;"/></g></svg>
	</div>
```
***

### counter ### 
**Description**: show or not counter of slide
**Type**: boolean
**Default**: true
***

**infinite** 
**Description**: is it infinte
**Type**: boolean
**Default**: true
***

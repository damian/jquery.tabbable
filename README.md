# jQuery Tabbable

Augments jQuery with a `:tabbable` selector to retrieve all tabbable elements within a given context.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/damian/jquery.tabbable/master/dist/jquery.tabbable.min.js
[max]: https://raw.github.com/damian/jquery.tabbable/master/dist/jquery.tabbable.js

In your web page:

```html
<form>
  <label>Name</label>
  <input type="text" name="name" />

  <label>Surname</label>
  <input type="text" name="surname" />

  <a>Reset</a>
  <a href="/">Cancel</a>
  <button>Submit</button>
</form>

<script src="jquery.js"></script>
<script src="dist/jquery.tabbable.min.js"></script>
<script>
jQuery(function($) {
  // Returns all tabbable elements
  $('form').find(':tabbable'); // [ 'input', 'input', 'a[href]', 'button' ]
});
</script>
```

## Documentation
This is generated using YUIDoc and can be found in the **docs** folder.

## Examples
$(function() {
    $('form').find(':tabbable');

    $('form').find(':input').filter(':tabbable');
});

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
* 0.0.3 - Upgraded to Grunt 0.4.x. Also added YUIDoc to serve the documentation
* 0.0.2 - Updated the project with documentation and added it to plugins.jquery.com
* 0.0.1 - Set up the original project using Grunt 0.3.x

## License
Copyright (c) 2013 Damian Nicholson  
Licensed under the MIT license.

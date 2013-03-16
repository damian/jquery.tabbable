# jQuery Tabbable

The best jQuery plugin ever.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/damian/jquery.tabbable/master/dist/jquery.tabbable.min.js
[max]: https://raw.github.com/damian/jquery.tabbable/master/dist/jquery.tabbable.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.tabbable.min.js"></script>
<script>
jQuery(function($) {
  // Returns all tabbable elements
  $('form').find(':tabbable'); // [ 'input', 'input', 'a[href]', 'button' ]
});
</script>

<form>
  <label>Name</label>
  <input type="text" name="name" />

  <label>Surname</label>
  <input type="text" name="surname" />

  <a>Reset</a>
  <a href="/">Cancel</a>
  <button>Submit</button>
</form>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Damian Nicholson  
Licensed under the MIT license.

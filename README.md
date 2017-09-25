# Svelte Twitter Widgets

Svelte wrapper for the [official twitter widgets](https://dev.twitter.com/web/overview).

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Usage

Use as a normal svelte component.

You can use all parameters for [embedded tweets](https://dev.twitter.com/web/embedded-tweets/parameters) and [embedded timelines](https://dev.twitter.com/web/embedded-timelines/parameters) as described in the twitter docs.

## Examples:

An example Svelte component embedding some Twitter stuff:

```html
<!-- A single tweet -->
<Tweet href="https://twitter.com/sveltejs/status/803680146486128640" />

<!-- A profile timeline -->
<Timeline href="https://twitter.com/sveltejs" />

<!-- A collection, with a grid layout and a dark theme -->
<Timeline href="https://twitter.com/TwitterDev/timelines/539487832448843776" grid theme="dark" />

<!-- A list, with a black link color -->
<Timeline href="https://twitter.com/twitter/lists/official-twitter-accounts" linkColor="#000"/>

<script>
  import { Tweet, Timeline } from 'svelte-twitter-widgets';

  export default {
    components: {
      Tweet,
      Timeline
    }
  }
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Jeroen Coussement - [@coussej](https://twitter.com/coussej) - [coussej.github.io](http://coussej.github.io)

## License

MIT
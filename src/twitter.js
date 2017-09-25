export default {

  loadAPI () {
    var id = 'twitter-wjs'

    // if script was already set, don't load it again.
    if (document.getElementById(id)) return

    var s = document.createElement('script')
    s.id = id
    s.type = 'text/javascript'
    s.async = true
    s.src = '//platform.twitter.com/widgets.js'
    document.getElementsByTagName('head')[0].appendChild(s)
  }

}

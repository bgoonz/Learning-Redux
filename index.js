var a2a_config = a2a_config || {};
a2a_config.vars = {
  vars: [ "menu_type", "static_server", "linkmedia", "linkname", "linkurl", "linkname_escape", [ "http_s", "http:" != document.location.protocol ? "s" : "" ], "show_title", "onclick", "num_services", "hide_embeds", "prioritize", "exclude_services", "custom_services", [ "templates", {} ], "orientation", [ "track_links", !1 ],
    [ "track_links_key", "" ], "tracking_callback", "track_pub", "color_main", "color_bg", "color_border", "color_link_text", "color_link_text_hover", "color_arrow", "color_arrow_hover", [ "add_services", !1, 1 ],
    [ "thanks", {} ], "locale", "delay", "icon_color", "no_3p", "show_menu", "target"
  ],
  process: function () {
    for ( var a, e, t = a2a_config.vars.vars, n = 0, i = t.length; n < i; n++ ) void 0 !== ( e = "string" == typeof t[ n ] ? ( a = t[ n ], undefined ) : ( a = t[ n ][ 0 ], t[ n ][ 1 ] ) ) && "undefined" == typeof a2a_config[ a ] && ( a2a_config[ a ] = e )
  }
}, a2a_config.vars.process(), a2a_config.localize = window.a2a_localize || "", a2a_config.static_server = a2a_config.static_server || "https://static.addtoany.com/menu";
var a2a = a2a || {
  static_addtoany: "https://static.addtoany.com/menu",
  total: 0,
  kit_services: [],
  icons_img_url: a2a_config.static_server + "/icons.36.png",
  head_tag: document.getElementsByTagName( "head" )[ 0 ],
  canonical_url: function () {
    if ( !document.querySelector ) return !1;
    var a, e = document.querySelector( 'meta[property="og:url"]' );
    return e ? e.content : !!( a = document.querySelector( 'link[rel="canonical"]' ) ) && a.href
  }(),
  nonce: document.currentScript && document.currentScript.nonce ? document.currentScript.nonce : null,
  ieo: function () {
    for ( var a = -1, e = document.createElement( "b" ); e.innerHTML = "\x3c!--[if gt IE " + ++a + "]>1<![endif]--\x3e", +e.innerHTML; );
    return a2a.ieo = function () {
      return a
    }, a
  },
  quirks: document.compatMode && "BackCompat" == document.compatMode ? 1 : null,
  is_mobile: navigator.userAgent.match( /Mobi/ ) || "screen" in window && window.screen.width < 1366,
  has_menter: document.documentElement && "onmouseenter" in document.documentElement,
  has_touch: "ontouchend" in window,
  has_pointer: window.PointerEvent || navigator.msPointerEnabled,
  dom: {
    isReady: !1,
    ready: function ( a ) {
      var e = function () {
          if ( !document.body ) return setTimeout( a2a.dom.ready( a ) );
          a(), a2a.dom.isReady = !0
        },
        t = function ( a ) {
          ( document.addEventListener || "load" === a.type || "complete" === document.readyState ) && ( n(), e() )
        },
        n = function () {
          document.addEventListener ? ( document.removeEventListener( "DOMContentLoaded", t, !1 ), window.removeEventListener( "load", t, !1 ) ) : ( document.detachEvent( "onreadystatechange", t ), window.detachEvent( "onload", t ) )
        };
      if ( "complete" === document.readyState ) e();
      else if ( document.addEventListener ) document.addEventListener( "DOMContentLoaded", t, !1 ), window.addEventListener( "load", t, !1 );
      else {
        document.attachEvent( "onreadystatechange", t ), window.attachEvent( "onload", t );
        var i = !1;
        try {
          i = null == window.frameElement && document.documentElement
        } catch ( o ) {}
        i && i.doScroll && ! function l() {
          if ( !a2a.dom.isReady ) {
            try {
              i.doScroll( "left" )
            } catch ( o ) {
              return setTimeout( l, 50 )
            }
            n(), e()
          }
        }()
      }
    }
  },
  ready: function () {
    a2a.type = "page", a2a.cbs( "ready" ), a2a.ready = function () {}
  },
  init: function ( a, e ) {
    var t, n, i, o, l = a2a.c,
      r = ( e = e || {}, {} ),
      s = null,
      c = {},
      d = location.href;
    for ( var u in a2a.make_once( a ), e ) l[ u ] = e[ u ];
    for ( var u in l ) r[ u ] = l[ u ];
    if ( n = l.target )
      if ( "string" == typeof n ) {
        if ( i = n.substr( 0, 1 ), o = n.substr( 1 ), "." == i ) return a2a.multi_init( a2a.HTMLcollToArray( a2a.getByClass( o, document ) ), a, e ), void( l.target = !1 );
        0 <= ( t = ( s = a2a.gEl( o ) ).className ).indexOf( "a2a_kit" ) && t.indexOf( "a2a_target" ) < 0 && ( s = null )
      } else s = l.target;
    ( a = l.menu_type ? "mail" : a ) && ( a2a.type = a, l.vars.process() ), c.type = a2a.type, c.node = s, c.linkmedia = l.linkmedia, c.linkname = l.linkname || document.title || location.href, c.linkurl = l.linkurl || location.href, c.linkname_escape = l.linkname_escape, c.linkname_implicit = !l.linkname_escape && ( document.title || d ) == c.linkname, c.linkurl_implicit = d == c.linkurl, c.orientation = l.orientation || !1, c.track_links = l.track_links || !1, c.track_links_key = l.track_links_key || "", c.track_pub = l.track_pub || !1, l.linkmedia = l.linkname = l.linkurl = l.linkname_escape = l.show_title = l.custom_services = l.exclude_services = l.orientation = l.track_pub = l.target = !1, "custom" == l.track_links && ( l.track_links = !1, l.track_links_key = "" ), a2a.last_type = a2a.type, window[ "a2a" + a2a.type + "_init" ] = 1,
      function ( a, e ) {
        a2a.total++, a2a.n = a2a.total;
        var t, n, i = ( a2a[ "n" + a2a.n ] = a ).node = a2a.set_this_index( a.node ),
          o = document.createElement( "div" ),
          l = a2a.getData( i )[ "a2a-media" ],
          r = a2a.getData( i )[ "a2a-title" ],
          s = a2a.getData( i )[ "a2a-url" ];
        i ? ( a.linkname_escape && ( n = a2a.getByClass( "a2a_linkname_escape", i.parentNode )[ 0 ] || a2a.getByClass( "a2a_linkname_escape", i.parentNode.parentNode )[ 0 ] ) && ( a.linkname = n.textContent || n.innerText ), a.linkmedia = e.linkmedia = l || a.linkmedia, a.linkname = e.linkname = r || a.linkname, a.linkurl = e.linkurl = s || a.linkurl, r && ( a.linkname_implicit = !1 ), s && ( a.linkurl_implicit = !1 ), "textContent" in document ? o.textContent = a.linkname : o.innerText = a.linkname, ( t = o.childNodes[ 0 ] ) && ( a.linkname = t.nodeValue ), delete o, i.a2a_kit ? a2a.kit( a, e ) : a2a.button( a ) ) : a2a.c.show_menu || a2a.total--
      }( c, r ), l.menu_type = !1, a2a.init_show()
  },
  init_all: function ( e ) {
    a2a.unindexed( function ( a ) {
      0 <= a.className.indexOf( "a2a_follow" ) ? a2a.init( "feed", {
        target: a
      } ) : a2a.init( e || "page", {
        target: a
      } )
    }, !0 ) || !a2a.gEl( "a2a_menu_container" ) || a2a.init_show.a2a_done || a2a.init( e )
  },
  multi_init: function ( a, e, t ) {
    for ( var n = 0, i = a.length; n < i; n++ ) t.target = a[ n ], a2a.init( e, t )
  },
  button: function ( a ) {
    var n = a2a.gEl,
      i = a.node,
      o = a.type,
      l = "a2a" + o,
      r = n( l + "_dropdown" ),
      e = n( l + "_full" ),
      t = a2a.has_menter,
      s = i.firstChild,
      c = a2a[ o ].onclick;
    i.getAttribute( "onclick" ) && -1 != ( i.getAttribute( "onclick" ) + "" ).indexOf( "a2a_" ) || i.getAttribute( "onmouseover" ) && -1 != ( i.getAttribute( "onmouseover" ) + "" ).indexOf( "a2a_" ) || ( a2a.add_event( i, "click", function ( a ) {
      a2a.preventDefault( a ), a2a.stopPropagation( a );
      var e = !!a2a.isDisplayed( r ),
        t = document.activeElement;
      if ( e ? a2a.toggle_dropdown( "none", o ) : 2 !== c && ( a2a.show_menu( i ), a2a[ o ].last_focus = t, r.focus() ), e && a2a.isDisplayed( n( l + "_show_more_less" ) ) || 2 === c ) {
        if ( "mail" == o ) return;
        a2a.show_full(), a2a[ o ].last_focus = t
      }
    } ), a2a.add_event( i, "click", a2a.stopPropagation ), a2a.add_event( i, "touchstart", a2a.stopPropagation, !!a2a.evOpts() && {
      passive: !0
    } ), !a2a[ a2a.type ].onclick && t && ( a2a.c.delay ? i.onmouseenter = function () {
      a2a[ a2a.type ].over_delay = setTimeout( function () {
        a2a.show_menu( i )
      }, a2a.c.delay )
    } : i.onmouseenter = function () {
      a2a.show_menu( i )
    }, i.onmouseleave = function () {
      a2a.miniLeaveDelay(), a2a[ a2a.type ].over_delay && clearTimeout( a2a[ a2a.type ].over_delay )
    } ), a2a.add_event( i, "mouseenter", function () {
      e.style.willChange = "transform, opacity", n( "a2a_overlay" ).style.willChange = "backdrop-filter, opacity"
    } ) ), "a" == i.tagName.toLowerCase() && "page" == a2a.type && ( i.href = "https://www.addtoany.com/share#url=" + encodeURIComponent( a.linkurl ) + "&title=" + encodeURIComponent( a.linkname ).replace( /'/g, "%27" ) ), s && "undefined" != typeof s.srcset && /\/share_save_171_16.(?:gif|png)$/.test( s.src ) && ( s.srcset = "https://static.addtoany.com/buttons/share_save_342_32.png 2x" )
  },
  kit: function ( o, a ) {
    var e, t, n, i, l, m = o.type,
      r = {
        behance: {
          name: "Behance",
          icon: "behance",
          color: "007EFF",
          url: "https://www.behance.net/${id}"
        },
        facebook: {
          name: "Facebook",
          icon: "facebook",
          color: "1877f2",
          url: "https://www.facebook.com/${id}"
        },
        flickr: {
          name: "Flickr",
          icon: "flickr",
          color: "FF0084",
          url: "https://www.flickr.com/photos/${id}"
        },
        foursquare: {
          name: "Foursquare",
          icon: "foursquare",
          color: "F94877",
          url: "https://foursquare.com/${id}"
        },
        github: {
          name: "GitHub",
          icon: "github",
          color: "2A2A2A",
          url: "https://github.com/${id}"
        },
        instagram: {
          name: "Instagram",
          icon: "instagram",
          color: "E4405F",
          url: "https://www.instagram.com/${id}"
        },
        linkedin: {
          name: "LinkedIn",
          icon: "linkedin",
          color: "007BB5",
          url: "https://www.linkedin.com/in/${id}"
        },
        linkedin_company: {
          name: "LinkedIn",
          icon: "linkedin",
          color: "007BB5",
          url: "https://www.linkedin.com/company/${id}"
        },
        medium: {
          name: "Medium",
          icon: "medium",
          color: "2A2A2A",
          url: "https://medium.com/@${id}"
        },
        pinterest: {
          name: "Pinterest",
          icon: "pinterest",
          color: "BD081C",
          url: "https://www.pinterest.com/${id}"
        },
        snapchat: {
          name: "Snapchat",
          icon: "snapchat",
          color: "2A2A2A",
          url: "https://www.snapchat.com/add/${id}"
        },
        tumblr: {
          name: "Tumblr",
          icon: "tumblr",
          color: "35465C",
          url: "http://${id}.tumblr.com"
        },
        twitter: {
          name: "Twitter",
          icon: "twitter",
          color: "55ACEE",
          url: "https://twitter.com/${id}"
        },
        vimeo: {
          name: "Vimeo",
          icon: "vimeo",
          color: "1AB7EA",
          url: "https://vimeo.com/${id}"
        },
        youtube: {
          name: "YouTube",
          icon: "youtube",
          color: "FF0000",
          url: "https://www.youtube.com/user/${id}"
        },
        youtube_channel: {
          name: "YouTube Channel",
          icon: "youtube",
          color: "FF0000",
          url: "https://www.youtube.com/channel/${id}"
        }
      },
      s = [ "facebook_like", "twitter_tweet", "pinterest_pin", "linkedin_share" ],
      c = a2a.counters.avail,
      d = function ( a, e ) {
        if ( a && !a2a.in_array( a, s ) )
          for ( var t = 0, n = e ? a2a[ m ].services.most.concat( a2a[ m ].services.email ) : a2a.services, i = n.length; t < i; t++ )
            if ( a == n[ t ][ 1 ] ) return [ n[ t ][ 0 ], n[ t ][ 2 ], n[ t ][ 3 ], n[ t ][ 4 ], n[ t ][ 5 ] ];
        return !e && [ a, a ]
      },
      u = function ( a, e ) {
        for ( var t, n = 0, i = a.attributes.length, o = e; n < i; n++ )( t = a.attributes[ n ] ).name && "data-" == t.name.substr( 0, 5 ) && ( o[ t.name.substr( 5 ) ] = t.value );
        return o
      },
      _ = function () {
        E = o.linkurl = a2a.getData( h )[ "a2a-url" ] || E, S = o.linkname = a2a.getData( h )[ "a2a-title" ] || S, B = o.linkmedia = a2a.getData( h )[ "a2a-media" ] || B, a2a.linker( this )
      },
      p = function ( a, e, t ) {
        var n = {
            node: e,
            service: a,
            title: S,
            url: E,
            media: B,
            mediaNode: h.a2a_mediaNode
          },
          i = a2a.cbs( "share", n );
        return void 0 !== i && ( i.url && ( o.linkurl = i.url, o.linkurl_implicit = !1 ), i.title && ( o.linkname = i.title, o.linkname_implicit = !1 ), i.media && ( o.linkmedia = i.media ), a2a.linker( e ), i.stop && t && a2a.preventDefault( t ) ), i
      },
      f = a2a.c.templates,
      g = a2a.in_array,
      h = o.node,
      v = a2a.getData( h ),
      y = h.className,
      k = h.a2a_follow,
      w = a2a.HTMLcollToArray( h.getElementsByTagName( "a" ) ),
      b = w.length,
      x = document.createElement( "div" ),
      A = encodeURIComponent,
      E = o.linkurl,
      C = A( o.linkurl ).replace( /'/g, "%27" ),
      S = o.linkname,
      B = ( A( o.linkname ).replace( /'/g, "%27" ), o.linkmedia ),
      T = ( B && A( o.linkmedia ).replace( /'/g, "%27" ), v[ "a2a-icon-color" ] || a2a.c.icon_color ),
      F = T ? T.split( ",", 2 ) : T,
      L = F ? F[ 0 ] : F,
      N = F ? F[ 1 ] : F,
      z = y.match( /a2a_kit_size_([\w\.]+)(?:\s|$)/ ),
      D = z ? z[ 1 ] : "16",
      I = D + "px",
      M = "a2a_svg a2a_s__default a2a_s_",
      j = {},
      P = {},
      O = o.linkurl_implicit && a2a.canonical_url ? encodeURIComponent( a2a.canonical_url ).replace( /'/g, "%27" ) : C,
      H = v[ "a2a-scroll-show" ],
      R = 0 <= y.indexOf( "a2a_vertical_style" );
    D && !isNaN( D ) && ( a2a.svg.load(), T && "unset" != T && a2a.svg.works() && ( L && "unset" != L && ( j.backgroundColor = L ), N && "unset" != N.trim() && ( N = N.trim() ) ), h.style.lineHeight = P.height = P.lineHeight = I, P.width = 2 * D + "px", P.fontSize = "16px", R && ( P.height = P.lineHeight = D / 2 + "px", P.fontSize = "10px", P.width = D + "px" ), H && a2a.scrollToggle( h, H ), 32 != D && ( j.backgroundSize = j.height = j.lineHeight = j.width = I, P.borderRadius = j.borderRadius = ( .14 * D ).toFixed() + "px", P.fontSize = ( parseInt( P.height, 10 ) + ( R ? 4 : 0 ) ) / 2 + "px" ) ), a2a.kit.facebook_like = function () {
      ma.href = E, ma.width = "90", ma.layout = "button_count", ma.ref = "addtoany", ma = u( V, ma ), V.style.width = ma.width + "px";
      var a, e, t, n, i = a2a.i18n();
      for ( var o in 2 == ( i = i ? i.replace( /-/, "_" ) : "en_US" ).length && ( i += "_" + i.toUpperCase() ), ma ) ua += " data-" + o + '="' + ma[ o ] + '"';
      window.fbAsyncInit || ( window.fbAsyncInit = function () {
        FB.init( {
          appId: "0",
          status: !1,
          xfbml: !0,
          version: "v3.1"
        } ), FB.Event.subscribe( "edge.create", function ( a, e ) {
          a2a.GA.track( "Facebook Like", "facebook_like", a, "pages", "AddToAny Share/Save Button" ), p( "Facebook Like", V )
        } )
      }, ( U = document.createElement( "span" ) ).id = "fb-root", document.body.insertBefore( U, document.body.firstChild ) ), a2a.kit.facebook_like_script || ( a = document, e = "facebook-jssdk", n = a.getElementsByTagName( "script" )[ 0 ], a.getElementById( e ) || ( ( t = a.createElement( "script" ) ).id = e, t.src = "https://connect.facebook.net/" + i + "/sdk.js#xfbml=1&version=v3.1", n.parentNode.insertBefore( t, n ) ) ), a2a.kit.facebook_like_script = 1, V.innerHTML = '<div class="fb-like"' + ua + "></div>";
      try {
        FB.XFBML.parse( V )
      } catch ( l ) {}
    }, a2a.kit.twitter_tweet = function () {
      ma.url = E, ma.lang = a2a.i18n() || "en", ma.related = "AddToAny,micropat";
      var a = f.twitter,
        e = "string" == typeof a ? a.lastIndexOf( "@" ) : null;
      e && -1 !== e && ( e++, e = ( e = a.substr( e ).split( " ", 1 ) )[ 0 ].replace( /:/g, "" ).replace( /\//g, "" ).replace( /-/g, "" ).replace( /\./g, "" ).replace( /,/g, "" ).replace( /;/g, "" ).replace( /!/g, "" ), ma.related = e + ",AddToAny" ), ma = u( V, ma );
      var t, n, i, o, l, r = document.createElement( "a" );
      for ( var s in r.className = "twitter-share-button", ma ) r.setAttribute( "data-" + s, ma[ s ] );
      V.appendChild( r ), a2a.kit.twitter_tweet_script || ( t = document, n = "twitter-wjs", l = t.getElementsByTagName( "script" )[ 0 ], t.getElementById( n ) || ( ( o = t.createElement( "script" ) ).id = n, o.src = "https://platform.twitter.com/widgets.js", l.parentNode.insertBefore( o, l ), window.twttr = window.twttr || ( i = {
        _e: [],
        ready: function ( a ) {
          i._e.push( a )
        }
      } ) ) ), a2a.kit.twitter_tweet_script = 1;
      try {
        twttr.ready( function ( a ) {
          a2a.twitter_bind || ( a.events.bind( "click", function ( l ) {
            if ( l && "tweet" == l.region ) {
              var a = function () {
                var a = l.target.src.split( "#" )[ 1 ] || "";
                if ( a && -1 < a.indexOf( "url=" ) ) {
                  for ( var e = {}, t = a.split( "&" ), n = t.length, i = 0; i < n; i++ ) {
                    var o = t[ i ].split( "=" );
                    e[ o[ 0 ] ] = o[ 1 ]
                  }
                  return e
                }
                return !1
              }();
              a && a.url && ( a2a.GA.track( "Twitter Tweet", "twitter_tweet", unescape( a.url ), "pages", "AddToAny Share/Save Button" ), p( "Twitter Tweet", V ) )
            }
          } ), a2a.twitter_bind = 1 ), a.widgets && a.widgets.load()
        } )
      } catch ( c ) {}
    }, a2a.kit.pinterest_pin = function () {
      ma[ "pin-config" ] = "beside", ma[ "pin-do" ] = "buttonPin", ma.media = B, ma.url = E, ma = u( V, ma );
      var a, e, t, n = document.createElement( "a" );
      for ( var i in ma ) n.setAttribute( "data-" + i, ma[ i ] );
      "beside" == ma[ "pin-config" ] && "buttonPin" == ma[ "pin-do" ] && ( V.style.width = "76px" ), n.href = "https://www.pinterest.com/pin/create/button/?url=" + ma.url + ( ma.media ? "&media=" + ma.media : "" ) + ( ma.description ? "&description=" + encodeURIComponent( ma.description ).replace( /'/g, "%27" ) : "" ), a2a.add_event( V, "click", function () {
        a2a.GA.track( "Pinterest Pin", "pinterest_pin", E, "pages", "AddToAny Share/Save Button" ), p( "Pinterest Pin", V )
      } ), V.appendChild( n ), a2a.kit.pinterest_pin_script || ( a = document, e = a.createElement( "script" ), t = a.getElementsByTagName( "script" )[ 0 ], e.async = !0, e.src = "https://assets.pinterest.com/js/pinit.js", t.parentNode.insertBefore( e, t ) ), a2a.kit.pinterest_pin_script = 1
    }, a2a.kit.linkedin_share = function () {
      for ( var a in ma.onsuccess = "a2a.kit.linkedin_share_event", ma.url = E, ma = u( V, ma ) ) ua += " data-" + a + '="' + ma[ a ] + '"';
      var e, t, n;
      a2a.kit.linkedin_share_event = function () {
        a2a.GA.track( "LinkedIn Share", "linkedin_share", E, "pages", "AddToAny Share/Save Button" ), p( "LinkedIn Share", V )
      }, a2a.kit.linkedin_share_script || ( e = document, t = e.createElement( "script" ), n = e.getElementsByTagName( "script" )[ 0 ], t.type = "text/javascript", t.async = !0, t.src = "https://platform.linkedin.com/in.js", n.parentNode.insertBefore( t, n ) ), a2a.kit.linkedin_share_script = 1, V.innerHTML = '<script type="IN/Share"' + ua + "><\/script>"
    };
    for ( var $ = 0; $ < b; $++ ) {
      var U, W, q, G, V = w[ $ ],
        J = V.className,
        Y = J.match( /a2a_button_([\w\.]+)(?:\s|$)/ ),
        K = 0 <= J.indexOf( "a2a_dd" ),
        X = 0 <= J.indexOf( "a2a_counter" ),
        Q = !!Y && Y[ 1 ],
        Z = V.childNodes,
        aa = d( Q ),
        ea = k && r[ Q ] ? r[ Q ].name : aa[ 0 ],
        ta = " noopener",
        na = "_blank",
        ia = k && r[ Q ] ? r[ Q ].icon : aa[ 1 ],
        oa = k && r[ Q ] ? r[ Q ].color : aa[ 2 ] || "CAE0FF",
        la = aa[ 3 ] || {},
        ra = la.type,
        sa = aa[ 4 ],
        ca = !1,
        da = !1,
        ua = "",
        ma = {};
      if ( K ) a.target = V, a2a.init( m, a ), oa = "0166FF", ia = Q = "a2a", da = X && 1, 0 <= y.indexOf( "a2a_floating_style" ) && ( V.a2a_floating = 1 );
      else if ( "feed" == Q || "print" == Q ) ta = na = "";
      else if ( "copy_link" == Q ) a2a.add_event( V, "mouseenter", function () {
        a2a.gEl( "a2a_modal" ).style.willChange = "transform, opacity", a2a.gEl( "a2a_overlay" ).style.willChange = "backdrop-filter, opacity"
      } );
      else if ( X && Q && g( Q, c ) ) da = 1;
      else if ( Q && g( Q, s ) ) {
        if ( "1" === navigator.doNotTrack || "1" === window.doNotTrack ) continue;
        a2a.kit[ Q ](), ca = 1
      }
      if ( Q && !g( Q, [ "google_plus", "stumbleupon" ] ) && !ca ) {
        if ( K || ( V.target = na, !k || !r[ Q ] && d( Q, !0 ) ? "feed" == Q ? V.href = V.href || o.linkurl : ( V.href = "/#" + Q, "js" === ra ? a2a.add_event( V, "click", _ ) : ( a2a.add_event( V, "mousedown", _ ), a2a.add_event( V, "keydown", _ ) ), V.rel = "nofollow" + ta ) : V.href = ( t = Q, l = n = void 0, i = u( e = V, {} )[ "a2a-follow" ], l = r[ t ], i && l && ( n = l.url.replace( "${id}", i ) ), n || e.href ), V.a2a = {}, V.a2a.customserviceuri = sa, V.a2a.stype = ra, V.a2a.linkurl = o.linkurl, V.a2a.servicename = ea, V.a2a.safename = Q, la.src && ( V.a2a.js_src = la.src ), la.url && ( V.a2a.url = la.url ), la.pu && ( V.a2a.popup = 1 ), la.na && ( V.a2a.na = 1 ), la.media && ( V.a2a.media = 1 ), h.a2a_codes = h.a2a_codes || [], h.a2a_codes.push( Q ), k || a2a.add_event( V, "click", function ( r, s, c, d, u ) {
            return function ( a ) {
              var e, t, n, i = "js" === u.a2a.stype,
                o = screen.height,
                l = "event=service_click&url=" + A( location.href ) + "&title=" + A( document.title || "" ) + "&ev_service=" + A( r ) + "&ev_service_type=kit&ev_menu_type=" + m + "&ev_url=" + A( c ) + "&ev_title=" + A( d ).replace( /'/g, "%27" );
              t = !( !( e = p( s, u, a ) ) || !e.stop ), n = u.a2a.js_skip, "feed" == m || u.a2a.url || u.a2a.js_src || a2a.postClick( h ), !u.a2a.popup || a2a.defaultPrevented( a ) || "_blank" !== u.target || i || ( a2a.preventDefault( a ), window.open( u.href, "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + ( 450 < o ? Math.round( o / 2 - 225 ) : 40 ) + ",left=" + Math.round( screen.width / 2 - 275 ) ) ), !u.a2a.externalJS && !u.a2a.literalJS || t || n || a2a.runJS( u.a2a ), i && !n && a2a.preventDefault( a ), n && delete u.a2a.js_skip, a2a.util_frame_post( m, l ), a2a.GA.track( s, r, c, "pages", "AddToAny Share/Save Button" )
            }
          }( Q, ea, E, S, V ) ) ), Z.length ) {
          for ( var _a, pa, fa, ga = 0, ha = Z.length; ga < ha; ga++ )
            if ( fa = ( pa = "string" == typeof ( _a = Z[ ga ].className ) ) && ( "a2a_label" === _a || 0 <= _a.indexOf( "a2a_ignore" ) ), 1 == Z[ ga ].nodeType && ( fa || ( G = !0 ), pa && 0 <= _a.indexOf( "a2a_count" ) ) ) {
              q = !0;
              break
            } if ( !G ) {
            for ( var va in ( U = document.createElement( "span" ) ).className = M + ia + " a2a_img_text", oa && ( U.style.backgroundColor = "#" + oa ), "pending" !== ( W = a2a.svg.get( ia, U, N ) ) && ( U.innerHTML = W ), j ) U.style[ va ] = j[ va ];
            V.insertBefore( U, Z[ 0 ] )
          }
        } else {
          for ( var va in ( U = document.createElement( "span" ) ).className = M + ia, oa && ( U.style.backgroundColor = "#" + oa ), "pending" !== ( W = a2a.svg.get( ia, U, N ) ) && ( U.innerHTML = W ), j ) U.style[ va ] = j[ va ];
          V.appendChild( U ), ( U = document.createElement( "span" ) ).className = "a2a_label", U.innerHTML = ea || ( "feed" == m ? a2a.c.localize.Subscribe : a2a.c.localize.Share ), ea || ( U.className += " a2a_localize", U.setAttribute( "data-a2a-localize", "inner," + ( "feed" == m ? "Subscribe" : "Share" ) ) ), V.appendChild( U )
        }
        if ( R && D && D < 20 && ( da = !1 ), da && !q ) {
          for ( var va in ( U = document.createElement( "span" ) ).className = "a2a_count", U.a2a = {}, U.a2a.kit = h, P ) U.style[ va ] = P[ va ];
          V.appendChild( U ), K ? ( U.a2a.is_a2a_dd_counter = 1, h.a2a_dd_counter = U, a2a.counters.get( "facebook", U, O ) ) : a2a.counters.get( Q, U, O )
        }
        "a2a_dd" != J && a2a.kit_services.push( V )
      }
    }
    0 <= y.indexOf( "a2a_default_style" ) && ( x.style.clear = "both", h.appendChild( x ) )
  },
  counters: {
    get: function ( i, o, a, l ) {
      a2a_config.counts;
      var r, e, t = decodeURIComponent( a ),
        n = a2a.counters.bonus( i, t, a, o.a2a.kit ),
        s = "",
        c = a2a.counters[ i ],
        d = c.api,
        u = ( c.cb, o.a2a.is_a2a_dd_counter );
      !l && n && ( s = "2", a2a.counters.get( i, o, n, !0 ) ), "string" != typeof ( r = c[ t ] = c[ t ] || {} ).num || l ? "number" != typeof r.num ? ( r.queued = r.queued || [], r.queued.push( o ), c.n = c.n || 0, c.n++, c[ "cb" + c.n ] = function ( a ) {
        var e, t = a2a.counters[ i ].cb( a, o );
        if ( void 0 !== t ) {
          if ( "string" == typeof t && "facebook" == i ) return "empty" == t ? e = "Note: Facebook no longer provides public API access to share counts. AddToAny is soon launching a premium service to manage private API access to Facebook and display share counts." : "limit" == t && ( e = "Facebook's public share counts API has reached its request limit from your connection. Try again later." ), console && "function" == typeof console.log && console.log( "%c" + e, "color:#1877f2" ), l || ( o.style.display = "none" ), void( r.num = "error" );
          for ( var n = 0; n < r.queued.length; n++ ) queued_count_element = r.queued[ n ], r.num = t, queued_count_element.a2a.is_a2a_dd_counter ? a2a.counters.sum( queued_count_element, t, i + s ) : a2a.counters.set( queued_count_element, t, i + s )
        }
      }, 1 == r.queued.length && ( e = d[ 0 ] + a + ( d[ 1 ] || "&callback" ) + "=a2a.counters." + i + ".cb" + c.n, a2a.dom.ready( function () {
        a2a.loadExtScript( e )
      } ) ) ) : u ? a2a.counters.sum( o, r.num, i + s ) : a2a.counters.set( o, r.num, i + s ) : o.style.display = "none"
    },
    set: function ( a, e, t ) {
      var n = e;
      e = "undefined" != typeof a.a2a.last_count ? a.a2a.last_count + e : e, a.innerHTML = "<span>" + a2a.counters.format( e ) + "</span>", "a2a" != t && ( a.a2a.last_count = n, a2a.counters.sum( a, n, t ) )
    },
    sum: function ( a, e, t ) {
      var n = a.a2a.kit,
        i = n.a2a_counts_sum || 0,
        o = n.a2a_counts_summed || [];
      "a2a" != t && -1 === o.indexOf( t ) && ( i = n.a2a_counts_sum = i + e, ( o = n.a2a_counts_summed = o || [] ).push( t ) ), n.a2a_dd_counter && a2a.counters.set( n.a2a_dd_counter, i, "a2a" )
    },
    format: function ( a ) {
      var e = a2a.counters.format,
        t = "localize";
      return e[ t ] || ( e.locale = a2a.i18n(), e[ t ] = function n() {
        return !( "object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat )
      }() ? function i( a ) {
        return a.toLocaleString( e.locale, {
          maximumFractionDigits: 1
        } )
      } : function o( a, e ) {
        return e && "decimal" === e ? Math.round( 10 * a ) / 10 : a = ( a += "" ).charAt( 0 ) + "," + a.substring( 1 )
      } ), 999 < a && ( a = a < 1e6 ? 1e4 < a ? e[ t ]( a / 1e3, "decimal" ) + "k" : e[ t ]( a ) : a < 1e9 ? e[ t ]( a / 1e6, "decimal" ) + "M" : "1B+" ), a
    },
    bonus: function ( a, e, t, n ) {
      var i, o, l, r = a2a_config.counts,
        s = "%3A%2F%2F";
      return r && ( r.recover_protocol && "http" === r.recover_protocol && ( i = t.replace( /^https%/, "http%" ), e = decodeURIComponent( i ) ), r.recover_domain && ( i = encodeURIComponent( e.replace( /^(https?\:\/\/)(?:[^\/?#]+)([\/?#]|$)/i, "$1" + r.recover_domain + "$2" ) ), e = decodeURIComponent( i ) ), r.recover && "function" == typeof r.recover && ( l = {
        url: ( o = document.createElement( "a" ) ).href = e,
        pathParts: o.pathname.split( "/" ),
        domain: o.hostname,
        protocol: o.protocol,
        kit: n
      }, i = encodeURIComponent( r.recover( l ) ) ) ), !( !i || i === t || -1 !== [ "tumblr" ].indexOf( a ) && i.split( s ).pop() === t.split( s ).pop() ) && i
    },
    avail: [ "facebook", "pinterest", "reddit", "tumblr" ],
    facebook: {
      api: [ "https://graph.facebook.com/?fields=og_object%7Bengagement%7D&id=", "&callback" ],
      cb: function ( a, e ) {
        return a && a.og_object && a.og_object.engagement && !isNaN( a.og_object.engagement.count ) ? a.og_object.engagement.count : a && a.error && a.error.code && 4 === a.error.code ? "limit" : "empty"
      }
    },
    pinterest: {
      api: [ "https://widgets.pinterest.com/v1/urls/count.json?url=" ],
      cb: function ( a, e ) {
        if ( a && !isNaN( a.count ) ) return a.count
      }
    },
    reddit: {
      api: [ "https://www.reddit.com/api/info.json?url=", "&jsonp" ],
      cb: function ( a, e ) {
        var t = a.data;
        if ( a && t && t.children ) {
          for ( var n, i = 0, o = [], l = t.children; i < l.length; i++ )( n = l[ i ].data ) && !isNaN( n.ups ) && o.push( n.ups );
          return 0 < o.length ? Math.max.apply( null, o ) : 0
        }
      }
    },
    tumblr: {
      api: [ "https://api.tumblr.com/v2/share/stats?url=" ],
      cb: function ( a, e ) {
        if ( a && a.response && !isNaN( a.response.note_count ) ) return a.response.note_count
      }
    }
  },
  overlays: function () {
    var a = a2a.c.overlays || [],
      e = !!a2a.evOpts() && {
        passive: !0
      },
      t = window,
      n = t.innerWidth,
      i = t.innerHeight,
      k = n && ( n < 375 || i < 375 ) ? 150 : 200,
      w = 200,
      b = location.href,
      x = document.title || b;

    function o( a, e, t, n, i ) {
      var o, l, r, s, c, d, u, m, _, p = function y( a ) {
          return a.target ? 3 === a.target.nodeType ? a.target.parentNode : a.target : a.srcElement
        }( a ),
        f = p,
        g = 0,
        h = 0,
        v = p.longDesc;
      if ( a2a.matches( p, n ) && "false" !== p.getAttribute( "data-a2a-overlay" ) ) {
        if ( r = p.width < k || p.height < k, s = "naturalWidth" in p && ( p.naturalWidth < w || p.naturalHeight < w ), r || s ) return;
        if ( a2a.matches( p, "header img,footer img" ) ) return;
        l = a2a.getPos( p, "scroll" ), e.style.display = "", c = e.clientHeight || e.offsetHeight, d = e.clientWidth || e.offsetWidth, t[ 0 ] && ( "bottom" === t[ 0 ] ? h = p.height - c : "center" === t[ 0 ] && ( h = A( ( p.height - c ) / 2 ) ) ), t[ 1 ] && ( "right" === t[ 1 ] ? g = p.width - d : "center" === t[ 1 ] && ( g = A( ( p.width - d ) / 2 ) ) ), u = l.left + g, m = l.top + h, e.style.left = u + "px", e.style.top = m + "px", e.setAttribute( "data-a2a-media", p.src ), ( e.a2a_mediaNode = p ).alt ? e.setAttribute( "data-a2a-title", p.alt ) : e.setAttribute( "data-a2a-title", x ), !v || "#" !== v.substr( 0, 1 ) && "http" !== v.substr( 0, 4 ) ? i ? e.setAttribute( "data-a2a-url", p.src ) : e.setAttribute( "data-a2a-url", b ) : ( _ = "#" === v.substr( 0, 1 ) ? b.split( "#" )[ 0 ] + p.longDesc : v, e.setAttribute( "data-a2a-url", _ ) )
      } else if ( "none" !== e.style.display ) {
        for ( ;
          ( o = f ) && "body" !== f.tagName.toLowerCase(); ) {
          if ( o === e ) return;
          f = f.parentNode
        }
        e.style.display = "none"
      }
    }
    for ( var l = 0, r = a.length; l < r; l++ ) {
      var s, c = a[ l ],
        d = c.services || [ "pinterest", "facebook" ],
        u = "",
        m = c.html,
        _ = c.position,
        p = c.style,
        f = c.size || 32,
        g = c.target,
        h = c.useImage,
        A = Math.round;
      if ( _ = _ && 2 < _.length ? _.split( " " ) : [ "top", "left" ], p = !p || "horizontal" !== p && "default" !== p ? "vertical" : "default", g = g || "img", m ) document.body.insertAdjacentHTML( "beforeend", m ), s = document.body.lastChild;
      else {
        for ( var v = 0, y = d.length; v < y; v++ ) {
          u += '<a class="a2a_button_' + d[ v ] + '"></a>'
        }( s = document.createElement( "div" ) ).className = "a2a_kit a2a_kit_size_" + f + " a2a_overlay_style a2a_" + p + "_style", s.innerHTML = u, document.body.insertBefore( s, null )
      }
      s.style.display = "none", s.style.position = "absolute", s.setAttribute( "data-a2a-title", x ), s.setAttribute( "data-a2a-url", b ), a2a.add_event( document.body, "mouseover", function ( e, t, n, i ) {
        return function ( a ) {
          o( a, e, t, n, i )
        }
      }( s, _, g, h ), e )
    }
    a2a.c.overlays = []
  },
  init_show: function () {
    var a = a2a_config,
      e = a2a[ a2a.type ],
      t = a2a.show_menu,
      n = a2a.init_show,
      i = a2a.n;
    a.bookmarklet && ( e.no_hide = 1, a2a.sole_index = i, t() ), a.show_menu && ( e.no_hide = 1, a2a.sole_index = i, t( !1, a.show_menu ), a.show_menu = !1 ), n.a2a_done = 1
  },
  unindexed: function ( o, a ) {
    var e = document,
      t = a2a.getByClass,
      n = t( "a2a_kit", e ),
      i = a2a.HTMLcollToArray( e.getElementsByName( "a2a_dd" ) ).concat( t( "a2a_dd", e ) );

    function l( a ) {
      for ( var e, t, n = 0, i = a.length; n < i; n++ )
        if ( ( "undefined" == typeof ( e = a[ n ] ).a2a_index || "" === e.a2a_index ) && e.className.indexOf( "a2a_target" ) < 0 && e.parentNode.className.indexOf( "a2a_kit" ) < 0 && ( t = o( e ) ), t ) return t;
      return null
    }
    if ( a ) return l( n ) || l( i );
    l( n.concat( i ) )
  },
  set_this_index: function ( a ) {
    var e = a2a.n;

    function t( a ) {
      if ( !( 0 <= a.className.indexOf( "a2a_kit" ) ) ) return !1;
      a.a2a_kit = 1, 0 <= a.className.indexOf( "a2a_follow" ) && ( a.a2a_follow = 1 )
    }
    return a ? ( a.a2a_index = e, t( a ), a ) : a2a.unindexed( function ( a ) {
      return a.a2a_index = e, t( a ), a
    }, !0 )
  },
  gEl: function ( a ) {
    return document.getElementById( a )
  },
  getByClass: function ( a, e, t ) {
    return document.getElementsByClassName && /\{\s*\[native code\]\s*\}/.test( "" + document.getElementsByClassName ) ? a2a.getByClass = function ( a, e, t ) {
      for ( var n, i = ( e = e || a2a.gEl( "a2a" + a2a.type + "_dropdown" ) ).getElementsByClassName( a ), o = t ? new RegExp( "\\b" + t + "\\b", "i" ) : null, l = [], r = 0, s = i.length; r < s; r += 1 ) n = i[ r ], o && !o.test( n.nodeName ) || l.push( n );
      return l
    } : document.evaluate ? a2a.getByClass = function ( a, e, t ) {
      t = t || "*", e = e || a2a.gEl( "a2a" + a2a.type + "_dropdown" );
      for ( var n, i, o = a.split( " " ), l = "", r = "http://www.w3.org/1999/xhtml", s = document.documentElement.namespaceURI === r ? r : null, c = [], d = 0, u = o.length; d < u; d += 1 ) l += "[contains(concat(' ',@class,' '), ' " + o[ d ] + " ')]";
      try {
        n = document.evaluate( ".//" + t + l, e, s, 0, null )
      } catch ( m ) {
        n = document.evaluate( ".//" + t + l, e, null, 0, null )
      }
      for ( ; i = n.iterateNext(); ) c.push( i );
      return c
    } : a2a.getByClass = function ( a, e, t ) {
      t = t || "*", e = e || a2a.gEl( "a2a" + a2a.type + "_dropdown" );
      for ( var n, i, o = a.split( " " ), l = [], r = "*" === t && e.all ? e.all : e.getElementsByTagName( t ), s = [], c = 0, d = o.length; c < d; c += 1 ) l.push( new RegExp( "(^|\\s)" + o[ c ] + "(\\s|$)" ) );
      for ( var u = 0, m = r.length; u < m; u += 1 ) {
        n = r[ u ], i = !1;
        for ( var _ = 0, p = l.length; _ < p && ( i = l[ _ ].test( n.className ) ); _ += 1 );
        i && s.push( n )
      }
      return s
    }, a2a.getByClass( a, e, t )
  },
  HTMLcollToArray: function ( a ) {
    for ( var e = [], t = a.length, n = 0; n < t; n++ ) e[ e.length ] = a[ n ];
    return e
  },
  matches: function ( a, e ) {
    var t, n = "MatchesSelector",
      i = "ms" + n,
      o = "webkit" + n;
    if ( a.matches ) t = "matches";
    else if ( a[ i ] ) t = i;
    else {
      if ( !a[ o ] ) return !( a2a.matches = function ( a, e ) {
        return !1
      } );
      t = o
    }
    return a2a.matches = function ( a, e ) {
      return a[ t ]( e )
    }, a2a.matches( a, e )
  },
  evOpts: function () {
    var a = !1;
    try {
      var e = Object.defineProperty( {}, "passive", {
        get: function () {
          a = !0
        }
      } );
      window.addEventListener( "test", null, e )
    } catch ( t ) {}
    return a2a.evOpts = function () {
      return a
    }, a
  },
  add_event: function ( a, e, t, n ) {
    if ( a.addEventListener ) {
      if ( "object" == typeof n ) {
        var i = !!n.useCapture;
        n = a2a.evOpts() ? n : i
      }
      return a.addEventListener( e, t, n ), {
        destroy: function () {
          a.removeEventListener( e, t, n )
        }
      }
    }
    var o = function () {
      t.call( a, window.event )
    };
    return a.attachEvent( "on" + e, o ), {
      destroy: function () {
        a.detachEvent( "on" + e, o )
      }
    }
  },
  stopPropagation: function ( a ) {
    a || ( a = window.event ), a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()
  },
  preventDefault: function ( a ) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  },
  defaultPrevented: function ( a ) {
    return !!( a.defaultPrevented || !1 === a.returnValue || "undefined" == typeof a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() )
  },
  onLoad: function ( a ) {
    var e = window.onload;
    "function" != typeof window.onload ? window.onload = a : window.onload = function () {
      e && e(), a()
    }
  },
  in_array: function ( a, e, t, n, i ) {
    if ( "object" == typeof e ) {
      a = a.toLowerCase();
      for ( var o, l = e.length, r = 0; r < l; r++ )
        if ( o = n ? e[ r ][ n ] : e[ r ], o = i ? o[ i ] : o, t ) {
          if ( a == o.toLowerCase() ) return e[ r ]
        } else if ( -1 != a.indexOf( o.toLowerCase() ) && "" !== o ) return e[ r ]
    }
    return !1
  },
  serialize: function ( a, e ) {
    var t = [];
    for ( var n in a )
      if ( a.hasOwnProperty( n ) ) {
        var i = e ? e + "[" + n + "]" : n,
          o = a[ n ];
        t.push( "object" == typeof o ? a2a.serialize( o, i ) : encodeURIComponent( i ) + "=" + encodeURIComponent( o ) )
      } return t.join( "&" )
  },
  throttle: function ( t, n, i ) {
    var o, l, r, s;
    previous = 0, i || ( i = {} );
    var c = Date.now || function () {
        return ( new Date ).getTime()
      },
      d = function () {
        previous = !1 === i.leading ? 0 : c(), o = null, s = t.apply( l, r ), o || ( l = r = null )
      },
      a = function () {
        var a = c();
        previous || !1 !== i.leading || ( previous = a );
        var e = n - ( a - previous );
        return l = this, r = arguments, e <= 0 || n < e ? ( o && ( clearTimeout( o ), o = null ), previous = a, s = t.apply( l, r ), o || ( l = r = null ) ) : o || !1 === i.trailing || ( o = setTimeout( d, e ) ), s
      };
    return a.cancel = function () {
      clearTimeout( o ), previous = 0, o = l = r = null
    }, a
  },
  scrollToggle: function ( a, e ) {
    ( e = e.split( "," ) )[ 0 ] && e[ 0 ].trim(), e[ 1 ] && e[ 1 ].trim();
    var n, o = window,
      t = parseInt( e[ 0 ], 10 ) || 0,
      i = parseInt( e[ 1 ], 10 ) || 0,
      l = function ( a, e, t ) {
        var n = o.pageYOffset,
          i = document.documentElement.scrollHeight - o.innerHeight - n;
        a.style.display = e <= n && t <= i ? "" : "none"
      }.bind( null, a, t, i );
    ( t || i ) && ( a2a.scrollToggle.handlers = a2a.scrollToggle.handlers || [], ( n = a2a.scrollToggle.handlers ).push( l ), n.length < 2 && o.addEventListener( "scroll", a2a.throttle( function () {
      for ( var a = 0, e = n, t = e.length; a < t; a++ ) e[ a ]()
    }, 20 ) ), l() )
  },
  miniLeaveDelay: function () {
    var a = a2a.type,
      e = "a2a" + a,
      t = a2a.gEl;
    a2a.isDisplayed( t( e + "_dropdown" ) ) && "none" === a2a.getStyle( t( e + "_full" ), "display" ) && ( a2a[ a ].out_delay = setTimeout( function () {
      a2a.toggle_dropdown( "none", a ), a2a[ a ].out_delay = null
    }, 501 ) )
  },
  miniEnterStay: function () {
    a2a.type = a2a[ "n" + ( a2a.sole_index || a2a.n ) ].type;
    var a = a2a.type;
    a2a[ a ] && a2a[ a ].out_delay && clearTimeout( a2a[ a ].out_delay )
  },
  toggle_dropdown: function ( a, e ) {
    if ( "none" != a || !a2a[ e ].no_hide ) {
      var t = ( 0, a2a.gEl )( "a2a" + e + "_dropdown" ),
        n = ( document.activeElement, a2a.show_menu.key_listener );
      t.style.display = a, a2a.miniEnterStay(), "none" == a && ( a2a.show_menu[ "doc_click_listener_" + e ].destroy(), delete a2a[ e ].doc_click_close_mini, n && n[ e ] && n[ e ].destroy() )
    }
  },
  getData: function ( a ) {
    if ( !a ) return {};
    for ( var e, t = 0, n = a.attributes.length, i = {}; t < n; t++ )( e = a.attributes[ t ] ).name && "data-" == e.name.substr( 0, 5 ) && ( i[ e.name.substr( 5 ) ] = e.value );
    return i
  },
  getStyle: function ( a, e ) {
    return a ? a.currentStyle ? a.currentStyle[ e.replace( /-(\w)/gi, function ( a, e ) {
      return e.toUpperCase()
    } ) ] : window.getComputedStyle( a, null ).getPropertyValue( e ) : null
  },
  isDisplayed: function ( a ) {
    var e = a2a.getStyle( a, "display" );
    return !( !e || "none" === e )
  },
  getPos: function ( a, e ) {
    var t, n = Math.round,
      i = ( a2a.getScrollDocDims, "scroll" === e ? a2a.getScrollDocDims( "w" ) : 0 ),
      o = "scroll" === e ? a2a.getScrollDocDims( "h" ) : 0;
    return "undefined" == typeof a.getBoundingClientRect ? a2a.getPosOld( a ) : {
      left: n( ( t = a.getBoundingClientRect() ).left + i ),
      top: n( t.top + o )
    }
  },
  getPosOld: function ( a ) {
    for ( var e = 0, t = 0; e += a.offsetLeft || 0, t += a.offsetTop || 0, a = a.offsetParent; );
    return {
      left: e,
      top: t
    }
  },
  getDocDims: function ( a ) {
    var e = 0,
      t = 0;
    return "number" == typeof window.innerWidth ? ( e = window.innerWidth, t = window.innerHeight ) : document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ? ( e = document.documentElement.clientWidth, t = document.documentElement.clientHeight ) : document.body && ( document.body.clientWidth || document.body.clientHeight ) && ( e = document.body.clientWidth, t = document.body.clientHeight ), "w" == a ? e : t
  },
  getScrollDocDims: function ( a ) {
    var e = 0,
      t = 0;
    return "number" == typeof window.pageYOffset ? ( e = window.pageXOffset, t = window.pageYOffset ) : document.body && ( document.body.scrollLeft || document.body.scrollTop ) ? ( e = document.body.scrollLeft, t = document.body.scrollTop ) : document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) && ( e = document.documentElement.scrollLeft, t = document.documentElement.scrollTop ), "w" == a ? e : t
  },
  show_more_less: function ( a ) {
    var e = "a2a" + a2a.type;
    ( 0, a2a.gEl )( e + "_show_more_less" );
    a2a.show_full()
  },
  focus_find: function () {
    var a = a2a.gEl( "a2a" + a2a.type + "_find" );
    "none" != a.parentNode.style.display && a.focus()
  },
  default_services: function ( a ) {
    for ( var e = a || a2a.type, t = a2a[ e ].main_services_col_1, n = t.length, i = 0; i < n; i++ ) t[ i ].style.display = ""
  },
  do_find: function () {
    var a, e = a2a.type,
      t = a2a[ e ].main_services,
      n = t.length,
      i = a2a.gEl( "a2a" + e + "_find" ).value,
      o = a2a.in_array;
    if ( "" !== i ) {
      a = i.split( " " );
      for ( var l = 0; l < n; l++ ) o( t[ l ].a2a.serviceNameLowerCase, a, !1 ) ? t[ l ].style.display = "" : t[ l ].style.display = "none"
    } else a2a.default_services()
  },
  selection: function ( a ) {
    var e, t, n = document.getElementsByTagName( "meta" ),
      i = n.length;
    if ( window.getSelection ) e = window.getSelection() + "";
    else if ( document.selection ) {
      try {
        e = document.selection.createRange()
      } catch ( s ) {
        e = ""
      }
      e = e.text ? e.text : ""
    }
    if ( e && "" !== e ) return e;
    if ( a2a[ "n" + a2a.n ].linkurl === location.href && -1 === [ "facebook", "twitter", "linkedin" ].indexOf( a ) )
      for ( var o, l, r = 0; r < i; r++ )
        if ( o = ( o = n[ r ].getAttribute( "name" ) ) ? o.toLowerCase() : "", l = ( l = n[ r ].getAttribute( "property" ) ) ? l.toLowerCase() : "", o && "description" === o || l && "og:description" === l ) {
          t = n[ r ].getAttribute( "content" );
          break
        } return t ? t.substring( 0, 1200 ) : ""
  },
  collections: function ( a ) {
    var e = a2a.gEl,
      t = a2a[ a ],
      n = "a2a" + a;
    t.main_services_col_1 = a2a.getByClass( "a2a_i", e( n + "_full_services" ), "a" ), t.main_services = t.main_services_col_1, t.email_services = a2a.getByClass( "a2a_i", e( n + "_2_col1", "a" ) ), t.all_services = t.main_services.concat( t.email_services )
  },
  cbs: function ( a, e ) {
    var t = a2a.c.callbacks || [],
      n = a2a.c.tracking_callback,
      i = {};
    n && ( n[ a ] ? t.push( n ) : n[ 0 ] == a ? ( i[ a ] = n[ 1 ], t.push( i ) ) : "function" == typeof n && ( i[ a ] = n, t.push( i ) ), a2a.c.tracking_callback = null );
    for ( var o, l = 0, r = t.length; l < r; l++ )
      if ( "function" == typeof ( o = t[ l ][ a ] ) && ( returned = o( e ), "ready" == a && ( o = null ), "undefined" != typeof returned ) ) return returned
  },
  linker: function ( a ) {
    var e, t, n = location.href,
      i = document.title || n,
      o = a.parentNode,
      l = a2a[ "n" + ( o.a2a_index || o.parentNode.a2a_index || a2a.sole_index || a2a.n ) ],
      r = l.type,
      s = a.a2a.safename,
      c = l.linkurl_implicit && n != l.linkurl ? n : l.linkurl,
      d = encodeURIComponent( c ).replace( /'/g, "%27" ),
      u = l.linkname_implicit && i != l.linkname ? i : l.linkname,
      m = encodeURIComponent( u ).replace( /'/g, "%27" ),
      _ = l.linkmedia,
      p = !!_ && encodeURIComponent( _ ).replace( /'/g, "%27" ),
      f = encodeURIComponent( a2a.selection( s ) ).replace( /'/g, "%27" ),
      g = !l.track_links || "page" != r && "mail" != r ? "" : "&linktrack=" + l.track_links + "&linktrackkey=" + encodeURIComponent( l.track_links_key ),
      h = a.a2a.customserviceuri || !1,
      v = a.a2a.stype,
      y = a.a2a.js_src,
      k = a.a2a.url,
      w = a.a2a.media,
      b = a.a2a.na,
      x = a2a.c.templates,
      A = x[ s ],
      E = "email",
      C = navigator.userAgent,
      S = -1 != C.indexOf( "Safari" ) && -1 == C.indexOf( "Chrome" ),
      B = a2a.is_mobile;

    function T( a ) {
      return encodeURIComponent( a ).replace( /'/g, "%27" ).replace( /%24%7Blink%7D/g, "${link}" ).replace( /%24%7Blink_noenc%7D/g, "${link_noenc}" ).replace( /%24%7Blink_nohttp%7D/g, "${link_nohttp}" ).replace( /%24%7Bmedia%7D/g, "${media}" ).replace( /%24%7Btitle%7D/g, "${title}" ).replace( /%24%7Btitle_noenc%7D/g, "${title_noenc}" ).replace( /%24%7Bnotes%7D/g, "${notes}" )
    }
    if ( w && p ) a.a2a.js_skip = 1, a.target = "_blank";
    else if ( v && "js" == v && y ) a.target = "", "javascript:" == y.substr( 0, 11 ) ? ( t = y.replace( "${link}", c.replace( /'/g, "\\'" ) ), a.a2a.literalJS = t.substr( 11 ) ) : a.a2a.externalJS = y, e = "#" + s;
    else if ( k && ( s != E || s == E && ( B || S ) ) && !g ) {
      if ( a.target = "", "object" == typeof A )
        for ( var F in A ) k = a2a.urlParam( k, F, T( A[ F ] ) );
      else "string" == typeof A && ( k = a2a.urlParam( k, "text", T( A ) ) );
      e = k.replace( /\$\{link\}/g, d ).replace( /\$\{media\}/g, p ).replace( /\$\{link_noenc\}/g, c ).replace( /\$\{link_nohttp\}/g, c.replace( /^https?:\/\//, "" ) ).replace( /\$\{title\}/g, m )
    } else h && "undefined" != h && ( e = h.replace( /A2A_LINKNAME_ENC/, m ).replace( /A2A_LINKURL_ENC/, d ).replace( /A2A_LINKNOTE_ENC/, f ) );
    return B && b && ( a.target = "" ), a.href = e || "http" + a2a.c.http_s + "://www.addtoany.com/add_to/" + s + "?linkurl=" + d + "&linkname=" + m + ( p ? "&linkmedia=" + p : "" ) + g + function L() {
      var a = "";
      return A ? a = "&" + a2a.serialize( {
        template: A
      } ) : x[ E ] && v && v == E && ( a = "&" + a2a.serialize( {
        template: x[ E ]
      } ) ), a
    }() + ( "feed" == r ? "&type=feed" : "" ) + "&linknote=" + f, !0
  },
  runJS: function ( a ) {
    if ( a.literalJS ) {
      var e = document.createElement( "script" ),
        t = a2a.nonce;
      t && e.setAttribute( "nonce", t ), e.textContent = a.literalJS, a2a.head_tag.appendChild( e )
    } else a.externalJS && a2a.loadExtScript( a.externalJS )
  },
  animate: function ( a, e, t ) {
    if ( e ) {
      var n = a2a.isDisplayed( e ),
        i = e.classList,
        o = "a2a_starting",
        l = "transitionend";
      if ( "show" === a ) {
        if ( n ) return;
        ! function r( a, e ) {
          e && a2a.getStyle( a, "transition-duration" ) && e.add( o )
        }( e, i ), e.style.display = "block", i && setTimeout( function () {
          i.remove( o )
        }, 1 )
      } else i ? n ? ( e.addEventListener( l, function s() {
        e.style.display = "show" === a ? "block" : "none", t && t(), e.removeEventListener( l, s, !1 )
      }, !1 ), i.add( o ) ) : t && t() : t && ( e.style.display = "none", t() )
    }
  },
  overlay: {
    show: function () {
      var a = a2a.gEl,
        n = a2a.type,
        e = "a2a" + n,
        t = a( "a2a_overlay" ),
        i = a( e + "_find" );
      "none" === a2a.getStyle( t, "display" ) && ( a2a.animate( "show", t ), a2a.overlay.key_listener = a2a.add_event( document, "keydown", function ( a ) {
        var e = ( a = a || window.event ).which || a.keyCode,
          t = document.activeElement;
        27 == e && i != t ? a2a.hide_modals( n ) : 40 < e && e < 91 && i != t && i.focus()
      } ) )
    },
    hide: function ( a ) {
      var e = a2a.gEl( "a2a_overlay" ),
        t = a2a.overlay,
        n = t.key_listener;
      a2a.animate( "hide", e, a ), n && ( n.destroy(), setTimeout( function () {
        delete t.key_listener
      }, 1 ) )
    }
  },
  hide_modals: function ( a ) {
    var e = a2a.gEl,
      t = "a2a" + a,
      n = e( t + "_full" ),
      i = e( "a2a_overlay" ),
      o = e( "a2a_modal" );
    a2a.show_full.full_shown = !1, a2a.animate( "hide", o ), a2a.animate( "hide", n ), a2a.overlay.hide( function l() {
      i.style.display = o.style.display = "none", i.style.willChange = o.style.willChange = "", n && ( n.style.display = "none", n.style.willChange = "" ), a2a.thanks.showing = !1, a2a.isDisplayed( e( t + "_dropdown" ) ) && e( t + "_show_more_less" ).focus()
    } )
  },
  show_modal: function () {
    a2a.type;
    for ( var a = a2a.gEl, e = ( a( "a2a_overlay" ), a( "a2a_modal" ) ), t = a2a.getByClass( "a2a_modal_body", e ), n = 0; n < t.length; n++ ) t[ n ].style.display = "none";
    a2a.overlay.show(), a2a.animate( "show", e )
  },
  show_full: function () {
    var a = a2a.type,
      e = "a2a" + a,
      t = a2a.gEl,
      n = a2a.getByClass,
      i = t( e + "_full" ),
      o = n( "a2a_full_header", i )[ 0 ],
      l = t( e + "_full_services" ),
      r = n( "a2a_full_footer", i )[ 0 ];
    a2a.fill_menus( a ), a2a.overlay.show(), a2a.animate( "show", i ), l.style.cssText = "height:calc(10px)", l.style.height.length && ( l.style.height = "calc(100% - " + ( o.offsetHeight + r.offsetHeight ) + "px)" ), i.focus(), a2a.stats( "full" )
  },
  show_menu: function ( a, e ) {
    a ? a2a.n = a.a2a_index : a2a.sole_index && ( a2a.n = a2a.sole_index );
    var t, n, i, o, l, r, s, c, d, u, m, _, p = a2a[ "n" + a2a.n ],
      f = a2a.type = p.type,
      g = "a2a" + f,
      h = a2a.gEl( g + "_dropdown" ),
      v = a2a.has_touch,
      y = v ? "touchstart" : "click",
      k = !( !v || !a2a.evOpts() ) && {
        passive: !0
      };
    a2a.fill_menus( f ), a2a.gEl( g + "_title" ).value = p.linkname, a2a.toggle_dropdown( "block", f ), i = [ h.clientWidth, h.clientHeight ], o = a2a.getDocDims( "w" ), l = a2a.getDocDims( "h" ), a ? ( n = ( t = a.a2a_floating ) ? "viewport" : "scroll", h.style.position = t ? "fixed" : "", r = t ? 0 : a2a.getScrollDocDims( "w" ), s = t ? 0 : a2a.getScrollDocDims( "h" ), m = ( c = a.getElementsByTagName( "img" )[ 0 ] ) ? ( d = a2a.getPos( c, n ), u = c.clientWidth, c.clientHeight ) : ( d = a2a.getPos( a, n ), u = a.offsetWidth, a.offsetHeight ), d.left - r + i[ 0 ] + u > o && ( d.left = d.left - i[ 0 ] + u - 8 ), ( "up" == p.orientation || "down" != p.orientation && d.top - s + i[ 1 ] + m > l && d.top > i[ 1 ] ) && ( d.top = d.top - i[ 1 ] - m ), h.style.left = ( d.left < 0 ? 0 : d.left ) + 2 + "px", h.style.top = d.top + m + "px" ) : ( e || ( e = {} ), h.style.position = e.position || "absolute", h.style.left = e.left || o / 2 - i[ 0 ] / 2 + "px", h.style.top = e.top || l / 2 - i[ 1 ] / 2 + "px" ), a2a[ f ].doc_click_close_mini || a2a[ f ].no_hide || ( a2a[ f ].doc_click_close_mini = ( _ = f, function ( a ) {
      !a2a.ieo() && "number" == typeof a.button && 0 < a.button || ( a2a[ f ].last_focus && a2a[ f ].last_focus.focus(), a2a.toggle_dropdown( "none", _ ) )
    } ), a2a.show_menu[ "doc_click_listener_" + f ] = a2a.add_event( document, y, a2a[ f ].doc_click_close_mini, k ) ), a2a.show_menu.key_listener = a2a.show_menu.key_listener || {}, a2a.show_menu.key_listener[ f ] = a2a.add_event( document, "keydown", function ( a ) {
      27 != ( ( a = a || window.event ).which || a.keyCode ) || a2a.overlay.key_listener || a2a.toggle_dropdown( "none", f )
    } ), a2a.svg.load();
    var w = encodeURIComponent,
      b = "event=menu_show&url=" + w( location.href ) + "&title=" + w( document.title || "" ) + "&ev_menu_type=" + f;
    a2a.util_frame_post( f, b )
  },
  fill_menus: function ( a ) {
    if ( a2a.fill_menus.a2a = a2a.fill_menus.a2a || {}, !a2a.fill_menus.a2a[ a ] ) {
      var e, t, n = "a2a" + a,
        i = a2a.gEl,
        o = a2a.make_service,
        l = document.createDocumentFragment(),
        r = document.createDocumentFragment(),
        s = a2a[ a ].services,
        c = i( n + "_find" ),
        d = document.createElement( "i" );
      if ( "mail" != a ) {
        for ( var u = 0, m = s.most, _ = m.length, p = parseInt( a2a[ a ].num_services ), f = 0, g = a2a[ a ].exclude_services; u < _; u++ ) {
          var h = m[ u ];
          g && a2a.in_array( h[ 1 ], g, !0 ) || l.appendChild( o( h[ 0 ], h[ 1 ], h[ 2 ], h[ 3 ], h[ 4 ] ) ), !( f < p ) || g && a2a.in_array( h[ 1 ], g, !0 ) || ( r.appendChild( o( h[ 0 ], h[ 1 ], h[ 2 ], h[ 3 ], h[ 4 ] ) ), f++ )
        }
        i( n + "_full_services" ).appendChild( l ), i( n + "_mini_services" ).appendChild( r )
      }
      t = i( n + "_full_services" ), d.className = "a2a_i", e = d.cloneNode(), t.appendChild( d ), t.appendChild( e );
      u = 0;
      for ( var v = s.email, y = v.length; u < y; u++ ) {
        h = v[ u ];
        g && a2a.in_array( h[ 1 ], g, !0 ) || i( n + "_2_col1" ).appendChild( o( h[ 0 ], h[ 1 ], h[ 2 ], h[ 3 ], h[ 4 ] ) )
      }
      a2a.arrange_services(), a2a.util_frame_listen( a ), a2a.collections( a ), a2a.default_services(), "mail" != a && ( c.onkeydown = function ( a ) {
        var e = ( a = a || window.event ).which || a.keyCode,
          t = a2a.type;
        if ( 13 == e ) {
          for ( var n, i = 0, o = a2a[ t ].main_services, l = o.length; i < l; i++ )
            if ( "none" != ( n = o[ i ] ).style.display ) return n.focus(), !1
        } else 27 == e && ( "" == c.value && c.blur(), c.value = "", a2a.do_find() )
      } ), a2a.fill_menus.a2a[ a ] = 1
    }
  },
  bmBrowser: function () {},
  copyLink: function ( a ) {
    var e = a2a.gEl,
      t = ( a2a.getStyle, e( "a2apage_full" ) ),
      n = ( e( "a2a_overlay" ), e( "a2a_modal" ) ),
      i = e( "a2a_copy_link" ),
      o = e( "a2a_copy_link_copied" ),
      l = e( "a2a_copy_link_text" );

    function r() {
      n.setAttribute( "aria-label", "Copy link" ), l.value = a, a2a.show_modal(), i.style.display = "block", n.focus(), a2a.stats( "copy" )
    }
    a2a.show_full.full_shown = a2a.isDisplayed( t ), a2a.copyLink.clickListen || ( a2a.add_event( l, "click", function ( a ) {
      l.setSelectionRange ? l.setSelectionRange( 0, l.value.length ) : l.select(), document.execCommand && document.execCommand( "copy" ) && ( l.blur(), o.style.display = "block", setTimeout( function () {
        n.style.display = i.style.display = o.style.display = "none", a2a.show_full.full_shown ? a2a.show_full() : a2a.hide_modals( "page" )
      }, 700 ) )
    } ), a2a.copyLink.clickListen = 1 ), a2a.show_full.full_shown ? a2a.animate( "hide", t, r ) : r()
  },
  thanks: {
    off: function () {
      var a = a2a_config.thanks;
      return "boolean" == typeof a && !1 === a || a && "boolean" == typeof a.postShare && !1 === a.postShare
    },
    show: function () {
      var a = a2a.ads,
        e = "a2a" + a2a.type,
        t = a2a.gEl,
        n = a2a.getStyle,
        i = t( "a2a_modal" ),
        o = t( e + "_full" ),
        l = t( "a2a_thanks" ),
        r = a2a_config.thanks,
        s = a2a.thanks.off();

      function c() {
        i.setAttribute( "aria-label", "Thanks for sharing" ), a2a.show_modal(), l.style.display = "inline-block", a2a.thanks.showing = !0
      }
      a2a.ads.lit() && r && !s && ( a.has( !0 ) || r.postShare ) && !a2a.thanks.showing && "none" === n( i, "display" ) && ( a2a.isDisplayed( o ) ? a2a.animate( "hide", o, c ) : c() )
    },
    showing: !1
  },
  postClick: function ( a ) {
    var e = window,
      _ = document,
      t = a2a.thanks,
      n = "blur",
      i = "focus",
      o = "waiting";
    a2a.ads;

    function l() {
      a2a.stats( "post" ), a2a.thanks.show(), e.removeEventListener( i, l ), t[ o ] = 0
    }
    t[ o ] || ( t[ o ] = 1, e.addEventListener( n, function r() {
      e.removeEventListener( n, r ), e.addEventListener( i, l ),
        function m( a ) {
          var e, t = a2a.gEl,
            n = "",
            i = a ? a.a2a_index : null,
            o = a ? a.a2a_codes : [ "facebook", "twitter", "email" ],
            l = a2a[ "n" + ( i || a2a.n ) ],
            r = l.type,
            s = t( "a2a_thanks" ),
            c = "a2a_thanks_kit",
            d = t( c );
          d || ( ( d = _.createElement( "div" ) ).id = c, s.appendChild( d ) ), d.innerHTML = "", ( e = _.createElement( "div" ) ).className = "a2a_kit a2a_kit_size_32 a2a_default_style", e.setAttribute( "data-a2a-url", l.linkurl ), e.setAttribute( "data-a2a-title", l.linkname ), l.linkmedia && e.setAttribute( "data-a2a-media", l.linkmedia ), e.style.display = "flex", e.style.justifyContent = "center";
          for ( var u = 0; u < o.length && u < 8; u++ ) n += '<a class="a2a_button_' + o[ u ] + '"></a>';
          e.innerHTML = n, d.appendChild( e ), a2a.init( "page", {
            target: e
          } ), a2a.type = r
        }( a )
    } ) )
  },
  loadExtScript: function ( a, t, n ) {
    var e = document.createElement( "script" );
    if ( e.charset = "UTF-8", e.src = a, document.body.appendChild( e ), "function" == typeof t ) var i = setInterval( function () {
      var a = !1;
      try {
        a = t.call()
      } catch ( e ) {}
      a && ( clearInterval( i ), n.call() )
    }, 100 )
  },
  domEval: function ( a, e ) {
    var o = /^$|^module$|\/(?:java|ecma)script/i;

    function l() {
      var a = document.createEvent( "Event" );
      a.initEvent( "DOMContentLoaded", !0, !0 ), document.dispatchEvent( a )
    }
    e.innerHTML = a,
      function r( a ) {
        var t, e = a.querySelectorAll( "script" ),
          n = [];
        [].forEach.call( e, function ( e ) {
          ( t = e.getAttribute( "type" ) ) && !o.test( t ) || n.push( function ( a ) {
            ! function n( a, e ) {
              var t = document.createElement( "script" );
              a.src ? ( t.onload = e, t.onerror = e, t.src = a.src ) : t.textContent = a.innerText, document.head.appendChild( t ), a.src || e()
            }( e, a )
          } )
        } ), n.length && function i( a, e, t ) {
          void 0 === t && ( t = 0 ), a[ t ]( function () {
            ++t === a.length ? e() : i( a, e, t )
          } )
        }( n, l )
      }( e )
  },
  ads: {
    lit: function () {
      var a = a2a_config.thanks;
      return !( ( a2a.gEl( "wpadminbar" ) || "undefined" != typeof wp && wp.customize ) && ( !a || !a.postShare ) )
    },
    has: function ( a ) {
      var e = {},
        t = !1,
        n = window;
      return ( "object" == typeof adsbygoogle && adsbygoogle.loaded || "object" == typeof google_ad_modifications ) && ( e.as = t = !0 ), "object" == typeof googletag && googletag.slots && "function" == typeof Object.keys && 0 < Object.keys( googletag.slots ).length && ( e.dc = t = !0 ), n.vglnk && n.vglnk.key && ( e.vl = t = !0 ), n.__SKIM_JS_GLOBAL__ && ( e.sl = t = !0 ), ( n.amazon_ad_tag || n.amzn_assoc_ad ) && ( e.az = t = !0 ), !( a && !e.as && !e.dc ) && ( t ? e : void 0 )
    },
    set: function ( a ) {
      var i = a2a.gEl,
        o = ( a2a.type, "a2a_thanks_a2a_ad" ),
        e = "a2a_thanks_pub_ad",
        l = i( o ),
        r = i( e ),
        s = i( "a2a_thanks" ),
        t = a2a_config.thanks,
        n = "boolean" == typeof t && !1 === t || t && "boolean" == typeof t.postShare && !1 === t.postShare || t && "boolean" == typeof t.ad && !1 === t.ad,
        c = t && "undefined" != typeof t.ad && !1 !== t.ad;

      function d() {
        var a = window.innerHeight,
          e = a < 460,
          t = Math.max( .5, ( a / 600 ).toFixed( 1 ) ),
          n = Math.floor( 250 * ( t - 1 ) / 2 );
        l.style.marginTop = a < 360 ? "25px" : "45px", l.style.transform = e ? "translateY(" + n + "px) scale(" + t + ")" : "none"
      }( a2a.ads.lit() && a2a.ads.has( !0 ) && !n || c ) && ( t && "string" == typeof t.ad && t.ad && .5 <= Math.random() ? function u() {
        if ( l && ( l.style.display = "none" ), !r ) {
          var a = document.createElement( "div" );
          a.id = e, a.style = "margin:45px auto 0;", s.appendChild( a ), a2a.domEval( t.ad, a )
        }
      }() : a && function m() {
        var a, e = encodeURIComponent( location.href ),
          t = "width:300px;height:250px;";
        r && ( r.style.display = "none" ), l ? window.postMessage && i( "a2a_thanks_ifr" ).contentWindow.postMessage( "a2a_refresh_slot1", "*" ) : ( function n() {
          if ( window.postMessage ) var t = a2a.add_event( window, "message", function ( a ) {
            if ( ".a2a.me" === a.origin.substr( -7 ) ) {
              var e = a.data;
              e && "a2a_display_slot1" === e && ( l.style.display = "", t.destroy() )
            }
          } );
          else l.style.display = ""
        }(), ( a = document.createElement( "iframe" ) ).id = "a2a_thanks_ifr", a.title = "Post-Share Container", a.setAttribute( "transparency", "true" ), a.setAttribute( "allowTransparency", "true" ), a.setAttribute( "frameBorder", "0" ), a.src = "https://www.a2a.me/html/tag.html#url=" + e, ( l = document.createElement( "div" ) ).id = o, l.insertBefore( a, null ), a.style = t, l.style = t + "display:none;border-radius:6px;margin:45px auto 0;overflow:hidden;", s.appendChild( l ), d(), a2a.add_event( window, "resize", d ) )
      }() )
    }
  },
  stats: function ( e ) {
    if ( a2a.stats.a2a = a2a.stats.a2a || {}, !a2a.stats.a2a[ e ] ) {
      var a, t, n, i, o, l, r = "&domain=" + encodeURIComponent( location.href.split( "/" )[ 2 ] ),
        s = a2a.ads,
        c = s.has();
      a = c && c.as ? "&as=1" : "", t = c && c.dc ? "&dc=1" : "", c && c.vl ? "&vl=1" : "", n = c && c.sl ? "&sl=1" : "", i = c && c.az ? "&az=1" : "", o = c ? "&ad=1" : "", ( l = new XMLHttpRequest ).open( "POST", "https://stats.addtoany.com/menu" ), l.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ), l.timeout = 3e3, l.ontimeout = function ( a ) {
        l.abort(), "post" === e && s.set()
      }, "post" === e && ( l.onload = function ( a ) {
        var e = this.responseText;
        200 === this.status && e && "1" === e ? s.set( !0 ) : s.set()
      } ), l.send( "view=" + e + r + o + a + t + n + i ), a2a.stats.a2a[ e ] = 1
    }
  },
  track: function ( a ) {
    var e = new Image( 1, 1 );
    e.src = a, e.width = 1, e.height = 1
  },
  GA: function () {
    var l = window,
      c = a2a.type,
      d = "feed",
      a = function () {},
      e = function () {
        if ( "function" == typeof urchinTracker ) a2a.GA.track = function ( a, e, t, n, i ) {
          urchinTracker( "/addtoany.com/" + n ), urchinTracker( "/addtoany.com/" + n + "/" + ( t || a2a[ "n" + a2a.n ].linkurl ) ), urchinTracker( "/addtoany.com/services/" + e )
        };
        else if ( "object" == typeof pageTracker && "object" == typeof _gat ) a2a.GA.track = function ( a, e, t, n, i ) {
          c != d && ( _gat._anonymizeIp(), _gat._forceSSL(), pageTracker._trackSocial( "AddToAny", a, t || a2a[ "n" + a2a.n ].linkurl ) )
        };
        else if ( "object" == typeof _gaq ) a2a.GA.track = function ( a, e, t, n, i ) {
          c != d && ( _gaq.push( [ "_gat._anonymizeIp" ] ), _gaq.push( [ "_gat._forceSSL" ] ), _gaq.push( [ "_trackSocial", "AddToAny", a, t || a2a[ "n" + a2a.n ].linkurl ] ) )
        };
        else if ( "string" == typeof GoogleAnalyticsObject && "object" != typeof dataLayer ) a2a.GA.track = function ( a, e, t, n, i ) {
          if ( c != d ) {
            var o = t || a2a[ "n" + a2a.n ].linkurl;
            l[ GoogleAnalyticsObject ]( "send", "social", {
              anonymizeIp: !0,
              forceSSL: !0,
              socialNetwork: "AddToAny",
              socialAction: a,
              socialTarget: o,
              page: o
            } )
          }
        };
        else {
          if ( "object" != typeof dataLayer ) return;
          a2a.GA.track = function ( a, e, t, n, i ) {
            if ( c != d ) {
              var o = t || a2a[ "n" + a2a.n ].linkurl,
                l = a2a.c.callbacks;
              ! function r() {
                dataLayer.push( arguments )
              }( "event", a, {
                anonymize_ip: !0,
                event_category: "AddToAny",
                event_label: o
              } ), l && l.length && "function" == typeof l.some && l.some( function s( a ) {
                var e = a.share;
                return !!e && /dataLayer[^]+AddToAnyShare[^]+socialAction/.test( e.toString() )
              } ) || dataLayer.push( {
                event: "AddToAnyShare",
                socialNetwork: "AddToAny",
                socialAction: a,
                socialTarget: o
              } )
            }
          }
        }
      };
    a2a.GA.track = a, e(), a2a.GA.track === a && a2a.onLoad( e )
  },
  add_services: function () {
    var a, e = a2a.type,
      t = a2a.gEl,
      n = parseInt( a2a[ e ].num_services ),
      i = t( "a2a" + e + "_full_services" ),
      o = t( "a2a" + e + "_mini_services" );
    if ( a2a[ e ].custom_services ) {
      var l = ( d = a2a[ e ].custom_services ).length,
        r = a2a.make_service;
      d.reverse();
      for ( var s, c = 0; c < l; c++ ) d[ c ] && ( 1, s = r( d[ c ][ 0 ], d[ c ][ 0 ].replace( / /g, "_" ), !1, null, {}, d[ c ][ 1 ], d[ c ][ 2 ] ), i.insertBefore( s, i.firstChild ), s = r( d[ c ][ 0 ], d[ c ][ 0 ].replace( / /g, "_" ), !1, null, {}, d[ c ][ 1 ], d[ c ][ 2 ] ), o.insertBefore( s, o.firstChild ) )
    }
    if ( "page" == e && a2a.c.add_services ) {
      l = ( d = a2a.c.add_services ).length, r = a2a.make_service;
      var d, u = a2a.c.http_s;
      for ( c = 0; c < l; c++ ) d[ c ] && ( 1, u && ( d[ c ].icon = !1 ), s = r( d[ c ].name, d[ c ].safe_name, !1, null, {}, !1, d[ c ].icon ), i.insertBefore( s, i.firstChild ), s = r( d[ c ].name, d[ c ].safe_name, !1, null, {}, !1, d[ c ].icon ), o.insertBefore( s, o.firstChild ) )
    }
    if ( ( a = a2a.getByClass( "a2a_i", o, "a" ) ).length > n ) {
      c = 0;
      for ( var m = a.length; c < m - n; c++ ) o.removeChild( o.lastChild )
    }
  },
  util_frame_make: function ( a ) {
    var e = document.createElement( "iframe" ),
      t = document.createElement( "div" ),
      n = encodeURIComponent,
      i = document.referrer ? n( document.referrer ) : "",
      o = n( location.href ),
      l = ( n( document.title || "" ), navigator.browserLanguage || navigator.language, a2a.c.no_3p ? "&no_3p=1" : "" );
    e.id = "a2a" + a + "_sm_ifr", e.width = e.height = 1, e.style.width = e.style.height = t.style.width = t.style.height = "1px", e.style.top = e.style.left = e.frameborder = e.style.border = 0, e.style.position = t.style.position = "absolute", e.style.zIndex = t.style.zIndex = 1e5, e.title = "AddToAny Utility Frame", e.setAttribute( "transparency", "true" ), e.setAttribute( "allowTransparency", "true" ), e.setAttribute( "frameBorder", "0" ), e.src = "https://static.addtoany.com/menu/sm.22.html#type=" + a + "&event=load&url=" + o + "&referrer=" + i + l, t.style.top = "0", t.style.visibility = "hidden", a2a.gEl( "a2a" + a + "_dropdown" ).parentNode.insertBefore( t, null ), t.insertBefore( e, null )
  },
  util_frame_listen: function ( a ) {
    a2a.util_frame_make( a ), window.postMessage && !a2a[ a ].message_event && ( a2a.add_event( window, "message", function ( a ) {
      if ( ".addtoany.com" === a.origin.substr( -13 ) ) {
        var e = "string" == typeof a.data ? a.data.split( "=" ) : [ "" ],
          t = e[ 0 ].substr( 4 ),
          n = e[ 1 ],
          i = t.substr( 0, 4 );
        if ( a2a.c.http_s = "s", -1 === [ "page", "feed", "mail" ].indexOf( i ) ) return;
        t == i + "_services" && ( n = "" != n && n.split( "," ), a2a.top_services( n, i, " a2a_sss" ), a2a.collections( i ), a2a.default_services( i ) ), a2a.gEl( "a2a" + i + "_sm_ifr" ).style.display = "none"
      }
    } ), a2a[ a ].message_event = 1 )
  },
  util_frame_post: function ( a, e ) {
    var t = a2a.gEl( "a2a" + a + "_sm_ifr" );
    window.postMessage && t && t.contentWindow.postMessage( e, "*" )
  },
  urlParam: function ( a, e, t ) {
    var n, i, o = new RegExp( "[?&]" + e.replace( /[.\\+*?\[\^\]$(){}=!<>|:\-]/g, "\\$&" ) + "=([^&#]*)", "i" ),
      l = o.exec( a );
    null === l ? i = a + ( n = /\?/.test( a ) ? "&" : "?" ) + e + "=" + t : ( n = l[ 0 ].charAt( 0 ), i = a.replace( o, n + e + "=" + t ) );
    return i
  },
  fix_icons: function () {
    var a = a2a.ieo();
    if ( a && a < 9 ) {
      var e = ( e = a2a.getByClass( "a2a_s_a2a", document ) )[ 0 ],
        t = a2a.fix_icons.tryNum || 0;
      if ( e && !e.a2aFixed && !e.currentStyle.backgroundImage.split( '"' )[ 1 ] && t < 999 ) return a2a.fix_icons.tryNum = t + 1, setTimeout( a2a.fix_icons, 99 );
      for ( var n, i, o, l, r = 0, s = a2a.getByClass( "a2a_svg", document ), c = s.length; r < c; r++ ) i = ( n = ( l = s[ r ] ).currentStyle ).backgroundImage.split( '"' )[ 1 ], !l.a2aFixed && i && ( ( o = new Image ).style.backgroundColor = n.backgroundColor, o.style.border = 0, o.style.height = n.height, o.style.width = n.width, o.src = i, l.style.background = "none", l.insertBefore( o, l.firstChild ) ), l.a2aFixed = 1
    } else fix_icons = function () {}
  },
  arrange_services: function () {
    var a = a2a.type,
      e = a2a.c.prioritize;
    e && a2a.top_services( e, a ), a2a.add_services()
  },
  top_services: function ( a, e, t ) {
    var n = e || a2a.type,
      i = a2a.in_array,
      o = a2a.make_service,
      l = parseInt( a2a[ n ].num_services ),
      r = a2a.gEl( "a2a" + n + "_full_services" ),
      s = a2a.gEl( "a2a" + n + "_mini_services" ),
      c = a2a.getByClass( "a2a_i", r, "a" ),
      d = a2a.getByClass( "a2a_i", s, "a" ),
      u = [];
    if ( a ) {
      var m = a.length - 1;
      for ( t = t; - 1 < m; m-- ) {
        var _ = i( a[ m ], c, !0, "a2a", "safename" );
        _ && ( t && ( _.className = _.className + t ), r.insertBefore( _, r.firstChild ), u.push( _ ) )
      }
      if ( 0 < u.length ) {
        var p, f, g;
        for ( m = 0, t = t; m < u.length; m++ ) g = ( p = i( u[ m ].a2a.safename, d, !0, "a2a", "safename" ) ) ? p : o( ( f = u[ m ].a2a ).servicename, f.safename, f.serviceIcon, f.serviceColor, {
          src: f.js_src,
          url: f.url,
          type: f.serviceType,
          pu: f.popup,
          na: f.na,
          media: f.media
        } ), t && ( g.className = g.className + t ), s.insertBefore( g, s.firstChild );
        if ( ( d = a2a.getByClass( "a2a_i", s, "a" ) ).length > l ) {
          m = 0;
          for ( var h = d.length; m < h - l; m++ ) s.removeChild( s.lastChild )
        }
      }
    }
  },
  css: function ( a ) {
    var e, t, n = a2a.type,
      i = a2a.c,
      o = i.css = document.createElement( "style" ),
      l = i.color_main || "EEE",
      r = i.color_bg || "FFF",
      s = i.color_border || "CCC",
      c = i.color_link_text || "0166FF",
      d = i.color_link_text_hover || "2A2A2A",
      u = ( i.color_link_text_hover, i.color_link_text || "2A2A2A" ),
      m = ( l.toLowerCase(), i.color_link_text || "2A2A2A" ),
      _ = i.color_border || s;
    min_a2a = ".a2a_", min_1 = "{background-position:0 ", min_2 = "px!important}", min_3 = min_a2a + "i_", min_4 = min_2 + min_3, min_5 = min_a2a + "menu", min_6 = min_a2a + "tab", min_7 = "border", min_8 = "background-color:", min_9 = "color:", min_10 = "margin:", min_11 = "padding:", e = min_a2a + "hide{display:none}" + min_a2a + "logo_color{" + min_8 + ( a || "#0166FF" ) + "}" + min_5 + "," + min_5 + " *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;float:none;" + min_10 + "0;" + min_11 + "0;position:static;height:auto;width:auto}" + min_5 + "{" + min_7 + "-radius:6px;display:none;direction:ltr;background:#" + r + ';font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;' + min_9 + "#000;line-height:12px;" + min_7 + ":1px solid #" + s + ";vertical-align:baseline;overflow:hidden}" + min_a2a + "mini{min-width:200px;position:absolute;width:300px;z-index:9999997}" + min_a2a + 'overlay{display:none;background:#616c7d;_height:expression( ((e=document.documentElement.clientHeight)?e:document.body.clientHeight)+"px" );_width:expression( ((e=document.documentElement.clientWidth)?e:document.body.clientWidth)+"px" );filter:alpha(opacity=90);opacity:.92;backdrop-filter:blur(8px);position:fixed;_position:absolute;top:0;right:0;left:0;bottom:0;z-index:9999998;-webkit-tap-highlight-' + min_9 + "rgba(0,0,0,0);transition:opacity .14s,backdrop-filter .14s}" + min_a2a + "full{background:#" + r + ";" + min_7 + ":1px solid #" + r + ';height:auto;height:calc(320px);top:15%;_top:expression(40+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+"px");left:50%;margin-left:-320px;position:fixed;_position:absolute;text-align:center;width:640px;z-index:9999999;transition:transform .14s,opacity .14s}' + min_a2a + "full_footer," + min_a2a + "full_header," + min_a2a + "full_services{" + min_7 + ":0;" + min_10 + "0;" + min_11 + "12px;box-sizing:" + min_7 + "-box}" + min_a2a + "full_header{padding-bottom:8px}" + min_a2a + "full_services{height:280px;overflow-y:scroll;" + min_11 + "0 12px;-webkit-overflow-scrolling:touch}" + min_a2a + "full_services " + min_a2a + "i{display:inline-block;float:none;width:181px;width:calc(33.334% - 18px)}div" + min_a2a + "full_footer{font-size:12px;text-align:center;" + min_11 + "8px 14px}div" + min_a2a + "full_footer a,div" + min_a2a + "full_footer a:visited{display:inline;font-size:12px;line-height:14px;" + min_11 + "8px 14px}div" + min_a2a + "full_footer a:focus,div" + min_a2a + "full_footer a:hover{background:0 0;" + min_7 + ":0;" + min_9 + "#" + c + "}div" + min_a2a + "full_footer a span" + min_a2a + "s_a2a,div" + min_a2a + "full_footer a span" + min_a2a + "w_a2a{background-size:14px;" + min_7 + "-radius:3px;display:inline-block;height:14px;line-height:14px;" + min_10 + "0 3px 0 0;vertical-align:top;*vertical-align:middle;width:14px}" + min_a2a + 'modal{height:0;left:50%;margin-left:-320px;position:fixed;_position:absolute;text-align:center;top:15%;_top:expression(40+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+"px");width:640px;z-index:9999999;transition:transform .14s,opacity .14s;-webkit-tap-highlight-' + min_9 + "rgba(0,0,0,0)}" + min_a2a + "modal_body{background:0 0;" + min_7 + ':0;font:24px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;position:relative;height:auto;width:auto}' + min_a2a + "thanks{" + min_9 + "#fff;height:auto;margin-top:20px;width:auto}" + min_a2a + "thanks>div:first-child{" + min_10 + "0 0 40px 0}" + min_a2a + "thanks div *{height:inherit}#a2a_copy_link{background:#" + r + ";" + min_7 + ":1px solid #" + r + ";margin-top:15%}span" + min_a2a + "s_link#a2a_copy_link_icon,span" + min_a2a + "w_link#a2a_copy_link_icon{background-size:48px;" + min_7 + "-radius:0;display:inline-block;height:48px;left:0;line-height:48px;" + min_10 + "0 3px 0 0;position:absolute;vertical-align:top;*vertical-align:middle;width:48px}#a2a_modal input#a2a_copy_link_text{" + min_8 + "transparent;_" + min_8 + "#" + r + ";" + min_7 + ":0;" + min_9 + "#" + m + ";font:inherit;height:48px;left:62px;max-width:initial;" + min_11 + "0;position:relative;width:564px;width:calc(100% - 76px)}#a2a_copy_link_copied{" + min_8 + "#0166ff;" + min_9 + "#fff;display:none;font:inherit;font-size:16px;margin-top:1px;" + min_11 + "3px 8px}@media (prefers-color-scheme:dark){" + min_5 + " a," + min_5 + " a" + min_a2a + "i," + min_5 + " a" + min_a2a + "i:visited," + min_5 + " a" + min_a2a + "more,i" + min_a2a + "i{" + min_7 + "-" + min_9 + "#2a2a2a!important;" + min_9 + "#fff!important}" + min_5 + " a" + min_a2a + "i:active," + min_5 + " a" + min_a2a + "i:focus," + min_5 + " a" + min_a2a + "i:hover," + min_5 + " a" + min_a2a + "more:active," + min_5 + " a" + min_a2a + "more:focus," + min_5 + " a" + min_a2a + "more:hover," + min_5 + "_find_container{" + min_7 + "-" + min_9 + "#444!important;" + min_8 + "#444!important}" + min_5 + "{" + min_8 + "#2a2a2a;" + min_7 + "-" + min_9 + "#2a2a2a}" + min_5 + "_find{" + min_9 + "#fff!important}" + min_5 + " span" + min_a2a + "s_find svg{" + min_8 + "transparent!important}" + min_5 + " span" + min_a2a + "s_find svg path{fill:#fff!important}}@media print{" + min_a2a + "floating_style," + min_5 + "," + min_a2a + "overlay{visibility:hidden}}@keyframes a2aFadeIn{from{opacity:0}to{opacity:1}}" + min_a2a + "starting{opacity:0}" + min_a2a + "starting" + min_a2a + "full," + min_a2a + "starting" + min_a2a + "modal{transform:scale(.8)}@media (max-width:639px){" + min_a2a + "full{" + min_7 + "-radius:0;top:15%;left:0;margin-left:auto;width:100%}" + min_a2a + "modal{left:0;margin-left:10px;width:calc(100% - 20px)}}@media (min-width:318px) and (max-width:437px){" + min_a2a + "full " + min_a2a + "full_services " + min_a2a + "i{width:calc(50% - 18px)}}@media (max-width:317px){" + min_a2a + "full " + min_a2a + "full_services " + min_a2a + "i{width:calc(100% - 18px)}}@media (max-height:436px){" + min_a2a + "full{bottom:40px;height:auto;top:40px}}@media (max-height:550px){" + min_a2a + "modal{top:30px}}@media (max-height:360px){" + min_a2a + "modal{top:20px}" + min_a2a + "thanks>div:first-child{margin-bottom:20px}}" + min_5 + " a{" + min_9 + "#" + c + ';text-decoration:none;font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;line-height:14px;height:auto;width:auto;outline:0}' + min_5 + " a" + min_a2a + "i:visited," + min_5 + " a" + min_a2a + "more{" + min_9 + "#" + c + "}" + min_5 + " a" + min_a2a + "i:active," + min_5 + " a" + min_a2a + "i:focus," + min_5 + " a" + min_a2a + "i:hover," + min_5 + " a" + min_a2a + "more:active," + min_5 + " a" + min_a2a + "more:focus," + min_5 + " a" + min_a2a + "more:hover{" + min_9 + "#" + d + ";" + min_7 + "-" + min_9 + "#" + l + ";" + min_7 + "-style:solid;" + min_8 + "#" + l + ";text-decoration:none}" + min_5 + " span" + min_a2a + "s_find{background-size:24px;height:24px;left:8px;position:absolute;top:7px;width:24px}" + min_5 + " span" + min_a2a + "s_find svg{" + min_8 + "#" + r + "}" + min_5 + " span" + min_a2a + "s_find svg path{fill:#" + _ + "}#a2a_menu_container{display:inline-block}#a2a_menu_container{_display:inline}" + min_5 + "_find_container{" + min_7 + ":1px solid #" + _ + ";" + min_7 + "-radius:6px;" + min_11 + "2px 24px 2px 0;position:relative;text-align:left}" + min_a2a + "cols_container " + min_a2a + "col1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}#a2a_modal input,#a2a_modal input[type=text]," + min_5 + " input," + min_5 + " input[type=text]{display:block;background-image:none;box-shadow:none;line-height:100%;" + min_10 + "0;outline:0;overflow:hidden;" + min_11 + "0;-moz-box-shadow:none;-webkit-box-shadow:none;-webkit-appearance:none}#a2a" + n + "_find_container input,#a2a" + n + "_find_container input[type=text]{" + min_8 + "transparent;_" + min_8 + "#" + r + ";" + min_7 + ":0;box-sizing:content-box;" + min_9 + "#" + m + ";font:inherit;font-size:16px;height:28px;line-height:20px;left:38px;outline:0;" + min_10 + "0;max-width:initial;" + min_11 + "2px 0;position:relative;width:99%}" + ( "undefined" != typeof document.body.style.maxHeight ? min_a2a + "clear{clear:both}" : min_a2a + "clear{clear:both;height:0;width:0;line-height:0;font-size:0}" ) + " " + min_a2a + "svg{background-repeat:no-repeat;display:block;overflow:hidden;height:32px;line-height:32px;" + min_11 + "0;width:32px}" + min_a2a + "svg svg{background-repeat:no-repeat;background-position:50% 50%;" + min_7 + ":none;display:block;left:0;" + min_10 + "0 auto;overflow:hidden;" + min_11 + "0;position:relative;top:0;width:auto;height:auto}a" + min_a2a + "i,i" + min_a2a + "i{display:block;float:left;" + min_7 + ":1px solid #" + r + ";line-height:24px;" + min_11 + "6px 8px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:132px}a" + min_a2a + "i span,a" + min_a2a + "more span{display:inline-block;overflow:hidden;vertical-align:top;*vertical-align:middle}a" + min_a2a + "i " + min_a2a + "svg{" + min_10 + "0 6px 0 0}a" + min_a2a + "i " + min_a2a + "svg,a" + min_a2a + "more " + min_a2a + "svg{background-size:24px;height:24px;line-height:24px;width:24px}a" + min_a2a + "sss:hover{" + min_7 + "-left:1px solid #" + s + "}a" + min_5 + "_show_more_less{" + min_7 + "-bottom:1px solid #" + r + ";" + min_7 + "-left:0;" + min_7 + "-right:0;line-height:24px;" + min_10 + "6px 0 0;" + min_11 + "6px;-webkit-touch-callout:none}a" + min_5 + "_show_more_less span{display:inline-block;height:24px;" + min_10 + "0 6px 0 0}" + min_a2a + "kit " + min_a2a + "svg{background-repeat:repeat}" + min_a2a + "default_style a{float:left;line-height:16px;" + min_11 + "0 2px}" + min_a2a + "default_style a:hover " + min_a2a + "svg," + min_a2a + "floating_style a:hover " + min_a2a + "svg," + min_a2a + "overlay_style a:hover " + min_a2a + "svg svg{opacity:.7}" + min_a2a + "overlay_style" + min_a2a + "default_style a:hover " + min_a2a + "svg{opacity:1}" + min_a2a + "default_style " + min_a2a + "count," + min_a2a + "default_style " + min_a2a + "svg," + min_a2a + "floating_style " + min_a2a + "svg," + min_5 + " " + min_a2a + "svg," + min_a2a + "vertical_style " + min_a2a + "count," + min_a2a + "vertical_style " + min_a2a + "svg{" + min_7 + "-radius:4px}" + min_a2a + "default_style " + min_a2a + "counter img," + min_a2a + "default_style " + min_a2a + "dd," + min_a2a + "default_style " + min_a2a + "svg{float:left}" + min_a2a + "default_style " + min_a2a + "img_text{margin-right:4px}" + min_a2a + "default_style " + min_a2a + "divider{" + min_7 + "-left:1px solid #000;display:inline;float:left;height:16px;line-height:16px;" + min_10 + "0 5px}" + min_a2a + "kit a{cursor:pointer}" + min_a2a + "floating_style{" + min_8 + "#fff;" + min_7 + "-radius:6px;position:fixed;z-index:9999995}" + min_a2a + "overlay_style{z-index:2147483647}" + min_a2a + "floating_style," + min_a2a + "overlay_style{animation:a2aFadeIn .2s ease-in;" + min_11 + "4px}" + min_a2a + "vertical_style a{clear:left;display:block;overflow:hidden;" + min_11 + "4px;text-decoration:none}" + min_a2a + "floating_style" + min_a2a + "default_style{bottom:0}" + min_a2a + "floating_style" + min_a2a + "default_style a," + min_a2a + "overlay_style" + min_a2a + "default_style a{" + min_11 + "4px}" + min_a2a + "count{" + min_8 + "#fff;" + min_7 + ":1px solid #ccc;box-sizing:" + min_7 + "-box;" + min_9 + "#2a2a2a;display:block;float:left;font:12px Arial,Helvetica,sans-serif;height:16px;margin-left:4px;position:relative;text-align:center;width:50px}" + min_a2a + "count:after," + min_a2a + "count:before{" + min_7 + ":solid transparent;" + min_7 + '-width:4px 4px 4px 0;content:"";height:0;left:0;line-height:0;' + min_10 + "-4px 0 0 -4px;position:absolute;top:50%;width:0}" + min_a2a + "count:before{" + min_7 + "-right-" + min_9 + "#ccc}" + min_a2a + "count:after{" + min_7 + "-right-" + min_9 + "#fff;margin-left:-3px}" + min_a2a + "count span{animation:a2aFadeIn .14s ease-in}" + min_a2a + "vertical_style " + min_a2a + "counter img{display:block}" + min_a2a + "vertical_style " + min_a2a + "count{float:none;margin-left:0;margin-top:6px}" + min_a2a + "vertical_style " + min_a2a + "count:after," + min_a2a + "vertical_style " + min_a2a + "count:before{" + min_7 + ":solid transparent;" + min_7 + '-width:0 4px 4px 4px;content:"";height:0;left:50%;line-height:0;' + min_10 + "-4px 0 0 -4px;position:absolute;top:0;width:0}" + min_a2a + "vertical_style " + min_a2a + "count:before{" + min_7 + "-bottom-" + min_9 + "#ccc}" + min_a2a + "vertical_style " + min_a2a + "count:after{" + min_7 + "-bottom-" + min_9 + "#fff;margin-top:-3px}" + min_a2a + "nowrap{white-space:nowrap}" + min_a2a + "note{" + min_10 + "0 auto;" + min_11 + "9px;font-size:12px;text-align:center}" + min_a2a + "note " + min_a2a + "note_note{" + min_10 + "0;" + min_9 + "#" + u + "}" + min_a2a + "wide a{display:block;margin-top:3px;" + min_7 + "-top:1px solid #" + l + ";text-align:center}" + min_a2a + "label{position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);clip-path:polygon(0 0,0 0,0 0);-webkit-clip-path:polygon(0 0,0 0,0 0);overflow:hidden;height:1px;width:1px}" + min_a2a + "kit," + min_5 + "," + min_a2a + "modal," + min_a2a + "overlay{-ms-touch-action:manipulation;touch-action:manipulation;outline:0}" + min_a2a + "dd img{" + min_7 + ":0}" + min_a2a + "button_facebook_like iframe{max-width:none}", o.setAttribute( "type", "text/css" ), a2a.nonce && o.setAttribute( "nonce", a2a.nonce ), a2a.head_tag.appendChild( o ), o.styleSheet ? o.styleSheet.cssText = e : ( t = document.createTextNode( e ), o.appendChild( t ) )
  },
  svg_css: function () {
    a2a.init( "page" );
    var a = a2a.c.css.sheet || a2a.c.css.styleSheet || {},
      e = "insertRule" in a,
      t = "addRule" in a;
    all_services = a2a.services.concat( [
      [ 0, 0, "a2a", "0166FF" ]
    ] );
    for ( var n, i, o = 0, l = all_services.length; o < l; o++ ) n = ".a2a_s_" + all_services[ o ][ 2 ], i = "background-color:#" + all_services[ o ][ 3 ] + ";", e ? a.insertRule( n + "{" + i + "}", 0 ) : t && a.addRule( n, i, 0 );
    a2a.svg.load( !0 ), a2a.svg_css = function () {}
  },
  svg: {
    icons: {},
    queue: [],
    tagO: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">',
    tagC: "</svg>",
    fill: function ( a, e ) {
      return a.replace( /#FFF/gi, e )
    },
    get: function ( a, e, t ) {
      var n = a2a.svg,
        i = n.fill;
      return icons = n.icons, svg_tag_open = n.tagO, svg_tag_close = n.tagC, svg_src = icons[ a ], svg_src_default = icons.a2a, svg_src ? ( svg_src = t ? i( svg_src, t ) : svg_src, svg_tag_open + svg_src + svg_tag_close ) : svg_src_default ? ( svg_src_default = t ? i( svg_src_default, t ) : svg_src_default, svg_tag_open + svg_src_default + svg_tag_close ) : ( a2a.svg.queue.push( {
        name: a,
        node: e,
        color: t
      } ), "pending" )
    },
    set: function ( a ) {
      var e = a2a.svg,
        t = e.queue;
      if ( icons = e.icons = a, svg_tag_open = e.tagO, svg_tag_close = e.tagC, icons.a2a )
        for ( var n, i, o, l = 0, r = t.length; l < r; l++ ) i = ( n = t[ l ] ).name, color = n.color, o = icons[ i ] ? icons[ i ] : icons.a2a, o = color ? e.fill( o, color ) : o, n.node.innerHTML = svg_tag_open + o + svg_tag_close
    },
    load: function ( t ) {
      var n = a2a.svg.works(),
        i = new window.Image;
      i.onerror = function () {
        a2a.svg.loadCSS( !1 )
      }, i.onload = function () {
        var e, a = 1 === i.width && 1 === i.height;
        n && !t ? a2a.svg.loadJS( document ) : a2a.svg.loadCSS( a ), a2a.svg.load = ( e = a, function ( a ) {
          a && a2a.svg.loadCSS( e )
        } )
      }, a2a.svg.load = function () {}, i.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    },
    loadCSS: function ( a ) {
      var e = a2a.static_addtoany,
        t = a2a.c.static_server,
        n = a2a.fix_icons,
        i = a2a.svg.works(),
        o = window.document.createElement( "link" ),
        l = a && i && t != e ? t + "/" : e + "/svg/";
      o.rel = "stylesheet", o.href = l + [ "icons.29.svg.css", "icons.29.png.css", "icons.29.old.css" ][ a && i ? 0 : a ? 1 : 2 ], a2a.head_tag.appendChild( o ), n(), a2a.svg.loadCSS = n
    },
    loadJS: function () {
      var a = document,
        e = a2a.c.static_server,
        t = a2a.nonce,
        n = a.createElement( "script" ),
        i = a.getElementsByTagName( "script" )[ 0 ],
        o = e != a2a.static_addtoany ? e + "/" : e + "/svg/";
      t && n.setAttribute( "nonce", t ), n.async = !0, n.src = o + "icons.29.svg.js", i.parentNode.insertBefore( n, i ), a2a.svg.loadJS = function () {}
    },
    works: function () {
      var a = document,
        e = !( !a.createElementNS || !a.createElementNS( "http://www.w3.org/2000/svg", "svg" ).createSVGRect || !a.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" ) || window.opera && -1 === navigator.userAgent.indexOf( "Chrome" ) );
      return a2a.svg.works = function () {
        return e
      }, e
    }
  },
  make_service: function ( _, p, a, e, t, n, i ) {
    var o, l, f = document.createElement( "a" ),
      r = a2a.c,
      s = function () {
        a2a.linker( this )
      },
      g = a2a.type,
      c = ( t = t || {}, "a2a_svg a2a_s__default" ),
      d = r.icon_color,
      u = d ? d.split( ",", 2 ) : d,
      m = u ? u[ 0 ] : u,
      h = u ? u[ 1 ] : u;
    return f.rel = "nofollow noopener", f.className = "a2a_i", f.href = "/#" + p, f.target = "_blank", f.a2a = {}, f.a2a.safename = p, f.a2a.servicename = _, f.a2a.serviceNameLowerCase = _.toLowerCase(), f.a2a.serviceIcon = a, f.a2a.serviceColor = e, f.a2a.serviceType = t.type, f.innerHTML = "<span></span>" + _ + " ", o = f.firstChild, t.type && ( f.a2a.stype = t.type ), t.src && ( f.a2a.js_src = t.src ), t.url && ( f.a2a.url = t.url ), t.pu && ( f.a2a.popup = 1 ), t.na && ( f.a2a.na = 1 ), t.media && ( f.a2a.media = 1 ), n && ( f.a2a.customserviceuri = n ), i ? ( o.style.backgroundImage = "url(" + i + ")", o.className = c ) : d && a2a.svg.works() ? ( o.className = c + " a2a_s_" + a, m && "unset" != m ? o.style.backgroundColor = m : e && ( o.style.backgroundColor = "#" + e ), h && ( h = h.trim() ) ) : a ? ( o.className = c + " a2a_s_" + a, e && ( o.style.backgroundColor = "#" + e ) ) : o.className = c, i || "pending" !== ( l = a2a.svg.get( a, o, h ) ) && ( o.innerHTML = l ), "js" === f.a2a.stype ? a2a.add_event( f, "click", s ) : ( a2a.add_event( f, "mousedown", s ), a2a.add_event( f, "keydown", s ) ), "copy_link" == p && a2a.add_event( f, "mouseenter", function () {
      a2a.gEl( "a2a_modal" ).style.willChange = "transform, opacity", a2a.gEl( "a2a_overlay" ).style.willChange = "backdrop-filter, opacity"
    } ), a2a.add_event( f, "click", function ( a ) {
      var e, t = a2a[ "n" + a2a.n ],
        n = {
          node: f,
          service: _,
          title: t.linkname,
          url: t.linkurl,
          media: t.linkmedia
        },
        i = encodeURIComponent,
        o = "page" == g ? "pages" : "subscriptions",
        l = "page" == g ? "AddToAny Share/Save Button" : "AddToAny Subscribe Button",
        r = f.a2a,
        s = "js" === r.stype,
        c = screen.height,
        d = "event=service_click&url=" + i( location.href ) + "&title=" + i( document.title || "" ) + "&ev_service=" + i( p ) + "&ev_service_type=menu&ev_menu_type=" + g + "&ev_url=" + i( t.linkurl ) + "&ev_title=" + i( t.linkname ).replace( /'/g, "%27" ),
        u = a2a.cbs( "share", n ),
        m = !1;
      void 0 !== u && ( u.url && ( t.linkurl = u.url, t.linkurl_implicit = !1 ), u.title && ( t.linkname = u.title, t.linkname_implicit = !1 ), u.media && ( t.linkmedia = u.media ), a2a.linker( f ), u.stop && ( m = !0, a2a.preventDefault( a ) ) ), "feed" == g || r.url || r.js_src || a2a.postClick(), !r.popup || a2a.defaultPrevented( a ) || "_blank" !== f.target || s || ( a2a.preventDefault( a ), window.open( f.href, "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + ( 450 < c ? Math.round( c / 2 - 225 ) : 40 ) + ",left=" + Math.round( screen.width / 2 - 275 ) ) ), e = r.js_skip, !r.externalJS && !r.literalJS || m || e || a2a.runJS( r ), s && !e && a2a.preventDefault( a ), e && delete f.a2a.js_skip, a2a.util_frame_post( g, d ), a2a.GA.track( _, p, t.linkurl, o, l )
    } ), f
  },
  i18n: function () {
    if ( a2a.c.static_server != a2a.static_addtoany ) return !1;
    var a = [ "ar", "id", "ms", "bn", "bn-IN", "bs", "bs-BA", "bg", "ca", "ca-AD", "ca-ES", "cs", "cs-CZ", "cy", "cy-GB", "da", "da-DK", "de", "dv", "el", "el-GR", "et", "et-EE", "es", "es-AR", "es-VE", "eo", "en-US", "eu", "eu-ES", "fa", "fa-IR", "fr", "fr-CA", "gd", "he", "hi", "hi-IN", "hr", "hy", "hy-AM", "is", "it", "ja", "ja-JP", "ko", "ko-KR", "ku", "ku-TR", "lv", "lt", "li", "li-NL", "hu", "mk", "ms-MY", "nl", "nn-NO", "no", "pl", "pt", "pt-BR", "pt-PT", "ro", "ru", "sr", "sr-RS", "fi", "sk", "sl", "sl-SI", "sv", "sv-SE", "ta", "ta-IN", "tr", "te-IN", "uk", "uk-UA", "vi", "vi-VN", "zh-CN", "zh-TW" ],
      e = a2a.c.locale || ( navigator.browserLanguage || navigator.language ).toLowerCase(),
      t = a2a.in_array( e, a, !0 );
    if ( !t ) {
      var n = e.indexOf( "-" ); - 1 != n && ( t = a2a.in_array( e.substr( 0, n ), a, !0 ) )
    }
    return !( "en-us" == e || !t ) && t
  },
  localize: function () {
    var i = document,
      a = a2a.getByClass( "a2a_localize", i ),
      e = a2a.c.localize,
      t = a2a.locale;

    function n( a ) {
      var e, t, n = i.createElement( "div" );
      return n.innerHTML = a, ( e = n.childNodes[ 0 ] ) && ( t = e.nodeValue ), delete n, t
    }
    for ( var o, l, r, s, c, d = 0, u = a.length; d < u; d++ )( l = ( l = ( o = a[ d ] ).getAttribute( "data-a2a-localize" ) ) ? l.split( ",", 2 ) : l ) && ( s = l[ 0 ], c = e[ r = l[ 1 ] ] || t[ r ] || "", "inner" === s ? o.innerHTML = c : "label" === s ? o.setAttribute( "aria-label", n( c ) ) : "title" === s && o.setAttribute( "title", n( c ) ) )
  },
  locale: {
    Share: "Share",
    Save: "Save",
    Subscribe: "Subscribe",
    Email: "Email",
    Bookmark: "Bookmark",
    ShowAll: "Show all",
    ShowLess: "Show less",
    FindAnyServiceToAddTo: "Find any service",
    PoweredBy: "By",
    AnyEmail: "Any email",
    ShareViaEmail: "Share via email",
    SubscribeViaEmail: "Subscribe via email",
    BookmarkInYourBrowser: "Bookmark in your browser",
    BookmarkInstructions: "Press Ctrl+D or &#8984;+D to bookmark this page",
    AddToYourFavorites: "Add to Favorites",
    SendFromWebOrProgram: "Send from any other email service",
    EmailProgram: "Email application",
    More: "More&#8230;",
    ThanksForSharing: "Thanks for sharing!",
    ThanksForFollowing: "Thanks for following!"
  }
};
a2a.c = a2a_config, a2a.make_once = function ( a ) {
    if ( a2a.type = a2a.c.menu_type || a, !a2a[ a2a.type ] && !window[ "a2a" + a2a.type + "_init" ] ) {
      a2a[ a2a.type ] = {}, window.a2a_show_dropdown = a2a.show_menu, window.a2a_miniLeaveDelay = a2a.miniLeaveDelay, window.a2a_init = a2a.init, a2a[ "create_" + a2a.type + "_html" ] = function ( a, e ) {
        var t, n, i, o = a2a.html_container,
          l = "",
          r = "",
          s = a2a.gEl,
          c = a2a.type = a,
          d = "a2a" + c,
          u = a2a.c,
          m = a2a.ieo(),
          _ = a2a.has_menter,
          p = ( document.createElement( "a" ), u.icon_color ),
          f = p ? p.split( ",", 2 ) : p,
          g = f ? f[ 0 ] : f,
          h = f ? f[ 1 ] : f,
          v = "a2a_svg a2a_s__default a2a_s_",
          y = h || "#FFF",
          k = g && "unset" != g ? g : "#0166ff",
          w = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="' + y + '"><path d="M14 7h4v18h-4z"/><path d="M7 14h18v4H7z"/></g></svg>',
          b = a2a.locale,
          x = u.localize;
        if ( a2a.css( k ), x = u.localize = {
            Share: x.Share || b.Share,
            Save: x.Save || b.Save,
            Subscribe: x.Subscribe || b.Subscribe,
            Email: x.Email || b.Email,
            Bookmark: x.Bookmark || b.Bookmark,
            ShowAll: x.ShowAll || b.ShowAll,
            ShowLess: x.ShowLess || b.ShowLess,
            FindAnyServiceToAddTo: x.FindAnyServiceToAddTo || b.FindAnyServiceToAddTo,
            PoweredBy: x.PoweredBy || b.PoweredBy,
            AnyEmail: "Any email",
            ShareViaEmail: x.ShareViaEmail || b.ShareViaEmail,
            SubscribeViaEmail: x.SubscribeViaEmail || b.SubscribeViaEmail,
            BookmarkInYourBrowser: x.BookmarkInYourBrowser || b.BookmarkInYourBrowser,
            BookmarkInstructions: x.BookmarkInstructions || b.BookmarkInstructions,
            AddToYourFavorites: x.AddToYourFavorites || b.AddToYourFavorites,
            SendFromWebOrProgram: x.SendFromWebOrProgram || b.SendFromWebOrProgram,
            EmailProgram: x.EmailProgram || b.EmailProgram,
            More: x.More || b.More,
            ThanksForSharing: x.ThanksForSharing || b.ThanksForSharing,
            ThanksForFollowing: x.ThanksForFollowing || b.ThanksForFollowing
          }, o || ( r += '<div class="a2a_overlay" id="a2a_overlay"></div>', r += '<div id="a2a_modal" class="a2a_modal a2a_hide" role="dialog" tabindex="-1" aria-label="">', r += '<div class="a2a_modal_body a2a_menu a2a_hide" id="a2a_copy_link"><span id="a2a_copy_link_icon" class="a2a_svg a2a_s_link a2a_logo_color"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="' + y + '" d="M24.4 21.18c0-.36-.1-.67-.36-.92l-2.8-2.8a1.24 1.24 0 0 0-.92-.38c-.38 0-.7.14-.97.43.02.04.1.12.25.26l.3.3.2.24c.08.12.14.24.17.35.03.1.05.23.05.37 0 .36-.13.66-.38.92a1.25 1.25 0 0 1-.92.37 1.4 1.4 0 0 1-.37-.03 1.06 1.06 0 0 1-.35-.18 2.27 2.27 0 0 1-.25-.2 6.82 6.82 0 0 1-.3-.3l-.24-.25c-.3.28-.44.6-.44.98 0 .36.13.66.38.92l2.78 2.8c.24.23.54.35.9.35.37 0 .68-.12.93-.35l1.98-1.97c.26-.25.38-.55.38-.9zm-9.46-9.5c0-.37-.13-.67-.38-.92l-2.78-2.8a1.24 1.24 0 0 0-.9-.37c-.36 0-.67.1-.93.35L7.97 9.92c-.26.25-.38.55-.38.9 0 .36.1.67.37.92l2.8 2.8c.24.25.55.37.92.37.36 0 .7-.13.96-.4-.03-.04-.1-.12-.26-.26s-.24-.23-.3-.3a2.67 2.67 0 0 1-.2-.24 1.05 1.05 0 0 1-.17-.35 1.4 1.4 0 0 1-.04-.37c0-.36.1-.66.36-.9.26-.26.56-.4.92-.4.14 0 .26.03.37.06.12.03.23.1.35.17.1.1.2.16.25.2l.3.3.24.26c.3-.28.44-.6.44-.98zM27 21.17c0 1.07-.38 2-1.15 2.73l-1.98 1.98c-.74.75-1.66 1.12-2.73 1.12-1.1 0-2-.38-2.75-1.14l-2.8-2.8c-.74-.74-1.1-1.65-1.1-2.73 0-1.1.38-2.04 1.17-2.82l-1.18-1.17c-.8.8-1.72 1.18-2.82 1.18-1.08 0-2-.36-2.75-1.12l-2.8-2.8C5.38 12.8 5 11.9 5 10.82c0-1.08.38-2 1.15-2.74L8.13 6.1C8.87 5.37 9.78 5 10.86 5c1.1 0 2 .38 2.75 1.15l2.8 2.8c.74.73 1.1 1.65 1.1 2.72 0 1.1-.38 2.05-1.17 2.82l1.18 1.18c.8-.8 1.72-1.2 2.82-1.2 1.08 0 2 .4 2.75 1.14l2.8 2.8c.76.76 1.13 1.68 1.13 2.76z"/></svg></span><input id="a2a_copy_link_text" type="text" title="Copy link" readonly><div id="a2a_copy_link_copied">&check;</div></div>', r += '<div class="a2a_modal_body a2a_menu a2a_thanks a2a_hide" id="a2a_thanks"><div class="a2a_localize" data-a2a-localize="inner,ThanksForSharing">' + x.ThanksForSharing + "</div></div>", r += "</div>" ), l += '<div class="a2a_menu a2a_full a2a_localize" id="a2a' + c + '_full" role="dialog" tabindex="-1" aria-label="' + ( "feed" == c ? x.Subscribe : x.Share ) + '" data-a2a-localize="title,' + ( "feed" == c ? "Subscribe" : "Share" ) + '"><div class="a2a_full_header"><div id="a2a' + c + '_find_container" class="a2a_menu_find_container"><input id="a2a' + c + '_find" class="a2a_menu_find a2a_localize" type="text" autocomplete="off" title="' + x.FindAnyServiceToAddTo + '" data-a2a-localize="title,FindAnyServiceToAddTo"><span id="a2a' + c + '_find_icon" class="a2a_svg a2a_s_find"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M19.7 18.2l-4.5-4.5c.7-1.1 1.2-2.3 1.2-3.6 0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c1.4 0 2.6-.4 3.6-1.2l4.5 4.5c.6.6 1.3.7 1.7.2.5-.4.4-1.1-.2-1.7zm-9.6-3.6c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2 4.5-4.5 4.5z"/></svg></span></div></div><div class="a2a_full_services" id="a2a' + c + '_full_services" role="presentation"></div><div class="a2a_full_footer"><a href="https://www.addtoany.com" title="Share Buttons" rel="noopener" target="_blank"><span class="' + v + 'a2a a2a_logo_color">' + w + '</span>AddToAny</a></div></div><div id="a2a' + c + '_dropdown" class="a2a_menu a2a_mini a2a_localize a2a_hide" tabindex="-1" aria-label="' + ( "feed" == c ? x.Subscribe : x.Share ) + '" data-a2a-localize="label,' + ( "feed" == c ? "Subscribe" : "Share" ) + '"><div id="a2a' + c + '_title_container" class="a2a_menu_title_container a2a_hide"><div id="a2a' + c + '_title" class="a2a_menu_title"></div></div><div class="a2a_mini_services" id="a2a' + c + '_mini_services"></div><div id="a2a' + c + '_cols_container" class="a2a_cols_container"><div class="a2a_col1' + ( "mail" == c ? " a2a_hide" : "" ) + '" id="a2a' + c + '_col1"></div><div id="a2a' + c + '_2_col1"' + ( "mail" != c ? ' class="a2a_hide"' : "" ) + '></div><div class="a2a_clear"></div></div>', "mail" != c && ( l += '<div class="a2a' + c + '_wide a2a_wide"><a href="" id="a2a' + c + '_show_more_less" class="a2a_menu_show_more_less a2a_more a2a_localize" title="' + x.ShowAll + '" data-a2a-localize="title,ShowAll"><span class="' + v + 'a2a a2a_logo_color">' + w + '</span><span class="a2a_localize" data-a2a-localize="inner,More">' + x.More + "</a></span></div>" ), l += "</div>", o ) o.insertAdjacentHTML( "beforeend", l );
        else {
          var A = "a2a_menu_container",
            E = s( A );
          o = a2a.html_container = E && !a2a.init_show.a2a_done ? E : document.createElement( "div" );
          a2a.add_event( o, "click", a2a.stopPropagation ), a2a.add_event( o, "touchstart", a2a.stopPropagation, !!a2a.evOpts() && {
            passive: !0
          } ), o.innerHTML = r + l
        }
        o.id != A && ( o.style.position = "static", m && m < 9 ? document.body.insertBefore( o, document.body.firstChild ) : document.body.insertBefore( o, null ) ), ( n = s( d + "_dropdown" ) ) && _ && ( a2a.add_event( n, "mouseenter", a2a.miniEnterStay ), a2a[ c ].onclick || a2a.add_event( n, "mouseleave", a2a.miniLeaveDelay ) ), ( t = s( d + "_find" ) ) && ( a2a.add_event( s( d + "_find_icon" ), "click", a2a.focus_find ), a2a.add_event( t, "click", a2a.focus_find ), a2a.add_event( t, "keyup", a2a.do_find ) ), ( i = s( "a2a_copy_link_icon" ) ) && a2a.add_event( i, "click", function () {
          s( "a2a_copy_link_text" ).click()
        } ), a2a[ c ].services = e, a2a.add_event( s( "a2a_overlay" ), "click", function ( a ) {
          a2a.hide_modals( c )
        } ), "mail" != c && a2a.add_event( s( d + "_show_more_less" ), "click", function ( a ) {
          a2a.preventDefault( a ), a2a.show_more_less()
        } )
      };
      var e = {
        page: {
          most: [
            [ "Facebook", "facebook", "facebook", "1877F2", {
              pu: 1
            } ],
            [ "Twitter", "twitter", "twitter", "55ACEE", {
              pu: 1,
              na: 1
            } ],
            [ "WhatsApp", "whatsapp", "whatsapp", "12AF0A", {
              na: 1
            } ],
            [ "Email", "email", "email", "0166FF", {
              url: "mailto:?subject=${title}&body=${link}"
            } ],
            [ "LinkedIn", "linkedin", "linkedin", "007BB5", {
              pu: 1,
              na: 1
            } ],
            [ "Pinterest", "pinterest", "pinterest", "BD081C", {
              type: "js",
              src: "https://assets.pinterest.com/js/pinmarklet.js",
              media: 1,
              pu: 1
            } ],
            [ "Telegram", "telegram", "telegram", "2CA5E0", {
              na: 1
            } ],
            [ "Messenger", "facebook_messenger", "facebook_messenger", "0084FF", {
              pu: 1,
              na: 1
            } ],
            [ "Reddit", "reddit", "reddit", "ff4500", {
              na: 1
            } ],
            [ "Gmail", "google_gmail", "gmail", "DD5347", {
              type: "email",
              pu: 1
            } ],
            [ "Pocket", "pocket", "pocket", "EE4056" ],
            [ "Tumblr", "tumblr", "tumblr", "35465C", {
              media: 1,
              pu: 1
            } ],
            [ "Amazon Wish List", "amazon_wish_list", "amazon", "F90" ],
            [ "AOL Mail", "aol_mail", "aol", "2A2A2A", {
              type: "email",
              pu: 1
            } ],
            [ "Balatarin", "balatarin", "balatarin", "079948" ],
            [ "BibSonomy", "bibsonomy", "bibsonomy", "2A2A2A" ],
            [ "Bitty Browser", "bitty_browser", "bitty", "999" ],
            [ "Blogger", "blogger", "blogger", "FDA352" ],
            [ "BlogMarks", "blogmarks", "blogmarks", "535353" ],
            [ "Bookmarks.fr", "bookmarks_fr", "bookmarks_fr", "96C044" ],
            [ "Box.net", "box_net", "box", "1A74B0" ],
            [ "Buffer", "buffer", "buffer", "2A2A2A" ],
            [ "Care2 News", "care2_news", "care2", "6EB43F" ],
            [ "CiteULike", "citeulike", "citeulike", "2781CD" ],
            [ "Copy Link", "copy_link", "link", "0166FF", {
              type: "js",
              src: "javascript:a2a.copyLink('${link}')"
            } ],
            [ "Design Float", "design_float", "designfloat", "8AC8FF" ],
            [ "Diary.Ru", "diary_ru", "diary_ru", "912D31" ],
            [ "Diaspora", "diaspora", "diaspora", "2E3436" ],
            [ "Digg", "digg", "digg", "2A2A2A" ],
            [ "Diigo", "diigo", "diigo", "4A8BCA" ],
            [ "Douban", "douban", "douban", "071", {
              pu: 1
            } ],
            [ "Draugiem", "draugiem", "draugiem", "F60", {
              pu: 1
            } ],
            [ "DZone", "dzone", "dzone", "82C251" ],
            [ "Evernote", "evernote", "evernote", "00A82D" ],
            [ "Fark", "fark", "fark", "555" ],
            [ "Flipboard", "flipboard", "flipboard", "C00", {
              pu: 1
            } ],
            [ "Folkd", "folkd", "folkd", "0F70B2" ],
            [ "Google Bookmarks", "google_bookmarks", "google", "4285F4" ],
            [ "Google Classroom", "google_classroom", "google_classroom", "FFC112" ],
            [ "Hacker News", "hacker_news", "y18", "F60" ],
            [ "Hatena", "hatena", "hatena", "00A6DB" ],
            [ "Houzz", "houzz", "houzz", "7AC143", {
              type: "js",
              src: "https://www.houzz.com/js/clipperBookmarklet.js",
              media: 1,
              pu: 1
            } ],
            [ "Instapaper", "instapaper", "instapaper", "2A2A2A" ],
            [ "Kakao", "kakao", "kakao", "FCB700", {
              pu: 1
            } ],
            [ "Kik", "kik", "kik", "2A2A2A" ],
            [ "Push to Kindle", "kindle_it", "kindle", "2A2A2A" ],
            [ "Known", "known", "known", "2A2A2A" ],
            [ "Line", "line", "line", "00C300", {
              pu: 1,
              na: 1
            } ],
            [ "LiveJournal", "livejournal", "livejournal", "113140" ],
            [ "Mail.Ru", "mail_ru", "mail_ru", "356FAC" ],
            [ "Mastodon", "mastodon", "mastodon", "2b90d9" ],
            [ "Mendeley", "mendeley", "mendeley", "A70805" ],
            [ "Meneame", "meneame", "meneame", "FF7D12" ],
            [ "MeWe", "mewe", "mewe", "007DA1" ],
            [ "Mix", "mix", "mix", "ff8226" ],
            [ "Mixi", "mixi", "mixi", "D1AD5A" ],
            [ "MySpace", "myspace", "myspace", "2A2A2A" ],
            [ "Netvouz", "netvouz", "netvouz", "6C3" ],
            [ "Odnoklassniki", "odnoklassniki", "odnoklassniki", "F2720C" ],
            [ "Outlook.com", "outlook_com", "outlook_com", "0072C6", {
              type: "email"
            } ],
            [ "Papaly", "papaly", "papaly", "3AC0F6", {
              pu: 1
            } ],
            [ "Pinboard", "pinboard", "pinboard", "1341DE", {
              pu: 1
            } ],
            [ "Plurk", "plurk", "plurk", "CF682F" ],
            [ "Print", "print", "print", "0166FF", {
              type: "js",
              src: "javascript:print()"
            } ],
            [ "PrintFriendly", "printfriendly", "printfriendly", "6D9F00" ],
            [ "Protopage Bookmarks", "protopage_bookmarks", "protopage", "413FFF" ],
            [ "Pusha", "pusha", "pusha", "0072B8" ],
            [ "Qzone", "qzone", "qzone", "2B82D9" ],
            [ "Rediff MyPage", "rediff", "rediff", "D20000" ],
            [ "Refind", "refind", "refind", "1492ef" ],
            [ "Renren", "renren", "renren", "005EAC", {
              pu: 1
            } ],
            [ "Sina Weibo", "sina_weibo", "sina_weibo", "E6162D" ],
            [ "SiteJot", "sitejot", "sitejot", "FFC808" ],
            [ "Skype", "skype", "skype", "00AFF0" ],
            [ "Slashdot", "slashdot", "slashdot", "004242" ],
            [ "SMS", "sms", "sms", "6CBE45", {
              url: "sms:?&body=${title}%20${link}"
            } ],
            [ "StockTwits", "stocktwits", "stocktwits", "40576F", {
              pu: 1
            } ],
            [ "Svejo", "svejo", "svejo", "5BD428" ],
            [ "Symbaloo Bookmarks", "symbaloo_bookmarks", "symbaloo", "6DA8F7" ],
            [ "Threema", "threema", "threema", "2A2A2A", {
              url: "threema://compose?text=${title}%20${link}",
              na: 1
            } ],
            [ "Trello", "trello", "trello", "0079BF", {
              pu: 1
            } ],
            [ "Tuenti", "tuenti", "tuenti", "0075C9" ],
            [ "Twiddla", "twiddla", "twiddla", "2A2A2A" ],
            [ "TypePad Post", "typepad_post", "typepad", "D2DE61" ],
            [ "Viadeo", "viadeo", "viadeo", "2A2A2A", {
              pu: 1
            } ],
            [ "Viber", "viber", "viber", "7C529E", {
              url: "viber://forward?text=${title}%20${link}",
              na: 1
            } ],
            [ "VK", "vk", "vk", "587EA3", {
              pu: 1
            } ],
            [ "Wanelo", "wanelo", "wanelo", "9cb092" ],
            [ "WeChat", "wechat", "wechat", "7BB32E" ],
            [ "WordPress", "wordpress", "wordpress", "464646" ],
            [ "Wykop", "wykop", "wykop", "367DA9" ],
            [ "XING", "xing", "xing", "165B66", {
              pu: 1
            } ],
            [ "Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
              type: "email"
            } ],
            [ "Yoolink", "yoolink", "yoolink", "A2C538" ],
            [ "Yummly", "yummly", "yummly", "E16120", {
              type: "js",
              src: "https://www.yummly.com/js/yumlet.js",
              media: 1,
              pu: 1
            } ]
          ],
          email: [
            [ "Email", "email", "email", "0166FF", {
              type: "email"
            } ],
            [ "Gmail", "google_gmail", "gmail", "DD5347", {
              type: "email",
              pu: 1
            } ],
            [ "AOL Mail", "aol_mail", "aol", "2A2A2A", {
              type: "email",
              pu: 1
            } ],
            [ "Outlook.com", "outlook_com", "outlook_com", "0072C6", {
              type: "email"
            } ],
            [ "Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
              type: "email"
            } ]
          ]
        },
        feed: {
          most: [
            [ "Feed", "feed", "feed", "E3702D", {
              url: "${link_noenc}"
            } ],
            [ "Feedly", "feedly", "feedly", "2BB24C" ],
            [ "My Yahoo", "my_yahoo", "yahoo", "400090" ],
            [ "FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
              type: "email"
            } ],
            [ "AOL Reader", "my_aol", "aol", "2A2A2A" ],
            [ "The Old Reader", "oldreader", "oldreader", "D73F31" ],
            [ "Agregator", "agregator", "agregator", "359440" ],
            [ "Bitty Browser Preview", "bitty_browser_preview", "bitty", "999" ],
            [ "Daily Rotation", "daily_rotation", "dailyrotation", "2A2A2A" ],
            [ "Feed Mailer", "feed_mailer", "feedmailer", "78A8D1" ],
            [ "FeedBucket", "feedbucket", "feedbucket", "E3702D" ],
            [ "iTunes", "itunes", "itunes", "FB233A", {
              url: "itpc://${link_nohttp}"
            } ],
            [ "Miro", "miro", "miro", "D41700" ],
            [ "Netvibes", "netvibes", "netvibes", "7CA900" ],
            [ "NewsAlloy", "newsalloy", "newsalloy", "8E2B3D" ],
            [ "NewsIsFree", "newsisfree", "newsisfree", "316CA9" ],
            [ "Outlook", "outlook", "outlook_com", "0072C6", {
              url: "feed://${link_nohttp}"
            } ],
            [ "PodNova", "podnova", "podnova", "B50419" ],
            [ "Protopage News Feeds", "protopage_news_feeds", "protopage", "413FFF" ],
            [ "Symbaloo Feeds", "symbaloo_feeds", "symbaloo", "6DA8F7" ],
            [ "The Free Dictionary", "the_free_dictionary", "thefreedictionary", "004B85" ],
            [ "The Free Library", "the_free_library", "thefreelibrary", "004B85" ],
            [ "WINKsite", "winksite", "winksite", "6FE738" ]
          ],
          email: [
            [ "FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
              type: "email"
            } ]
          ]
        }
      };
      a2a.services = e.page.most.concat( e.feed.most );
      var t, n = a2a.type,
        i = a2a[ n ],
        o = "feed" == n ? "feed" : "page",
        l = a2a.c;
      location.host.split( "." ).slice( -1 );
      i.onclick = l.onclick || !1, i.show_title = l.show_title || !1, i.num_services = l.num_services || 8, i.exclude_services = l.exclude_services || !1, i.custom_services = l.custom_services || !1, ( t = a2a.i18n() ) && "custom" != t && a2a.loadExtScript( l.static_server + "/locale/" + t + ".js", function () {
        return "" != a2a_localize
      }, function () {
        l.localize = a2a_localize, a2a.localize()
      } ), a2a[ "create_" + n + "_html" ]( n, e[ o ] ), a2a.GA()
    }
  },
  function () {
    function a() {
      a2a.overlays(), a2a.init_all( "page" ), a2a.ready()
    }
    document.body && a(), a2a.dom.ready( a )
  }();

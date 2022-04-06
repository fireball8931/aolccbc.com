exports.config =
  # See http://brunch.io/#documentation for docs.

  npm:
    globals:
      $: 'jquery'
      jQuery: 'jquery'

  modules:
    nameCleaner: (path) -> path.replace(/^app\/(?:scripts\/)?/, '')
    autoRequire:
      'js/app.js': ['init']

  files:
    javascripts:
      joinTo:
        'js/jquery.js': /node_modules\/jquery\/dist\/jquery\.js/
        'js/app.js': /^app/
        'js/vendor.js':  /^(?!app|node_modules\/jquery\/dist\/jquery\.js)/
    stylesheets:
      joinTo:
        'css/app.css':[
           /^(app[\\/]scss[\\/]styles(?!-rtl))/
           /node_modules[\\/](?!bootstrap-rtl[\\/]dist[\\/]css[\\/]bootstrap-rtl.css)/
        ]
        'css/app-rtl.css': [
          /^(app[\\/]scss[\\/]styles-rtl)/
          /(node_modules[\\/]bootstrap-rtl[\\/]dist[\\/]css[\\/]bootstrap-rtl.css)/
        ]
        'css/editor.css':[
           /^(app[\\/]scss[\\/]editor(?!-rtl))/
        ]
        'css/editor-rtl.css': [
          /^(app[\\/]scss[\\/]editor-rtl)/
        ]
    # something that probabaly needs to be addressed in brunch-static/brunch core
    # see https://github.com/bmatcuk/brunch-static/blob/master/src/brunch-static.coffee#L8
    # /\.static\.\w+$/ should not wrapped
    templates:
        joinTo: 'js/templates.js'
        
  conventions:
      # we don't want javascripts in asset folders to be copied like the one in
      # the bootstrap assets folder
      assets: /assets[\\/](?!javascripts)/

  plugins:
    static:
      processors: [
        require('html-brunch-static') {
          handlebars:
            enableProcessor:true
        }
      ]
      
    sass:
      debug: 'comments' # or set to 'debug' for the FireSass-style output
      mode: 'native' # set to 'ruby' to force ruby
      allowCache: true
      options:
        includePaths: ['node_modules']

    assetsmanager:
      copyTo:
        'fonts': ['node_modules/bootstrap-sass/assets/fonts/bootstrap*']
    


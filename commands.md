```sh
ruby -v
gem -v

bundle install # from project root

# If Bundler is missing, install it with:
gem install bundler

#Start the local server
bundle exec jekyll serve

#For automatic rebuilding when file is changed:
bundle exec jekyll serve --livereload

bundle install

```

If error:
```txt
bundle exec jekyll serve
/Users/ardanish/.gem/ruby/4.0.7/gems/jekyll-4.4.1/lib/jekyll.rb:26: warning: logger used to be loaded from the standard library, but is not part of the default gems since Ruby 4.0.0.
You can add logger to your Gemfile or gemspec to fix this error.
bundler: failed to load command: jekyll (/Users/ardanish/.gem/ruby/4.0.7/bin/jekyll)
/Users/ardanish/.rubies/ruby-4.0.7/lib/ruby/4.0.0/bundled_gems.rb:60:in 'Kernel.require':
...
```

Run:
```sh
gem install logger
```
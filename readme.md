# Ketch Partners Web Site

[Based on Foundation for Sites Zurb Template](https://github.com/zurb/foundation-sites)


This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression


### Setup

To set up the template, first download it.

Then open the folder in your command line, and install the needed dependencies:

```bash
npm install --global foundation-cli
brew install babel
```

To pull project:
```
git clone https://github.com/KetchPartners/ketchpartnersweb.git
cd ketchpartnersweb
git branch [come up with name branch]
git checkout [come up with name branch]
yarn
foundation watch
```

To view site:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build` or `foundation build` or `yarn build`.




To submit updates:
```
git push origin [your branch name]
```

Then from github project [ketchpartnersweb](https://github.com/KetchPartners/ketchpartnersweb) create a pull request from [your branch] to working.  Do not create to master.  Submit pull request and email dave@openketch.com to request merge with working.


Current Official Master Releases:

Still in development

---

# Panini Helpers

We've added a Panini helpers for per-page or per-layout styles.

[SEE EXAMPLE](http://notebooks.zurb.com/posts/10139362?t=f9b74287fe3ac074)

---



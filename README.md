# design.ubuntu.com

The codebase for <http://design.ubuntu.com>.

## Local development

Install dotrun as described in https://github.com/canonical/dotrun#installation Launch it from the head of this repo

    dotrun

Once the containers are started, you can visit <http://127.0.0.1:8011> in your browser.

### Building CSS

For working on [Sass files](_sass), you may want to dynamically watch for changes to rebuild the CSS whenever something changes.

To setup the watcher, open a new terminal window and run:

``` bash
./run watch
```

# Deploy
You can find the deployment config in the deploy folder.

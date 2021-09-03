# Webpack basic template

Simple webpack template for static sites.

## Prerequisites

* node and npm(cuz this started kit uses npm scripts)
* git or other DVCS and github(it must be github, because this template has script which publish the page using gh-pages)

## How to use it?

* Click ` Use this template` (green button above) - this will genereate a new repository based on this starter kit
* Clone newly created repository with ` git clone <repo_address> .` (if you use git)
* In project directory with cloned repository open a terminal and type ` npm install ` in order to install required packages
* Try to use one of the scripts in order to check if everything works fine

## What can you find in this boilerplate?

* support for css and scss
    * sass
    * sass-loader
    * postcss
    * postcss-loader
    * css-loader
    * MiniCssExtractPlugin
    * style-loader
* support for older browsers
    * babel(babel/cli, babel/core, babel-loader, babel/polyfill, and babel/preset-env as a preset)
    * autoprefixer
* plugins like:
    * clean-webpack-plugin
    * html-webpack-plugin
    * mini-css-extract-plugin
* webpack facilities
    * webpack-dev-server
    * webpack-merge
* github facilities
    * gh-pages
* async support
    * regenerator-runtime

## Scripts
* ` npm run dev ` - runs development mode(with devserver),
* ` npm run prod  ` - runs production mode,
* ` npm run publish  ` - runs prod config and publish the page using gh-pages branch
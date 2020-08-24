# Delta starter CLI

Command line interface (CLI) app that sets up boilerplate for projetcs. Objective is to include support for all the common boilerplates. See this [list](##available-boilerplates).

## Installation

You need:
1. [Node.js](https://nodejs.org) installed on your matching.  
2. NPM
3. Git
<!-- 
To install:
`npm install -g delta-starter` -->

The package will be published on npm very soon, until then, it can be installed using :

```shell
git clone https://github.com/delta/delta-starter
cd delta-starter
npm i -g ./
```

## Usage

After installing, execute the CLI:

`delta-starter help`

This will list all the commands available in the CLI.

For example, starting a project using a NodeJS/mongo boilerplate is as simple as:

`delta-starter node my-project`

## Available boilerplates

These are the currently available boilerplates. Aim is to include all the common tech stacks. Please help by creating boilerplates which don't exist

| NodeJS + mongo  | https://github.com/delta/dns-mongo |
|-----------------|------------------------------------|

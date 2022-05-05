# Project Title

FRN Boiler-Plate to make VTEX-STORE'S

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them:

- Yarn

- NodeJS

- Visual Studio Code

- Charles for [macOs](<[https://www.charlesproxy.com/download/](https://www.charlesproxy.com/download/)>)

- Fiddler for [Windows](<[https://www.telerik.com/download/fiddler](https://www.telerik.com/download/fiddler)>)

### Installing Yarn

- For **_Windows Users_**:


    -  [Download the installer](https://classic.yarnpkg.com/latest.msi)

    - If you want to see more about it [click](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

- For **_macOS_**: there are three options for installing Yarn on _macOS_.

```
- brew install yarn
```

&&

```
- sudo port install yarn
```

or

```
- curl -o- -L https://yarnpkg.com/install.sh | bash
```

## Running the code

First you have to do:

```
- git clone --depth -b master <repo_url>
```

&&

```
- yarn
```

This is because you need to download all the dependencies after that you have to do:

```
- yarn start
```

**_Easy right?_**, webpack gonna open a new tab in your browser called **localhost:3000** and you will see something like:

![Home FRN Cubo](https://storage.googleapis.com/teste-alfredo/boiler-plate-frn/home-cap.png)

**_GOOD JOB, You're learning faster!!!!_**

## Built With

- [Pug](https://pugjs.org/api/getting-started.html) -
  It is a high-performance, feature-rich template engine, implemented with JavaScript for the Node.js ecosystem
- [Webpack](http://www.dropwizard.io/1.0.2/docs/) - We used to
  Dependency Management,
    Execution of tasks,
    Loading and using modules of all types (AMD, CommonJS or ES2015),
    Development Server

- [VanillaJS](https://maven.apache.org/) - To not use a framework
- [Rxjs](https://rometools.github.io/rome/) - Used to make request's
- [Slick](https://kenwheeler.github.io/slick/) - To make a carrousel
- [HammerJS](https://hammerjs.github.io/) - To make gestures in mobile pictures
- [Sweetalert2](https://sweetalert2.github.io/) - To make popup
- [Zalog](https://github.com/zalog/placeholder-loading) - To make Ui skeleton's
- [Currency.js](https://currency.js.org/) - To work with prices
- [Pretty-checkbox](https://lokesh-coder.github.io/pretty-checkbox/) - To work with checkboxes

# FRN CLI

First Install HYGEN

```
- npm i -g hygen
```

or

```
- yarn global add hygen-add
```

To make a new page with **(Pug, SCSS, Javascript and EntryName in webpack)** just run:

- Exemplo: Profile Page

```
- hygen frn-create-page new --namePug Profile --nameJs profile --className Profile --nameScss profile --entryName profile
```

To make a new COMPONENT just run:

- Exemplo: Shipping

```
- hygen new component --name Shipping
```

To make a new SERVICE just run:

- Exemplo: Simulation

```
- hygen new service --name Shipping
```

## Acknowledgments

- BEM — Block Element Modifier
- Object Oriented Programming

## Authors

- **FRN Team** - FRN Cubo - [Contato](https://frncomunicacao.com.br/)

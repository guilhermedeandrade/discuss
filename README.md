<p align="center">
   <img src=".github/logo.png" width="400"/>
</p>

<br />

# Discuss 

[![Author](https://img.shields.io/badge/author-Guilherme%20de%20Andrade-2A6369?style=flat-square)](https://github.com/guilhermedeandrade)

<br />

<p align="center">
  <img src=".github/app-preview.png?raw=true"/>
</p>

---

## :pushpin: Table of Contents

- [Introduction](#scroll-introduction)
- [Installation](#construction_worker-installation)
- [Getting Started](#runner-getting-started)

## :scroll: Introduction

This was an application built during Stephen Grider's The Complete Elixir and Phoenix Bootcamp.

It's basically a CRUD app with Websockets to provider a better user experience.

## :construction_worker: Installation

**You need to install [Elixir](https://elixir-lang.org/install.html), [PostgreSQL](https://www.postgresql.org/download), [Phoenix@1.2.5](https://github.com/phoenixframework/phoenix) first, then in order to clone the project via HTTPS, run this command:**

`git clone https://github.com/guilhermedeandrade/discuss.git`

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

`git clone git@github.com:guilhermedeandrade/discuss.git`

**Install dependencies**

```sh
mix deps.get
```

```sh
yarn

# npm i
```

## :runner: Getting Started

**Create and migrate your database**

```sh
mix ecto.create && mix ecto.migrate
```

**Set up the environment variables**

```sh
cp .env.sample .env
```

Note that you should fill in the variables with your own keys. Then you should load them:

```sh
source .env
```

**Running the server**

Finally, you can run the application :tada:

```sh
mix phoenix.server
```

Now you can visit [localhost:4000](http://localhost:400) from your browser

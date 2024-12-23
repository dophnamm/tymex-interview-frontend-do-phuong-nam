#### Contact

| Phone      | Email              |
| ---------- | ------------------ |
| 0764641209 | dophnamm@gmail.com |

# Server Mock (NodeJS + json-server)

<span style="color: red; font-weight: bold;">⚠️ Warning:</span> Since this server is hosted on a free domain, please click the link to wake it up. Sorry for the inconvenience

https://tymex-mock-server-node.onrender.com

# React + TypeScript + Vite

Production: [![Netlify Status](https://api.netlify.com/api/v1/badges/f7e756e9-2e47-445b-bc0a-87778f4ccd7c/deploy-status)](https://tymex-itv-fe-do-phuong-nam.netlify.app/)

https://tymex-itv-fe-do-phuong-nam.netlify.app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Available Scripts

## Set up environment

`node v20.14.0, yarn v1.22.22`

Install `node_modules`:

```bash
nvm install && nvm use
```

### Running the development server.

Add file `.env` (Eg: from `.env.example`)

```bash
cp .env.example .env
```

macOS

```bash
    make bootstrap
```

```bash
    make dev
```

```bash
    make test
```

Window

```bash
    yarn install
```

```bash
    yarn run dev
```

```bash
    yarn run test:run
```

Install a new package:

```bash
yarn add <package_name>
```

### Start develop new feature

- Create a `feature/name-of-feature` from `main`
- You can create MR to `main` to cross-check it. But **DO NOT MERGE TO MAIN**

### Git commit convention

- `chore`: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation related changes
- `refactor`: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
- `pef`: A code that improves performance
- `style`: A code that is related to styling
- `UI`: A better styles

### Folder structure

```markup
├── public
│   ├── locales                         internationalized resource
│   ├── <Font Name>                     define font family
├── src
│   ├── HOC
│   ├── app.ts
│   ├── @types                          declare module (.css, .scss, ...)
│   ├── types                           declare type global
│   ├── assets                          local static resources (images, icon,...)
│   ├── components                      business common components
│   ├── context                         hooks context
│   ├── hooks                           custom hooks
│   ├── index.css                       global styles in application
│   ├── layouts                         general layout
│   ├── libs                            libs
│   ├── locales                         internationalized resource
│   ├── models                          global model
│   │   ├── Welcome                     folder define model
│   │   │   ├── index.types.ts          code of types model
│   │   ├── User
│   │   └── Admin
│   ├── pages                           business page entry and common templates
│   │   ├── Welcome
│   │   │   ├── index.tsx               code of page components
│   │   │   ├── index.test.ts           code of unit test
│   │   │   ├── styles.module.scss      page style
│   │   │   ├── components              components use internal page, but it is recommended not to exceed three level
│   │   │   ├── api                     folder define request call API
│   │   │   └── utils                   tool, function, ... use internal page
│   │   ├── User
│   │   │   ├── index.tsx
│   │   │   ├── index.text.ts
│   │   │   └── styles.module.scss
│   │   └── Admin
│   ├── providers                       define all resources of Refine
│   ├── theme                           defines variable style
│   └── utils                           tool, function, constant,...
├── Makefile                             script command
├── README.md
├── package.json
├── .gitlab-ci.yml
├── .env
```

## Learn More

- **Tailwind** [Docs](https://tailwindcss.com/docs)
- **Ant Design** [Docs](https://refine.dev/docs/ui-frameworks/antd/tutorial/)
- **React Router** [Docs](https://refine.dev/docs/core/providers/router-provider/)
- **React Query** [Docs](https://tanstack.com/query/v3/docs/framework/react/overview)

## Source

- [Figma](https://www.figma.com/design/5vYZWIUgTNJ1Ud7RfV2zq4/Untitled?node-id=1-163&t=yyG8ZlLoVnuryjCy-0)

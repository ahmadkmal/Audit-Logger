# Audit Logger

## Live Demo
[Audit Logger]()
## 🔨 Requirement

You need [NodeJs](https://nodejs.org/en/download/) & [NPM](https://www.npmjs.com/) installed on your computer


## 💿 Installation





### Clone the repository
```  
git clone 
```
```  
cd estarta
```
### Install dependencies

```sh
npm install
```

### Run development
```
npm run dev
```
### Build for production

#### npm
```sh
npm run build

```
## Requirements and Output

- User select the date range to search Logs

- Display the Results in a table Structure with the following column :
Log ID
Application Type
Application ID
Action
Action Details
Date : Time

- Pagination :
Display 10 records per page
Use client side pagination

- User will able to sort on all the columns

- User will able to filter based on mentioned Fields :
Employee Name
Action type
Application type
From Date
Select date
To Date
Application ID
## Dependencies & Technology 

- Nextjs version 12.1.4
- Axios  version 0.24.0
- ReactJS version 17.0.2
- Sass version 1.26.3
- Tailwindcss version 3.0.7



### Folder Structure
```
├── .eslintrc.json
├── .gitignore
├── components
│  ├── Breadcrumb
│  │  ├── Breadcrumb.tsx
│  │  └── index.tsx
│  ├── DropDownField
│  │  ├── DropDownField.tsx
│  │  └── index.tsx
│  ├── InputFiled
│  │  ├── index.tsx
│  │  └── InputFiled.tsx
│  ├── Pagination
│  │  ├── index.tsx
│  │  ├── Pagination.tsx
│  │  └── types.tsx
│  └── Table
│    ├── index.tsx
│    ├── table.module.scss
│    ├── Table.tsx
│    └── types.tsx
├── libs
│  ├── helpers
│  │  └── index.ts
│  └── statics
│    └── home.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│  ├── _app.tsx
│  ├── api
│  │  └── hello.ts
│  └── index.tsx
├── postcss.config.js
├── prettier.config.js
├── public
│  ├── favicon.ico
│  └── vercel.svg
├── README.md
├── services
│  ├── api.js
│  └── auditServices.ts
├── styles
│  └──  globals.css
├── tailwind.config.js
├── tsconfig.json
└── types
  └── pages
    └── home.ts
```


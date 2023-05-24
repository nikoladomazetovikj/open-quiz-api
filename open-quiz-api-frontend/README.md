# Open-API-Quiz-Client

## Getting Started

1. Download `NodeJs`:

```
https://nodejs.org/en
```
2. Open the project folder and run one of the commands:

```
npm install 
yarn install
```
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Copy `.env.development` file and create new file `.env.local`

5. Paste the `BASE_URL` value in `.env.local` file. By default Laravel gives port 8000. But you can always modify that
```
BASE_URL=http://127.0.0.1:8000

```

6. Open the application via following link (local development):
```angular2html
http://localhost:3000/
```

### Note:

- This application is using REST APIs
- You need to have running server to use this application
- Starting page is index page 
- Client is able to add new questions on `/contribute` page
- Admin can logs in via `/login` page
- Admin has permissions to add, approve or delete questions



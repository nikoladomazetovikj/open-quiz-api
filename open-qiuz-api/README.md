# OPEN-API-QUIZ-SERVER

#### To setup the project please follow this instructions:

1. Install composer (latest version)

```
https://getcomposer.org/download/
```

2. Run this command:

```
composer install
```

3. Create a database on your local machine

4. Rename `.env.example` file to `.env`

5. Open `.env` file and setup the following variables:

```
DB_DATABASE= {your database name}
DB_USERNAME= {db username}
DB_PASSWORD= {db password}
```

6. Generate key:

```
php artisan key:generate
```

7. In order to create db tables, run this command:

```
php artisan migrate
```
8. Seed data running this command:

```
php artisan db:seed
```
9. Start the server

```
php artisan serve
```

### Note:

- This is only the server side of the application
- There is already an admin user:
```
email: admin@quiz.test
password: 12345678
```
- Seeders use questions and answers from: `https://opentdb.com/`



# App Routes

## GET

- Homepage `app.get('/')`
  - should have login/register for those not logged in
  - have user-specific content for logged in users (lists)
- Login `app.get('/login')`
  - login form
- Register `app.get('/register')`
  - registration form

### API Calls

- Books API
- Movies/TV shows API
- Products API
- Food API
- For All APIs, send query as GET, if response, then do a POST req to appropriate db with user's item?? (Setup as promise...)

## POST

- Login `app.post('/login')`
  - verify user details, redirect to '/'
- Logout `app.post('/logout/')`
  - clear user cookies, redirect to '/'
- Register `app.post('/register')`
  - store user details in USERS db, redirect to /login
- Add list item to each db 

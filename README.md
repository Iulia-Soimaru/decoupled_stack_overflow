# Decoupled DBC Overflow

### Learning Competencies

- Create a Rails-API application from scratch
- Utilize incremental DB migrations
- Map complex and non-standard relationships using ActiveRecord
- Work with APIs using raw HTTP requests
- Utilize AJAX requests within Rails-API
- Create a JS widget using Javascript best practices and design patterns

### Summary

You've gotten your feet wet with Rails building Stack Overflow. Now, let's take it a step further and create a decoupled server/client setup, utilizing a JS-heavy client and 100% AJAX calls to communicate with the server.

You'll need to create completely separate `server` and `client` applications; it might even be best to store them in separate directories. Use Rails-API for your server, and whatever webserver you want for your client (Rails or Sinatra would work well).

### Features

Recreate **all** of the core features of your Stack Overflow clone. A few key things to remember:

- You will not be able to use **any** views or view helpers in your application
- You'll need to write raw jQuery, like you're used to, to make AJAX calls and handle responses
- You should send JSON data back from the server, rather than HTML or JS responses, as in a classical Rails app

### Authentication

If time allows, consider adding authentication to your app. Keep in mind that, since it's entirely JS/AJAX-based, you'll need to use AJAX to register and log in, as well!

The following resource should come in handy:

[AJAX Patterns - Direct Login](http://ajaxpatterns.org/Direct_Login)

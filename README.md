# pizza-maker #

The **pizza-maker** is a small web application created using:

*   in the front-end: [Bootstrap 4][1] and [Angular 5][2]
*   in the back-end: [Django 2.0][3] and the [Django Rest Framework][4]

The pizza-maker is meant as a simple working example of this stack.

## Installation ##

These installation instructions work on Ubuntu.

### Prerequisites ###

The pizza-maker requires the following:

*   [npm][5]
*   Python 3 (already installed on Ubuntu)
*   pip3
*   Django and the Django Rest Framework

Here's how to install these requirements:

```
sudo apt install npm
sudo apt install python3-pip
sudo pip3 install --upgrade django
sudo pip3 install --upgrade djangorestframework
```

Then, clone this repository:

```
git clone https://github.com/marios-zindilis/pizza-maker.git
```

### Front-End ###

To prepare the front-end, change to the `front-end` directory, and install the
Javascript dependencies:

```
cd front-end
npm install
```

### Back-End ###

To prepare the back-end, change to the `back-end` directory, create the
database, and initialize it with the sample data:

```
cd ../back-end
./manage.py makemigrations pizza_maker
./manage.py migrate
./manage.py loaddata fixture.json
```

## Build ##

At this point, you build the front-end into the back-end `static` directory:

```
cd ../front-end
ng build --output-path ../back-end/pizza_maker/static/ --output-hashing none
```

## Run ##

Finally, you can run the application:

```
cd ../back-end
./manage.py runserver
```

You should now be able to access your application at the URL which is output
by `manage.py`. By default that is:

    http://127.0.0.1:8000/

## What's Next? ##

The application should work fine, but it's only a simple proof-of-concept app.
Here are some ideas if you want to work on improving it:

1.  The "Edit" button under each pizza links to the Django admin. Perhaps you
    can make it disappear unless the user is logged in.
2.  The API has full CRUD functionality, but the application only reads from
    it. Perhaps you want to add features to add toppings and pizzas, edit them
    and delete them.
3.  Customize the title with https://angular.io/guide/set-document-title

## Credits ##

[Coding for Entrepreneurs][7] has two fantastic series of videos on Youtube,
[one on TypeScript][8] and [one on Angular][9]. Both have been extremely
valuable resources for me. They also have a series of videos on their website
on [combining Django and Angular][10]. Half of the latter is available for free
after registration (also free).

Credits for the pizza pictures: 

*   Margherita: https://www.flickr.com/photos/jeffreyww/14703152728
*   Hawaiian: https://www.flickr.com/photos/yutakaseki/24318211034
*   Vegetarian: https://www.flickr.com/photos/franciscodaum/4027043834
*   Pepperoni: https://www.flickr.com/photos/ilove9and23/12992694503
*   Chicken: https://www.flickr.com/photos/yutakaseki/33828862802

The pizza list design is a modified version of the [Album][6] example from the
Bootstrap documentation.

<!-- Links -->

[1]: https://getbootstrap.com/ "Bootstrap"
[2]: https://angular.io/ "Angular"
[3]: https://www.djangoproject.com/ "Django"
[4]: http://www.django-rest-framework.org/ "Django Rest Framework"
[5]: https://www.npmjs.com/ "NPM"
[6]: https://getbootstrap.com/docs/4.0/examples/album/
  "Bootstrap Documentation - Album Example"
[7]: https://www.codingforentrepreneurs.com/ "Coding for Entrepreneurs"
[8]: https://www.youtube.com/watch?v=yRQlo6ApYLw&list=PLEsfXFp6DpzQMickZgPq0Pn2uQD77UXoi
  "Coding for Entrepreneurs - Getting Started with Typescript"
[9]: https://www.youtube.com/watch?v=9wc8Gv8X49U&list=PLEsfXFp6DpzQThMU768hTZInWUqfoyTEW
  "Coding for Entrepreneurs - Try Angular 4"
[10]: https://www.codingforentrepreneurs.com/projects/angular-django/
  "Coding for Entrepreneurs - Angular & Django"

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

<!-- Links -->

[1]: https://getbootstrap.com/ "Bootstrap"
[2]: https://angular.io/ "Angular"
[3]: https://www.djangoproject.com/ "Django"
[4]: http://www.django-rest-framework.org/ "Django Rest Framework"
[5]: https://www.npmjs.com/ "NPM"

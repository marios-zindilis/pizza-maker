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

<!-- Links -->

[1]: https://getbootstrap.com/ "Bootstrap"
[2]: https://angular.io/ "Angular"
[3]: https://www.djangoproject.com/ "Django"
[4]: http://www.django-rest-framework.org/ "Django Rest Framework"
[5]: https://www.npmjs.com/ "NPM"

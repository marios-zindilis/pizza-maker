from django.db import models


class Topping(models.Model):
    name = models.CharField(max_length=40)

    @property
    def on_pizzas(self):
        output = []
        for pizza in self.pizza_set.all():
            output.append({'id': pizza.id, 'name': pizza.name})
        return output

    def __str__(self):
        return self.name


class Pizza(models.Model):
    name = models.CharField(max_length=40)
    toppings = models.ManyToManyField('Topping')

    @property
    def _toppings(self):
        output = []
        for topping in self.toppings.all():
            output.append({'id': topping.id, 'name': topping.name})
        return output

    def __str__(self):
        return self.name

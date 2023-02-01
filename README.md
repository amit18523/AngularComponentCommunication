# ComponentCommunication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## How To Start

1) Fork and Clone
2) Run `npm i`
3) Run `ng serve` and navigate to `http://localhost:4200/`

## Task 1

1) We have to pass an array object(name, age, city) from parent to child
    * Parent => vendor.component
    * child => active-vendor.component
2) At child component will get this data using `ngOnChanges`
3) At child component will render this data in table using `plain-html-table`
4) In table we will have 4 columns `name, age, city, block`
5) Under `block` column, there will be a button (label = block) per row. after hit this button specipic row data will print under parent component (below a plain-html-table) 

## Task 2

1) We are already passing the data from parent to child
3) After hit `block` button we have to also show that row data under `block-vendor` by using `subject/behaviorsubject`

## Reference 

[Icon Bootstrap](https://icons.getbootstrap.com/)

[Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
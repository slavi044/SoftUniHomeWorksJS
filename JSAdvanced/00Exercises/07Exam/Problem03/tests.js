let pizzUni = require("./PizzaPlace.js");
let assert = require("chai").assert;
let expect = require("chai").expect;

describe("makeAnOrder(obj) tests", function () {
   describe("Correct data input", function () {
      it("Order only pizza", function(){
         let order = {
            orderedPizza: "Margarita"
         }

         expect(pizzUni.makeAnOrder(order)).to.equal("You just ordered Margarita");
      }); 

      it("Order pizza and drink", () => {
         let order = {
            orderedPizza: "Margarita",
            orderedDrink: "Coca Cola"
         }

         expect(pizzUni.makeAnOrder(order)).to.equal("You just ordered Margarita and Coca Cola.");
      });
   });

   describe("Incorect data input", () => {
      it("Input without pizza", () => {
         expect(() => {pizzUni.makeAnOrder({})}).to.throw("You must order at least 1 Pizza to finish the order.");
      })
   });
});

describe("getRemainingWork([]) tests", () => {
   describe("Correct data input", () => {
      it("Two pizzas preparing", () => {
         let orders = [{pizzaName: 'margarita', status: 'ready'}, 
         {pizzaName: 'margarita', status: 'preparing' },
         {pizzaName: 'just pizza', status: 'preparing' }];

         expect(pizzUni.getRemainingWork(orders)).to.equal("The following pizzas are still preparing: margarita, just pizza.")
      })

      it("One ready pizza", () => {
         let orders = [{pizzaName: 'margarita', status: 'ready'}];

         expect(pizzUni.getRemainingWork(orders)).to.equal("All orders are complete!")
      })
   });
});

describe("orderType() tests", () => {
   describe("Correct data input", () => {
      it("Delivery test", () => {
         expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
      });

      it("Carry Out test", () => {
         expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
      });
   });
});
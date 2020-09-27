var pizzatotal = 0;
let myOrderList = [];

function addToOrder() {
  var PizzaOrder = {
    id: String(Math.random()),
    customerInformation: [],
    pizzaorder: {
      allToppings: []
    }
  };

  var order = PizzaOrder;
  order.customerInformation.fName = document.querySelector("#firstname").value;
  order.customerInformation.lName = document.querySelector("#lastname").value;
  order.customerInformation.address = document.querySelector("#address").value;
  order.customerInformation.tel = document.querySelector("#tel").value;

  var orderWithPizza = pizzaselect(order);

  myOrderList.push(orderWithPizza);

  displayOrder();
}

function displayOrder() {
  var orderList = document.querySelector("#orderinfo");
  orderList.innerHTML = "";

  var infoList = document.createElement("li");
  infoList.innerText =
    myOrderList[0].customerInformation.fName +
    " " +
    myOrderList[0].customerInformation.lName +
    "\n" +
    myOrderList[0].customerInformation.address +
    "\n" +
    myOrderList[0].customerInformation.tel +
    "\n\nPizza:\n";
  orderList.append(infoList);

  var totalPrice = 0;

  for (let pizzaOrder of myOrderList) {
    var listItem = document.createElement("li");
    listItem.innerText =
      pizzaOrder.pizzaorder.quantity +
      " " +
      pizzaOrder.pizzaorder.sizeName +
      " " +
      pizzaOrder.pizzaorder.pizzaSelection +
      ", " +
      Object.keys(pizzaOrder.pizzaorder.allToppings) +
      " $";

    if (Object.keys(pizzaOrder.pizzaorder.allToppings).length > 0) {
      let tmpCalculation2 =
        pizzaOrder.pizzaorder.sizePrice * pizzaOrder.pizzaorder.quantity +
        parseFloat(Object.values(pizzaOrder.pizzaorder.allToppings)) *
          Object.keys(pizzaOrder.pizzaorder.allToppings).length *
          pizzaOrder.pizzaorder.quantity;
      listItem.innerText += tmpCalculation2.toFixed(2);

      totalPrice += tmpCalculation2;
    } else {
      let tmpCalculation1 =
        pizzaOrder.pizzaorder.sizePrice * pizzaOrder.pizzaorder.quantity;
      listItem.innerText += tmpCalculation1.toFixed(2);

      totalPrice += tmpCalculation1;
    }

    var btnEditOrder = document.createElement("button");
    btnEditOrder.innerText = "Edit Order";
    btnEditOrder.setAttribute("onclick", "editOrder2(this);");
    btnEditOrder.setAttribute("data-orderid", pizzaOrder.id);
    listItem.append(btnEditOrder);
    orderList.append(listItem);
  }
  var totalItem = document.createElement("li");
  totalItem.innerText = "Order Total: $" + totalPrice.toFixed(2);
  orderList.append(totalItem);
}

function editOrder(btnEditOrder) {
  //send information back to the html

  for (let PizzaOrder of myOrderList) {
    if (btnEditOrder.getAttribute("data-orderid") === PizzaOrder.id) {
      if (PizzaOrder.customerInformation.fName) {
        document.getElementById("firstname").value =
          PizzaOrder.customerInformation.fName;
      }

      if (PizzaOrder.customerInformation.lName) {
        document.getElementById("lastname").value =
          PizzaOrder.customerInformation.lName;
      }

      if (PizzaOrder.customerInformation.address) {
        document.getElementById("address").value =
          PizzaOrder.customerInformation.address;
      }

      if (PizzaOrder.customerInformation.tel) {
        document.getElementById("tel").value =
          PizzaOrder.customerInformation.tel;
      }

      if ("Super Cheesy" === PizzaOrder.pizzaorder.pizzaSelection) {
        document.getElementById("supercheesy").checked = true;
      }
      if ("Extra Meaty" === PizzaOrder.pizzaorder.pizzaSelection) {
        document.getElementById("extrameaty").checked = true;
      }
      if ("Really Veggy" === PizzaOrder.pizzaorder.pizzaSelection) {
        document.getElementById("reallyveggy").checked = true;
      }

      if ("small" === PizzaOrder.pizzaorder.sizeName) {
        document.getElementById("small").checked = true;
      }

      if ("medium" === PizzaOrder.pizzaorder.sizeName) {
        document.getElementById("medium").checked = true;
      }
      if ("large" === PizzaOrder.pizzaorder.sizeName) {
        document.getElementById("large").checked = true;
      }
      if ("extralarge" === PizzaOrder.pizzaorder.sizeName) {
        document.getElementById("extralarge").checked = true;
      }

      document.getElementsByName("pizzaquantity")[0].value =
        PizzaOrder.pizzaorder.quantity;

      if (PizzaOrder.pizzaorder.allToppings.extracheese) {
        document.getElementsByName("extracheese")[0].checked = true;
      }
      if (PizzaOrder.pizzaorder.allToppings.pepperoni) {
        document.getElementsByName("pepperoni")[0].checked = true;
      }
      if (PizzaOrder.pizzaorder.allToppings.mushrooms) {
        document.getElementsByName("mushrooms")[0].checked = true;
      }
      if (PizzaOrder.pizzaorder.allToppings.bacon) {
        document.getElementsByName("bacon")[0].checked = true;
      }
      if (PizzaOrder.pizzaorder.allToppings.olives) {
        document.getElementsByName("olives")[0].checked = true;
      }
    }
    saveChanges();
  }
}

function findMyPizza(editID) {
  return myOrderList.find(item => item.id == editID);
}

function editOrder2(btnEditOrder) {
  const editID = btnEditOrder.dataset.orderid;

  let PizzaOrder = findMyPizza(editID);

  if (btnEditOrder.getAttribute("data-orderid") === PizzaOrder.id) {
    if (PizzaOrder.customerInformation.fName) {
      document.getElementById("firstname").value =
        PizzaOrder.customerInformation.fName;
    }

    if (PizzaOrder.customerInformation.lName) {
      document.getElementById("lastname").value =
        PizzaOrder.customerInformation.lName;
    }

    if (PizzaOrder.customerInformation.address) {
      document.getElementById("address").value =
        PizzaOrder.customerInformation.address;
    }

    if (PizzaOrder.customerInformation.tel) {
      document.getElementById("tel").value = PizzaOrder.customerInformation.tel;
    }

    if ("Super Cheesy" === PizzaOrder.pizzaorder.pizzaSelection) {
      document.getElementById("supercheesy").checked = true;
    }
    if ("Extra Meaty" === PizzaOrder.pizzaorder.pizzaSelection) {
      document.getElementById("extrameaty").checked = true;
    }
    if ("Really Veggy" === PizzaOrder.pizzaorder.pizzaSelection) {
      document.getElementById("reallyveggy").checked = true;
    }

    if ("small" === PizzaOrder.pizzaorder.sizeName) {
      document.getElementById("small").checked = true;
    }

    if ("medium" === PizzaOrder.pizzaorder.sizeName) {
      document.getElementById("medium").checked = true;
    }
    if ("large" === PizzaOrder.pizzaorder.sizeName) {
      document.getElementById("large").checked = true;
    }
    if ("extralarge" === PizzaOrder.pizzaorder.sizeName) {
      document.getElementById("extralarge").checked = true;
    }

    document.getElementsByName("pizzaquantity")[0].value =
      PizzaOrder.pizzaorder.quantity;

    if (PizzaOrder.pizzaorder.allToppings.extracheese) {
      document.getElementsByName("extracheese")[0].checked = true;
    }
    if (PizzaOrder.pizzaorder.allToppings.pepperoni) {
      document.getElementsByName("pepperoni")[0].checked = true;
    }
    if (PizzaOrder.pizzaorder.allToppings.mushrooms) {
      document.getElementsByName("mushrooms")[0].checked = true;
    }
    if (PizzaOrder.pizzaorder.allToppings.bacon) {
      document.getElementsByName("bacon")[0].checked = true;
    }
    if (PizzaOrder.pizzaorder.allToppings.olives) {
      document.getElementsByName("olives")[0].checked = true;
    }

    document.getElementById("pizzaID").value = PizzaOrder.id;
  }
}

function saveChanges() {
  const pizzaID = document.getElementById("pizzaID").value;
  let OldPizzaOrder = findMyPizza(pizzaID);

  var PizzaOrder = {
    id: String(Math.random()),
    customerInformation: [],
    pizzaorder: {
      allToppings: []
    }
  };

  myOrderList[0].customerInformation.fName = document.querySelector(
    "#firstname"
  ).value;
  myOrderList[0].customerInformation.lName = document.querySelector(
    "#lastname"
  ).value;
  myOrderList[0].customerInformation.address = document.querySelector(
    "#address"
  ).value;
  myOrderList[0].customerInformation.tel = document.querySelector("#tel").value;

  let newPizza = pizzaselect(PizzaOrder);
  OldPizzaOrder.pizzaorder = newPizza.pizzaorder;
  displayOrder();
}

function pizzaselect(order) {
  order.pizzaorder.allToppings = [];

  order.pizzaorder.pizzaSelection = document.querySelector(
    "input[name=pizzaSelection]:checked"
  ).value;
  order.pizzaorder.sizeName = document.querySelector(
    "input[name=pizzasize]:checked"
  ).id;
  order.pizzaorder.sizePrice = document.querySelector(
    "input[name=pizzasize]:checked"
  ).value;
  order.pizzaorder.quantity = document.querySelector(
    "input[name = pizzaquantity]"
  ).value;

  if (document.querySelector("input[name=extracheese]:checked")) {
    order.pizzaorder.allToppings.extracheese = document.querySelector(
      "input[name = extracheese]"
    ).value;
  }

  if (document.querySelector("input[name=pepperoni]:checked")) {
    order.pizzaorder.allToppings.pepperoni = document.querySelector(
      "input[name = pepperoni]"
    ).value;
  }

  if (document.querySelector("input[name=mushrooms]:checked")) {
    order.pizzaorder.allToppings.mushrooms = document.querySelector(
      "input[name = mushrooms]"
    ).value;
  }

  if (document.querySelector("input[name=bacon]:checked")) {
    order.pizzaorder.allToppings.bacon = document.querySelector(
      "input[name = bacon]"
    ).value;
  }

  if (document.querySelector("input[name=olives]:checked")) {
    order.pizzaorder.allToppings.olives = document.querySelector(
      "input[name = olives]"
    ).value;
  }

  return order;
}

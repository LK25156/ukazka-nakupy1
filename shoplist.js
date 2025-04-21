export const list = [
  // ...
];

// funkce pro upravování pole s položkami seznamu
//funkce pro přidání nové položky
export const addItem = (name, amount) => {
  list.push({
    name: name,
    amount: amount,
    bought: false,
  });
};

//funkce pro označení/odznačení položky jako koupené
export const toggleBought = (index) => {
  list[index].bought = !list[index].bought;
};

//funkce pro smazání položky ze seznamu
export const deleteItem = (index) => {
  list.splice(index, 1);
};

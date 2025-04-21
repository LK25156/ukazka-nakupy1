export const list = [
  { name: 'Mléko', amount: '1 litr', bought: true },
  { name: 'Rohlíky', amount: '10 ks', bought: false },
  { name: 'Pivo Krušovice', amount: '2 ks', bought: false },
  { name: 'Sýr Eidem', amount: '200 g', bought: true },
  { name: 'Paštika', amount: '1 ks', bought: false },
  { name: 'Máslo', amount: '250 g', bought: true },
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

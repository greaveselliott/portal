/*
https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns#updating-an-item-in-an-array
*/

const updateObjectInArray = (array, action) =>
  array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item
    };
  });

export default updateObjectInArray;

/*
https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns#updating-an-item-in-an-array
*/

function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.index) {
            return item;
        }
​
        return {
            ...item,
            ...action.item
        };    
    });
}
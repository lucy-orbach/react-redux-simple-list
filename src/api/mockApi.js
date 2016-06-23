import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: "decide-events-theme",
    title: "Decide Event's Theme",
    description: "Conceptualize your idea, mind the targeted audience for the particular event."
  },
  {
    id: "view-locations",
    title: "View locations",
    description: "Venture out to hunt for the possible locations. Consider cost of room rentals, the number of hours you can have access to it, and the added benefits of the place in question."
  },
  {
    id: "select-location",
    title: "Select Location",
    description: "Sign-up contract with venue. Make sure all aspects are included as: cost for venue, hours of access, services included, etc."
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return replaceAll(item.title, ' ', '-');
};

export default class mockApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      // timeout simulating the time of call to Server
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }
        if (item.id) {
          //checks is item exists => item is being edited
          const existingItemIndex = items.findIndex(it => it.id === item.id);
          // replaces with edited item
          items.splice(existingItemIndex, 1, item);
        } else { //item is new
          // Simulating creation here - id will be done by server
          item.id = generateId(item);
          items.push(item);
        }
        resolve(Object.assign({}, item));
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //finds item by id
        const indexOfItemToDelete = items.findIndex(it => {
          it.id == itemId;
        });
        //removes it from items
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}
 
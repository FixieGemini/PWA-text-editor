import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
  export const putDB = async (content) => {
    console.log('PUT into database');

    // Create connection to database and version to be used
    const contactDb = await openDB('jate', 1);

    // Create a new transaction, specify the database and data privileges
    const tx = contactDb.transaction('jate', 'readwrite');

    // Open desired object store
    const store = tx.objectStore('jate');

    // Use .add() method on store and pass in content
    const request = store.put({ id: 1, value: content });

    // Get confirmation of request
    const result = await request;
    console.log ('data saved to database', result);
  };

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
  export const getDb = async () => {
    console.log('GET from database');

    // Create connection to database and version to use
    const contactDb = await openDB('jate', 1);

    // Create new transaction and specify the database and privileges
    const tx = contactDb.transaction('jate', 'readonly');

    // Open the desired object store
    const store = tx.objectStore('jate');

    // Use .getAll() method to get all the data in the database
    const request = store.getAll();

    // Get confirmation of request
    const result = await request;
    //console.log('result.value', result);
    return result?.value;
  };
  
initdb();

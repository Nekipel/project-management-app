import React, { useState } from 'react';
import Parse from 'parse';

export const PersonComponent = () => {
  const [person, setPerson] = useState(Object);

  async function addPerson() {
    const Person = Parse.Object.extend('Person');
    const personNew: Parse.Object = new Person();

    personNew.set('name', 'John');
    personNew.set('email', 'john@back4app.com');

    personNew.save().then(
      (personNew) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + personNew);
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    );
  }
  //   try {
  //     const Person = new Parse.Object('Person');
  //     Person.set('name', 'John');
  //     Person.set('email', 'john@back4app.com');
  //     await Person.save();
  //     console.log(Person.save());
  //     alert('Person saved!');
  //   } catch (error) {
  //     console.log('Error saving new person: ', error);
  //   }
  // }
  const fetchPerson = async function () {
    const query: Parse.Query = new Parse.Query('Person');
    // console.log('person name: ', query.get('name'));
    // console.log('person email: ', query.get('email'));
    // query.equalTo('name', 'Sam');
    const Person: Parse.Object[] = await query.find();
    setPerson(Person);
    console.log(person);
    try {
      for (const object of Person) {
        // Access the Parse Object attributes using the .GET method
        const name: string = object.get('name');
        const email: string = object.get('email');
        console.log(name);
        console.log(email);
      }
      // setPerson(Person);
      // console.log(person);
    } catch (error) {
      if (error) {
        alert(`Error!`);
      }
    }
  };

  return (
    <div>
      <button onClick={addPerson}>Add Person</button>
      <button onClick={fetchPerson}>Fetch Person</button>
      {person !== null && (
        <div>
          <p>{`Name: ${person}`}</p>
          <p>{`Email: ${person}`}</p>
        </div>
      )}
    </div>
  );
};

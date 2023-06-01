const getProperties = (obj) => Object.keys(obj);

let person = {
    name: "Lucas",
    age: 27,
    profession: "Developer"
  };
  
  let properties = getProperties(person);
  console.log(properties);
  
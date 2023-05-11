// const mySy = Symbol(1);

// const obj = {
//     a: 1,
//     get b() {
//       return 2;
//     },
//   };

  const js = JSON.parse(JSON.stringify(obj));
  obj[mySy] = 'symbol';
  const newObj = { ...obj };
  console.log(newObj, obj, js);


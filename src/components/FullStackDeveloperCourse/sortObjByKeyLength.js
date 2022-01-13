// Sort Object by Key Length
const sortObjByKeyLength = (obj) => {
  let object = {};
  let keyArray = Object.keys(obj);
  keyArray.sort();
  keyArray.forEach(function (item) {
    object[item] = obj[item];
  });
  return object;
};

export default sortObjByKeyLength;

const sjcl = require("sjcl");

const hashCode = (s = "") =>
  s.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);

let lastTimeoutId;
let schedulePassToExpire = function (time = 10000) {
  if (lastTimeoutId) clearTimeout(lastTimeoutId);
  lastTimeoutId = setTimeout(() => sessionStorage.removeItem("password"), time);
};

const getPassword = function () {
  let storedPass = sessionStorage.getItem("password");
  let storedHashedPass = sessionStorage.getItem("hashed-password");
  if (storedPass) {
    schedulePassToExpire();
    return storedPass;
  }

  let newPass = prompt("password", "1234");
  if (!newPass) {
    return getPassword();
  }
  if(!storedHashedPass){
    sessionStorage.setItem("hashed-password", sjcl.hash.sha256.hash(newPass)[0]);
  }else{
    if(storedHashedPass != sjcl.hash.sha256.hash(newPass)[0]){
      return alert("incorrect password");
    } 
  }
  sessionStorage.setItem("password", newPass);
  schedulePassToExpire();
  return newPass;
};

export const encryption = {
  encrypt: (values) => {
    let password = getPassword();
    if(!password) return null;
    let result = sjcl.encrypt(password, JSON.stringify(values));
    console.log("encrypt-result")
    console.log(result)
    return result || {};
  },
  decrypt: (data) => {
    let password = getPassword();
    if(!password) return null;
    let result = JSON.parse(sjcl.decrypt(password, data));
    console.log("decrypt-result")
    console.log(result)
    return result || {};
  },
};

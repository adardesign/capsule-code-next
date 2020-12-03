const sjcl = require("sjcl");

const password =
  "PuttingPasswordsInCodeIsATerribleIdeaButThisIsADemo!DoNotDoThisAtHome!!!";

export const encryption = {
  encrypt: (values) => {
    let password = prompt("password", "apass")
    return sjcl.encrypt(password, JSON.stringify(values));
  },
  decrypt: (data) => {
    let password = prompt("password", "apass")
    return JSON.parse(sjcl.decrypt(password, data));
  },
};

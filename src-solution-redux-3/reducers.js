

const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export function addUser(user) {
  return {
    type: "USER_ADDED",
    payload: user
  }
}


export default function (state = INITIAL_STATE, action = {}) {
  return state;
}

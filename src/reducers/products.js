let initialState = [
  {
    id: 1,
    name: "Iphone 6 Plus",
    price: 400,
    status: true,
  },
  {
    id: 2,
    name: "Galaxy S7",
    price: 300,
    status: false,
  },
  {
    id: 3,
    name: "Nokia Lumia",
    price: 200,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;

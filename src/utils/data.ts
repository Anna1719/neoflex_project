const products = [
  {
    id: 1,
    img: "/images/headphones_1.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
      abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 2,
    img: "/images/headphones_2.png",
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
      abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 3,
    img: "/images/headphones_3.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 4,
    img: "/images/headphones_1.png",
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 5,
    img: "/images/headphones_2.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 6,
    img: "/images/headphones_3.png",
    title: "Apple Earpods",
    price: 2327,
    rate: 4.5,
    count: 0,
    type: "normal",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 7,
    img: "/images/headphones_4.png",
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    count: 0,
    type: "wireless",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 8,
    img: "/images/headphones_5.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.5,
    count: 0,
    type: "wireless",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 9,
    img: "/images/headphones_6.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7,
    count: 0,
    type: "wireless",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l 
    abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

const wireless_headphones = products.filter((el) => el.type === "wireless");
const headphones = products.filter((el) => el.type === "normal");

export const data = {
  fisrt_feed: {
    title: "Наушники",
    elements: headphones,
  },
  second_feed: {
    title: "Беспроводные наушники",
    elements: wireless_headphones,
  },
};

export const getProductById = (id: number) => {
  if (!id) return;

  const product = products.find((el) => el.id === id);

  if (!product) return { response: null, status: "ERROR" };

  return { response: product, status: "OK" };
};

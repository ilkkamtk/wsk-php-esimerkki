'use strict';

const products = [
  {
    name: 'Brooklyn T-Shirt Black',
    description:
      'Brooklyn t-shirt black with white logo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image:
      'https://via.placeholder.com/150x200/333?text=Brooklyn+T-Shirt+Black',
  },
  {
    name: 'Apple Watch',
    description:
      'Apple watch sport in black. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150x200/333?text=Apple+Watch',
  },
  {
    name: 'Macbook Pro',
    description:
      'Macbook Pro with Retina display. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150x200/333?text=Macbook+Pro',
  },
  {
    name: 'iPhone 12',
    description:
      'iPhone 12 in black. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150x200/333?text=iPhone+12',
  },
  {
    name: 'Airpods',
    description:
      'Airpods in white. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150x200/333?text=Airpods',
  },
];

const productContainer = document.querySelector('#products');

products.forEach((product) => {
  let productElement = document.createElement('article');
  productElement.innerHTML = `
        <header>
            <h3>${product.name}</h3>
        </header>
        <figure>
            <img src="${product.image}" alt="${product.name}">
            <figcaption>${product.name}</figcaption>
        </figure>
        <p>${product.description}</p>
    `;
  productContainer.appendChild(productElement);
});

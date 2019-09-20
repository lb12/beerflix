'use strict';

import { renderComments } from './comments.js';

let beerDetailTemplate = ({image, name, price, firstBrewed, 
                           ingredients, description, brewersTips,
                           contributedBy, likes, commentsCounter }) => `
  <div class="detail-beer-image-container">
    <img class="detail-beer-image" src="${image}" alt="beer-image" srcset="">
    <div class="detail-social-container">
      <div>
        <span id="detail-social-like-counter">${likes}</span>
        <img class="detail-like-btn" src="/img/icons/like.png" alt="">
      </div>
      <div>
        <span id="detail-social-comment-counter">${commentsCounter}</span>
        <img class="detail-comment-btn" src="/img/icons/comment.png" alt="">
      </div>
    </div>
  </div>
  <h1 class="detail-beer-name">${name}</h1>
  <div class="detail-beer-row-inline">
    <div class="row-item row-item-left">
      <img class="detail-beer-price" src="/img/icons/money.png" alt="">
      <span>${price}</span>
    </div>
    <div class="row-item row-item-right">
      <img class="detail-beer-firstBrewed" src="/img/icons/calendar.png" alt="">
      <span>${firstBrewed}</span>
    </div>
  </div>
  <div class="detail-beer-info-section">
    <h2>Ingredients</h2>

    <ul class="detail-beer-ingredients">
      ${ingredients}
    </ul>
  </div>
  <div class="detail-beer-info-section">
    <h2>Description</h2>
    <p class="detail-beer-description">${description}</p>
  </div>  
  <div class="detail-beer-info-section">
    <h2>Brewer tips</h2>
    <p class="detail-beer-brewerTips">${brewersTips}</p>
  </div>
  <div class="detail-beer-info-section">
    <h2>Contributed by</h2>
    <p class="detail-beer-contributed-by">${contributedBy}</p>
  </div>
`;


let detailBeer = ` {
  "_id": "5d761441e714c7006a5d27d5",
  "beerId": 1,
  "name": "Buzz",
  "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
  "image": "https://images.punkapi.com/v2/keg.png",
  "ingredients": {
    "malt": [
      {
        "name": "Maris Otter Extra Pale",
        "amount": {
          "value": 3.3,
          "unit": "kilograms"
        }
      },
      {
        "name": "Caramalt",
        "amount": {
          "value": 0.2,
          "unit": "kilograms"
        }
      },
      {
        "name": "Munich",
        "amount": {
          "value": 0.4,
          "unit": "kilograms"
        }
      }
    ],
    "hops": [
      {
        "name": "Fuggles",
        "amount": {
          "value": 25,
          "unit": "grams"
        },
        "add": "start",
        "attribute": "bitter"
      },
      {
        "name": "First Gold",
        "amount": {
          "value": 25,
          "unit": "grams"
        },
        "add": "start",
        "attribute": "bitter"
      },
      {
        "name": "Fuggles",
        "amount": {
          "value": 37.5,
          "unit": "grams"
        },
        "add": "middle",
        "attribute": "flavour"
      },
      {
        "name": "First Gold",
        "amount": {
          "value": 37.5,
          "unit": "grams"
        },
        "add": "middle",
        "attribute": "flavour"
      },
      {
        "name": "Cascade",
        "amount": {
          "value": 37.5,
          "unit": "grams"
        },
        "add": "end",
        "attribute": "flavour"
      }
    ],
    "yeast": "Wyeast 1056 - American Ale™"
  },
  "firstBrewed": "09/2007",
  "brewersTips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
  "contributedBy": "Sam Mason <samjbmason>",
  "likes": 0,
  "comments": [],
  "price": 5,
  "apiKey": "F40XM1J-XYP4CV9-HC3RZRB-BJMWWQN",
  "comment": [
    {
      "comment": "Probando comentario",
      "dateComment": "2019-09-19T07:21:20.161Z"
    },
    {
      "comment": "Probando SEGUNDO comentario",
      "dateComment": "2019-09-19T07:22:47.565Z"
    }
  ]
}`;

const parseIngredientesToHTML = beer => {  
  const getArrayIngredients = (ingredient, mainName) => {
    let ingredientText = '';
    ingredient.forEach(({ name, amount: { value, unit} } = ingr) => {
      ingredientText += `<li>${value} ${unit} of '${name}' ${mainName}</li>`;
    });

    return ingredientText;
  };

  const ingredients = beer.ingredients;

  const malt = getArrayIngredients(ingredients.malt, 'malt');
  const hops = getArrayIngredients(ingredients.hops, 'hops');
  const yeast = `<li>${ingredients.yeast} yeast</li>`;

  return malt + hops + yeast;
};

const addCustomFields = beer => {
  beer.commentsCounter = beer.comment ? beer.comment.length : 0;
  beer.ingredients = parseIngredientesToHTML(beer);
};

const renderDetail = async id => {
  try {
    const selector = document.querySelector('.detail-beer-section');
    const beer = JSON.parse(detailBeer); // Obtener via API la cerveza detail y los comentarios de esta.

    addCustomFields(beer);

    selector.innerHTML = beerDetailTemplate(beer);
    renderComments(beer.comment);
  }catch(err) {
    console.error(err);
  }
};

export { renderDetail };

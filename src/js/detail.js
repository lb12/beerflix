'use strict';

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
  "_id": "5d761441e714c7006a5d27d8",
  "beerId": 4,
  "name": "Pilsen Lager",
  "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
  "image": "https://images.punkapi.com/v2/4.png",
  "ingredients": {
    "malt": [
      {
        "name": "Extra Pale",
        "amount": {
          "value": 4.58,
          "unit": "kilograms"
        }
      },
      {
        "name": "Caramalt",
        "amount": {
          "value": 0.25,
          "unit": "kilograms"
        }
      },
      {
        "name": "Dark Crystal",
        "amount": {
          "value": 0.06,
          "unit": "kilograms"
        }
      },
      {
        "name": "Munich",
        "amount": {
          "value": 0.25,
          "unit": "kilograms"
        }
      }
    ],
    "hops": [
      {
        "name": "Centennial",
        "amount": {
          "value": 5,
          "unit": "grams"
        },
        "add": "start",
        "attribute": "bitter"
      },
      {
        "name": "Amarillo",
        "amount": {
          "value": 5,
          "unit": "grams"
        },
        "add": "start",
        "attribute": "bitter"
      },
      {
        "name": "Centennial",
        "amount": {
          "value": 10,
          "unit": "grams"
        },
        "add": "middle",
        "attribute": "flavour"
      },
      {
        "name": "Amarillo",
        "amount": {
          "value": 10,
          "unit": "grams"
        },
        "add": "middle",
        "attribute": "flavour"
      },
      {
        "name": "Centennial",
        "amount": {
          "value": 17.5,
          "unit": "grams"
        },
        "add": "end",
        "attribute": "flavour"
      },
      {
        "name": "Amarillo",
        "amount": {
          "value": 17.5,
          "unit": "grams"
        },
        "add": "end",
        "attribute": "flavour"
      }
    ],
    "yeast": "Wyeast 2007 - Pilsen Lager™"
  },
  "firstBrewed": "09/2013",
  "brewersTips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
  "contributedBy": "Ali Skinner <AliSkinner>",
  "likes": 0,
  "comments": [],
  "price": 9,
  "apiKey": "F40XM1J-XYP4CV9-HC3RZRB-BJMWWQN"
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
  beer.commentsCounter = beer.comments.length;
  beer.ingredients = parseIngredientesToHTML(beer);
};

const renderDetail = async id => {
  try {
    const selector = document.querySelector('.detail-beer-section');
    // Obtener via API la cerveza detail y los comentarios de esta.
    const beer = JSON.parse(detailBeer);
    addCustomFields(beer);
    selector.innerHTML = beerDetailTemplate(beer);
  }catch(err) {
    console.error(err);
  }
};

export { renderDetail };

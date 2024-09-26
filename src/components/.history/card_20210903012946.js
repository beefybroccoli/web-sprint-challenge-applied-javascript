import { helper_create_tag, helper_axios } from "../helper/helper";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // <div class="card">
  const div_card = helper_create_tag({ type: "div", classArray: ["card"] });
  //   <div class="headline">{ headline }</div>
  const div_headline = helper_create_tag({
    type: "div",
    classArray: ["headline"],
    textContent: article.headline,
  });
  //   <div class="author">
  const div_author = helper_create_tag({
    type: "div",
    classArray: ["author"],
  });
  //     <div class="img-container">
  const div_imgContainer = helper_create_tag({
    type: "div",
    classArray: ["img-container"],
  });
  //       <img src={ authorPhoto }>
  const img = helper_create_tag({
    type: "img",
    src: article.authorPhoto,
  });
  //     <span>By { authorName }</span>
  const span_author = helper_create_tag({
    type: "span",
    textContent: `By ${article.authorName}`,
  });

  //----------add children to parent
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  [img].forEach((child) => {
    div_imgContainer.appendChild(child);
  });

  //----------add children to parent
  //   <div class="author">
  //     <div class="img-container">  ... </div>
  //     <span>By { authorName }</span>
  //   </div>
  [div_imgContainer, span_author].forEach((child) => {
    div_author.appendChild(child);
  });

  //----------add children to parent
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author"> .... </div>
  // </div>
  [div_headline, div_author].forEach((child) => {
    div_card.appendChild(child);
  });

  //return statement
  return div_card;
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardAppender = document.querySelector(selector);
  const PORT_NUMBER = 5001;
  const URL_API = `http://localhost:${PORT_NUMBER}/api/articles`;
  const api_data = helper_axios(URL_API);

  api_data &&
    api_data.then((api_data) => {
      console.log(api_data);
      console.log(api_data.articles.length);
      //data_array = ["javascript", "bootstrap","technology", "jquery","node.js"]
      // const data_array = api_data.topics;
      // cardAppender.appendChild(Tabs(data_array));

      for (let key of Object.keys(api_data["articles"])) {
        console.log(key);
        for (let subkey of Object(keys(api_data[])))
      }
    });
};

export { Card, cardAppender };

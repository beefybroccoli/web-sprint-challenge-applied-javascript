
import { helper_create_tag } from "../helper/helper";
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
  const div_card = helper_create_tag({type:"div", classArray:['card']})
  //   <div class="headline">{ headline }</div>
  const div_headline = helper_create_tag({type:"div", classArray:["headline"], textContent:article.div_headline})
  //   <div class="author">
  const  = helper_create_tag({type:"div", classArray:[], textContent:""})
  //     <div class="img-container">
  const  = helper_create_tag({type:"div", classArray:[], textContent:""})
  //       <img src={ authorPhoto }>
  const  = helper_create_tag({type:"div", classArray:[], textContent:""})
  //     </div>
  const  = helper_create_tag({type:"div", classArray:[], textContent:""})
  //     <span>By { authorName }</span>
  const  = helper_create_tag({type:"div", classArray:[], textContent:""})
  //   </div>
  // </div>
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
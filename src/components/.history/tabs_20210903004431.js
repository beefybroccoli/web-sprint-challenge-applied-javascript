import { helper_create_tag } from "../helper/helper";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const div_topics = helper_create_tag({type:"div", classArray:["topics"]});
  const div_tab_javascript = helper_create_tag({type:"div", classArray:["tab"], textContent:"javascript"});
  const div_tab_bootstrap = helper_create_tag({type:"div", classArray:["tab"], textContent:"bootstrap"});
  const div_tab_technology = helper_create_tag({type:"div", classArray:["tab"], textContent:"jatevascript"});

};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };

import { helper_create_tag } from "../helper/helper";

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const div_header = helper_create_tag({ type: "div", classArray: ["header"] });
  const span_date = helper_create_tag({
    tye: "span",
    classArray: ["date"],
    textContent: date,
  });
  const h1 = helper_create_tag({ type: "h1", textContent: title });
  const span_temp = helper_create_tag({
    type: "span",
    classArray: ["temp"],
    textContent: temp,
  });

  [span_date, h1, span_temp].forEach((child) => {
    div_header.appendChild(child);
  });

  return div_header;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = document.querySelector(selector);
  headerAppender.appendChild(Header("title1"))
  return headerAppender;
};

export { Header, headerAppender };

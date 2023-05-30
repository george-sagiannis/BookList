import React from "react"

import ReactDOM from "react-dom/client"

import "./index.css"

const books = [
  {
    author: "Maximilian Schwarzmuller",
    title: "React Key Concepts: Consolidate your knowledge of React's core features",
    img: "https://m.media-amazon.com/images/I/41rgivhpOaL._SX404_BO1,204,203,200_.jpg",
    id: 1,
  },
  {
    author: "Robin Wieruch",
    title: "The Road to React: The React.js with Hooks in JavaScript Book (2023 Edition)",
    img: "https://m.media-amazon.com/images/I/61N1Yn4Nf5L._AC_UY327_FMwebp_QL65_.jpg",
    id: 2,
  },
]


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title); //it triggers the displayTitle function. The displayTitle function logs the title variable to the console using console.log(title).
  };

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Δείξε μου τον τίτλο στην κονσόλα</button>
      <h4>{author} </h4>
    </article>
  );
};

// In the given code, when i click the "Δείξε μου τον τίτλο στην κονσόλα" button, it triggers the displayTitle function. The displayTitle function logs the title variable to the console using console.log(title).


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)

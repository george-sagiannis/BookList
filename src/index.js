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


// accepts id as an argument and finds the book
// pass the function down to Book Component and invoke on the button click


const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>ΔΕΙΞΕ ΜΟΥ ΤΟΝ ΤΙΤΛΟ</button>
      <h4>{author}</h4>
    </article>
  );
};




// In the given code, when i click the "Δείξε μου τον τίτλο στην κονσόλα" button, it triggers the displayTitle function. The displayTitle function logs the title variable to the console using console.log(title).


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)

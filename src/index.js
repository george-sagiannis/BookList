import React from "react"

import ReactDOM from "react-dom/client"

import "./index.css"

const books = [
  {
    author: "Maximilian Schwarzmuller",
    title: "React Key Concepts: Consolidate your knowledge of React's core features",
    img: "https://m.media-amazon.com/images/I/41rgivhpOaL._SX404_BO1,204,203,200_.jpg",
  },
  {
    author: "Robin Wieruch",
    title: "The Road to React: The React.js with Hooks in JavaScript Book (2023 Edition)",
    img: "https://m.media-amazon.com/images/I/61N1Yn4Nf5L._AC_UY327_FMwebp_QL65_.jpg",
  },
]

// const names = ["john", "peter", "susan"]

// const newNames = names.map((name) => {
//   console.log(name)
//   return <h1>{name}</h1>
// })

// console.log(newNames)

// render component
// pass properties one by one
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<BookList />)

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
      <EventExamples />
      {books.map((book) => {
        console.log(book);
        const { img, title, author, id } = book;
            return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

//perasa ta events
//an grapso mesa sto input tha fanei sto console
//an patiso to click me tha mou ferei to console
const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='example'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={() => console.log('you clicked me')}>click me</button>
    </section>
  );
};

// The input field has an onChange event handler that logs the value entered into the input field whenever it changes. The button has an onClick event handler that logs a message when clicked.

// The (e) parameter in the onChange event handler function is a convention to represent the event object. In this case, it represents the synthetic event object for the onChange event. You can access properties of the event object, such as target.value, to get the current value of the input field.





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

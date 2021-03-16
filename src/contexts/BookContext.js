import React , {createContext,useState,useEffect}from 'react';

export const BookContext=createContext();

const BookContextProvider = (props) => {
    const[books,setBooks]=useState(()=>{
     const localData=localStorage.getItem('books');
     return localData ? JSON.parse(localData) : [];
    }
  );


    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books));
    }, [books])

    const [bookid,setBookId]=useState(0);

    const addBook= (title,author) =>{
           setBookId(bookid+1);
           setBooks([...books,{title:title,author:author,id:bookid}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book=>book.id!==id))
    }
    return ( 
        <BookContext.Provider value={{books,addBook,removeBook}}>
          {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
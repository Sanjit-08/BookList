import React , {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const BookDetails = ({book}) => {
    const {removeBook}=useContext(BookContext);
    return ( 
        <li>
            <div className="title">
                {book.title}
                <FontAwesomeIcon className="delete" icon={faTrashAlt} onClick={()=>removeBook(book.id)}></FontAwesomeIcon>
            </div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;
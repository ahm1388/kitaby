import BookCard from "./BookCard"
import mockingbird from '../images/mockingbird.jpeg'


const BookResults = () => {

  const title = "To Kill a Mockingbird"
  const author = "Harper Lee"
  const description = "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools."
  const createdBy = 'Ahmed Ammar'
  const signups = 15
  const capacity = 40

  return (
    <>
      <BookCard 
        title={title} 
        author={author} 
        description={description} 
        img={mockingbird}
        createdBy={createdBy}
        signups={signups}
        capacity={capacity}
      />
      <BookCard 
        title={title} 
        author={author} 
        description={description} 
        img={mockingbird}
        createdBy={createdBy}
        signups={signups}
        capacity={capacity}
      />
      <BookCard 
        title={title} 
        author={author} 
        description={description} 
        img={mockingbird}
        createdBy={createdBy}
        signups={signups}
        capacity={capacity}
      />
      <BookCard 
        title={title} 
        author={author} 
        description={description} 
        img={mockingbird}
        createdBy={createdBy}
        signups={signups}
        capacity={capacity}
      />
    </>
  )
}

export default BookResults
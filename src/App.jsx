import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
import FantasyBook from './data/books/fantasy.json';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <div className='d-flex flex-column vh-100'>
        <header>
          <MyNavbar />
        </header>
        <main className='flex-grow-1'>
          <Welcome />
          {/* <AllTheBooks /> */}
          <BookList books={FantasyBook} />
          <h1 className='text-center my-3'>QUESTO È SOLO UN LIBRO</h1>
          <SingleBook
            immagine={FantasyBook[0].img}
            title={FantasyBook[0].title}
            price={FantasyBook[0].price}
            asin={FantasyBook[0].asin}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;

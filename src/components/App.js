import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer";



function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Home</h2>
        <ItemListContainer test={true} nombre="Maximiliano" />
      </main>
      <Footer />
    </>
  )
}

export default App;
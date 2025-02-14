import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Banner from './components/banner/Banner.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <ItemListContainer
        greeting='Bienvenido, viví una experiencia superior'
        parrafo1='ALIMENTOS GOURMET es tu tienda de referencia para encontrar los mejores ingredientes y productos selectos para la cocina. Ofrecemos una cuidada selección de especias, aceites, quesos, embutidos, harinas especiales y otros insumos de alta calidad para elevar cada preparación a otro nivel. Porque cocinar bien es un arte, ponemos a tu alcance todo lo necesario para hacerlo con distinción.'
        parrafo2='Nos apasiona la gastronomía y sabemos que cada detalle cuenta. Por eso, en ALIMENTOS GOURMET reunimos lo mejor de la despensa gourmet, con ingredientes frescos, auténticos y exclusivos. Ya seas un chef profesional o un amante de la cocina, aquí encontrarás todo para hacer de cada plato una experiencia única.'
      />
    </>
  )
}
export default App


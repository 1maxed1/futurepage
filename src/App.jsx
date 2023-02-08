import styles from "./style";
import {Card, News, Projects, About, Billing, Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero, Clients } from "./components";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";




const App = () => (
  <BrowserRouter>
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        
      </div>
    </div>
    

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Routes>
          <Route path="/" element={<Hero></Hero>}></Route>
          
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/news" element={<News></News>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </div>
    </div>
    
    <div className={`bg-primary${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        
        <Footer />
      </div>
    </div>
  </div>
  </BrowserRouter>
);

export default App;

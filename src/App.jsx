import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";

const data = [
  {
    name: "product 1",
  },
  {
    name: "product 2 nnn",
  },
  {
    name: "product 3",
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {data.map((item) => {
              return (
                <li>
                  <Link to={`/product/${item.name}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" exact element={<About />} />
        <Route path="product/:id" exact element={<Product />} />
        

        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>

      <footer>
        <h1>This is footer</h1>
        <p>&copy; 2020</p>
      </footer>
    </div>
  );
}

export default App;

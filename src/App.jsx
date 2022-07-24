import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Product from "./page/Product";
import { useState } from "react";

const Orginaldata = [
  {
    name: "product 1",
    item: "item 1",
  },
  {
    name: "product 2 nnn",
    item: "item 2",
  },
  {
    name: "product 3",
    item: "item 2",
  },
  {
    name: "product 7",
    item: "item 1",
  },
  {
    name: "product 6 nnn",
    item: "item 2",
  },
  {
    name: "product 7",
    item: "item 2",
  },
];

const Data2 = ["value 1", "value 2", "value 3"];
const data3 = [2, 5, 89, 63, 89];

function App() {
  const [value, setvalue] = useState("");
  const [dummyData, setData] = useState(Orginaldata);
  const [tempState, setTemp] = useState(false);
  const [index, setIndex] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [sortArr, setsortArr] = useState(data3);

  const handleSearch = (e) => {
    e.preventDefault();

    let temp = Orginaldata?.filter((item) => item.name === value);
    let temp2 = Data2?.includes(value);
    let _index = Data2.indexOf(value);

    setIndex(_index);
    setTemp(temp2);
    setData(temp);
  };

  const handleReverse = () => {
    let temp = Orginaldata.reverse();
    console.log(temp);
    setData(temp);
  };

  const sort = () => {
    let sortedArray = sortArr.sort();
    console.log(sortedArray);
  };

  console.log(date);

  return (
    <div className="App">
      {/* <h1>iso Date:{date.toISOString()}</h1>
      <h1>Local Date:{date.toLocaleDateString()}</h1>
      <h1>utc Date:{date.toUTCString()}</h1>

      <h1>{tempState ? "found" : "Not found"}</h1>
      <h1>{index === -1 ? "index Not found" : index}</h1> */}

      <button onClick={sort}>sort</button>

      <form onSubmit={handleSearch}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {dummyData?.length === 0 ? (
        <h1>No data found</h1>
      ) : (
        <>
          {dummyData?.map((item) => {
            return <h1>{item.name}</h1>;
          })}
        </>
      )}

      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="test" exact element={<About />} />
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

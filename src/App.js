import covid from './photos/covid.png';
import './App.css';
import StatewiseData from './Components/StatewiseDta';

function App() {
  let today = new Date();
  let date = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  return (
    <>
      <div className="App">

        <span>
          <img className="my-4  " src={covid} style={{ height: "70px" }} alt="Covid-19" />
          <h1 className="fs-3 text"><span className="font-weight-bold">INDIA </span> Covid-19 Tracker</h1>
        </span>
        <h1 className="fs-5 text">{date}</h1>

         <StatewiseData/>

      </div>

    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Profile from './Componenet/Profile';

function App() {
  return (
    <div className="App">
    <h1>Our Team</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      <div className='AppCard'>
        <Profile 
          name = "Amit Prajapati"
          skill = "React Developer"
        />
        <Profile 
          name = "Amit Prajapati"
          skill = "Javascript Developer"
        />
        <Profile 
          name = "Amit Prajapati"
          skill = "MERN Stack"
        />
      </div>
    </div>
  );
}

export default App;

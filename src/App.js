import User from "./components/User/User"
import './App.css';
//import UserList from './components/User/UserList';


function App() {
  return (
    <div >
      <User UserName="Pablo" Picture="./img/Pablo Fernandez.jpg" Title="Ingeniero" />
      <User UserName="Lee" Picture="./img/Lee Gu.jpg" Title="Licenciado" />
    </div>
  );
}

export default App;

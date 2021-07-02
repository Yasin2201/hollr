import firebase from "./components/firebase";
import Login from "./components/Login";

function App() {

  const db = firebase.firestore()
  console.log(db)
  // const getData = async () => {
  //   const data = db.collection('test')
  //   const ref = await data.get()

  //   ref.docs.map((doc) => console.log(doc.data()))
  // }


  return (
    <div>
      <h1>holl'r</h1>
      <Login />
    </div>
  );
}

export default App;

import firebase from "./components/firebase";

function App() {

  const db = firebase.firestore()

  const getData = async () => {
    const data = db.collection('test')
    const ref = await data.get()

    ref.docs.map((doc) => console.log(doc.data()))
  }


  return (
    <div>
      <h1>holl'r</h1>
      <button onClick={getData}>click</button>
    </div>
  );
}

export default App;

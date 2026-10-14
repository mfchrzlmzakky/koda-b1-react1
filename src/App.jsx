import { useState } from "react";

// import React from "react";

// const Sapa = ()=>{
//   return React.createElement("h1", "null", "Hello World")
// }

// const Sapa = () => {
//   // return <h1>Goodbye World</h1>;
//   return <h1>{3 + 6}</h1>;
// };

// import Sapa from "./component/Sapa";

// function Nama({ name = "Budi" }) {
//   return <span>Halo, saya {name}</span>;
// }

// function Umur({ umur = 20 }) {
//   return <p>Umur {umur}</p>;
// }

// function Asal({ asal = "Mojokerto" }) {
//   return <p>Asal {asal}</p>;
// }

// function Kondisi({ kondisi = "LAPAR" }) {
//   return <p className="text-red-600">Sekarang sedang {kondisi}</p>;
// }

// function Kondisi2({ kondisi2 = "Makan" }) {
//   return <p>Mau {kondisi2}</p>;
// }

// function Udah({ udah = "Udah" }) {
//   return <p>{udah} itu aja sih</p>;
// }

const App = () => {
  const [count, setCount] = useState(0);
  function tambah() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function kurang() {
    // if (count > 0) {
    setCount(count - 1);
    // }
  }
  return (
    <>
      {/* <Sapa /> <Nama name="Prabroro" />
      <Umur /> <Asal /> <Kondisi />
      <Kondisi2 />
      <Udah /> */}
      <div className="flex items-center justify-center flex-col">
        <p className="text-center my-2">Jumlah Klik: {count}x</p>
        <button className="w-40 bg-blue-900 text-white rounded-full my-1 " onClick={tambah}>
          Tambah
        </button>
        <button className="w-40 bg-red-900 text-white rounded-full my-1" onClick={kurang} disabled={count === 0}>
          Kurang
        </button>
      </div>
    </>
  );
};

export default App;

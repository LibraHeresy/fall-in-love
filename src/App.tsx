import "./App.css";

function App() {
  let exampleArr = [
    {
      id: 1,
      name: "一",
    },
    {
      id: 2,
      name: "二",
    },
    {
      id: 1,
      name: "一",
    },
    {
      id: 2,
      name: "二",
    },
    {
      id: 1,
      name: "一",
    },
    {
      id: 2,
      name: "二",
    },
    {
      id: 1,
      name: "一",
    },
    {
      id: 2,
      name: "二",
    },
  ];

  exampleArr = exampleArr.concat(exampleArr);

  const listItems = exampleArr.map((item) => (
    <li
      key={item.id}
      className="bg-slate-200 h-48 w-60 rounded-md flex items-center justify-center mx-2 shrink-0 hover:shadow-xl"
    >
      {item.name}
    </li>
  ));

  return (
    <>
      <div className="h-16 px-96 flex items-center justify-between">
        <span className="font-medium text-2xl font-mono">WoW</span>
        <span className="font-medium text-xl font-mono">LibraHeresy</span>
      </div>
      <div className="h-96 flex items-center justify-center relative overflow-hidden">
        <ul className="-z-10 absolute flex justify-around w-full -bottom-48">
          <li className="h-12 w-12 bg-gray-300 animation-move-box animation-delay-1000" />
          <li className="h-24 w-24 bg-gray-300 animation-move-box animation-delay-10000" />
          <li className="h-12 w-12 bg-gray-300 animation-move-box" />
          <li className="h-24 w-24 bg-gray-300 animation-move-box animation-delay-5000" />
          <li className="h-12 w-12 bg-gray-300 animation-move-box animation-delay-15000" />
          <li className="h-24 w-24 bg-gray-300 animation-move-box animation-delay-20000" />
          <li className="h-6 w-6 bg-gray-300 animation-move-box" />
          <li className="h-12 w-12 bg-gray-300 animation-move-box animation-delay-1000" />
          <li className="h-24 w-24 bg-gray-300 animation-move-box animation-delay-2000" />
        </ul>
        <div className="font-semibold text-6xl">
          Fall in <span className="text-rose-600">love</span> with
          <span className="text-blue-500">Front End</span>
        </div>
      </div>
      <div className="overflow-hidden">
        <ul className="py-3 w-fit flex items-center animation-move-wrap">
          {listItems}
        </ul>
        <ul className="py-3 w-fit flex items-center animation-move-wra-reverse">
          {listItems}
        </ul>
        <ul className="py-3 w-fit flex items-center animation-move-wrap">
          {listItems}
        </ul>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-400 text-1xl">
        LibraHeresy
      </div>
    </>
  );
}

export default App;

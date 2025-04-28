import React from "react";

const load = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(import('./Dynamic'));
    }, 3000);
  })
}

const Dynamic = React.lazy(load);


function ReactLazy() {
 const [show, setShow] = React.useState(false);
 return (
  <>
    <h1>React lazy</h1>
    <button onClick={() => setShow(!show)}>{show ? 'Hide' : "Show"}</button>
    <React.Suspense fallback={<div>Loading the lazy component</div>}>
      {show && <Dynamic />}
    </React.Suspense>
  </>
 )
}

export default ReactLazy;
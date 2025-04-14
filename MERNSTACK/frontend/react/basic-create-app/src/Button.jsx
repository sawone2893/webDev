function doSomething() {
  console.log("You clicked me");
}

function handleMouseover() {
  console.log("You mouseover!");
}

function handleMouseOut() {
  console.log("You mouseout!");
}

export default function Button() {
  return (
    <>
      <button onClick={doSomething}>Click Me</button>
      <p onMouseOver={handleMouseover}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        consequatur quam ex necessitatibus culpa voluptates doloremque facere
        dolorum laborum nobis adipisci deserunt quasi, temporibus animi debitis
        vero ab sint obcaecati.
      </p>
      <p onMouseOut={handleMouseOut}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        consequatur quam ex necessitatibus culpa voluptates doloremque facere
        dolorum laborum nobis adipisci deserunt quasi, temporibus animi debitis
        vero ab sint obcaecati.
      </p>
    </>
  );
}

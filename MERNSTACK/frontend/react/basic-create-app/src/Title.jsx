function Title() {
  return <h1>Hello World!</h1>;
}

function Description() {
  return <p>This is description</p>;
}

//React Fragment Example
function TitleWithDescription() {
  return (
    <>
      <h1>This is Title</h1>
      <p>This is description</p>
    </>
  );
}

export { Title, Description,TitleWithDescription }; //this is the named export

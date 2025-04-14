function handleForm(event) {
  event.preventDefault();
  console.log("Form submitted successfully!");
}

export default function Form() {
  return (
    <form action="" onSubmit={handleForm}>
      <input type="text" placeholder="Enter something" />
      <button>Submit</button>
    </form>
  );
}

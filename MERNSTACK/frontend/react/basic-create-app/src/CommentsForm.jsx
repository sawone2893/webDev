import { useState } from "react";

export default function CommentsForm() {
  let [formdata, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 1,
  });

  let handleInputChange = (event) => {
    
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = () => {
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 1,
    });
  };
  return (
    <div>
      <h2>Give Comments!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Enter username"
          id="username"
          name="username"
          value={formdata.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks: </label>
        <textarea
          placeholder="Enter your remark here"
          id="remarks"
          name="remarks"
          value={formdata.remarks}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="text"
          placeholder="Enter rating"
          id="rating"
          name="rating"
          value={formdata.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

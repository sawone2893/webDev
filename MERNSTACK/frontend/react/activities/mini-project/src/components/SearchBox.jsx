import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let handleInputChange = (event) => {
    setCity(event.target.value);
  };

  let handleOnSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    await updateInfo(city);
  };
  return (
    <div className="SearchBox">
      <h2>Search for Weather!</h2>
      <form onSubmit={handleOnSubmit}>
        <TextField
          id="standard-search"
          label="City Name"
          type="search"
          variant="standard"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

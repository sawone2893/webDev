import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import weatherImage from "../assets/weatherImage.jpg";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  console.log(info);
  return (
    <div className="InfoBox">
      <h2>WeatherInfo - {info.weather}</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={weatherImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <span>{info.city} </span>
            <span>
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </span>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <table>
              <tr>
                <th>Temperature: </th>
                <td>{info.temp}&deg; C</td>
              </tr>
              <tr>
                <th>All Day High: </th>
                <td>{info.temp_min}&deg; C</td>
              </tr>
              <tr>
                <th>All Day Low: </th>
                <td>{info.temp_max}&deg; C</td>
              </tr>
              <tr>
                <th>Humidity: </th>
                <td>{info.humidity}</td>
              </tr>
              <tr>
                <th>Pressure: </th>
                <td>{info.pressure}</td>
              </tr>
              <tr>
                <th>Sea Level: </th>
                <td>{info.sea_level}</td>
              </tr>
            </table>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

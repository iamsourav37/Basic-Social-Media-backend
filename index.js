const express = require("express");
const app = express();
const format = require("date-format");

app.get("/", (req, res) => {
  res.status(200).json({
    createdBy: "Sourav Ganguly",
    courseName: "Pro Backend Developer Bootcamp",
    instructorName: "Hitesh Choudhary",
    platformName: "LearnCodeOnline.in",
    excited: true,
  });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "iamSourav37",
    followers: 59,
    follows: 71,
    date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };
  return res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const fbSocial = {
    username: "iamsourav37",
    followers: 10,
    follows: 3,
    date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };
  return res.status(200).json(fbSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const fbSocial = {
    username: "iamsourav37",
    followers: 1005,
    follows: 675,
    date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };
  return res.status(200).json(fbSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log("Parameter comes from url : ", req.params.token);
  return res.status(200).json({
    params: req.params.token,
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

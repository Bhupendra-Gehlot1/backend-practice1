import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke one",
      description: "first joke",
    },
    {
      id: 2,
      title: "joke two",
      description: "second joke",
    },
    {
      id: 3,
      title: "joke three",
      description: "third joke",
    },
    {
      id: 4,
      title: "joke four",
      description: "fourth joke",
    },
    {
      id: 5,
      title: "joke five",
      description: "fifth joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server at ${port}`);
});

// Xay dung server
const express = require("express");
const app = express();

const users = [
    {
      id: 1,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      imageUrl:
        "https://cf.shopee.vn/file/d6341c6f7781da6aef965612595d0699",
    },
    {
      id: 2,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      imageUrl:
        "https://cf.shopee.vn/file/d6341c6f7781da6aef965612595d0699",
    },
    {
      id: 3,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      imageUrl:
        "https://cf.shopee.vn/file/d6341c6f7781da6aef965612595d0699",
    },
    {
      id: 4,
      name: "Nguyen Ba Toi",
      username: "Toiba2001",
      imageUrl:
        "https://cf.shopee.vn/file/d6341c6f7781da6aef965612595d0699",
    }
  ];
app.get("/v1/user", (req, res)=> {
    res.status(200).json(users);
})

app.listen("8080", () => {
    console.log("Server is running....")
})

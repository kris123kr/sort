const data=require("../data/Data.json")
const getData = async (req, res, next) => {
    try {
      console.log("testing",data)
      res.send(data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  module.exports = {  getData };
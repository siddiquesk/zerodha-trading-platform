const express=require("express");
const app=express();
require('dotenv').config();
const mongoose = require('mongoose');
const HoldingModel = require("./models/HoldingModel");
const PositionModel=require("./models/PositionModel");
const OrderModel=require("./models/OrderModel");
const bodyParser = require("body-parser");
const cors=require("cors");

//connect to cluster name zerodha
const PORT=process.env.PORT || 8080;
const MongoUri=process.env.MONGO_URL;
main().then(()=>{
  console.log('connect to db');
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect(MongoUri);
}
app.use(cors());
app.use(bodyParser.json());


app.get("/allHoldings",async (req,res)=>{
let allholding=await HoldingModel.find({});
 res.json(allholding);
});

app.get("/allPositions",async (req,res)=>{
  let allposition=await PositionModel.find({});
   res.json(allposition);
});

app.post('/newOrder',async (req,res)=>{
let neworder=new OrderModel({
  name: req.body.name,
  qty: req.body.qty,
  price: req.body.price,
  mode: req.body.mode,
});
 neworder.save();
 res.send("order saved");
})


app.listen(PORT,(req,res)=>{
  console.log('server is running');
})
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
/*
app.get("/addPositions",async (req,res)=>{
  const positions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
 positions.forEach((item)=>{
   let newPosition = new PositionModel({
    product: item.product,
    name: item.name,
    qty: item.qty,
    avg: item.avg,
    price: item.price,
    net: item.net,
    day: item.day,
    isLoss: item.isLoss
   })

  let res= newPosition.save();
  })
  console.log(res);
 res.send("data inserted")
})
*/

app.listen(PORT,(req,res)=>{
  console.log('server is running');
})
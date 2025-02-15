const {model}=require("mongoose");
const {OrderSchema}=require("../schema/OrdersShema");
const OrderModel=new model("OrderModel",OrderSchema);
module.exports={OrderModel};
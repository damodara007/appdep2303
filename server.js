const express =require("express");
const cors =require("cors");
const mongoose = require("mongoose");
const path=require("node:path");
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,"./client/build")));


app.get("/getEmployees",async(req,res)=>{
//.limit(100).skip(10);
//sort([['department','asc']])
//.select({firstName:1,lastName:1,id:1,_id:-0});
//and([{department:'Sales'},{country:'China'}]);
//or([{department:'Sales'},{country:'China'}])
//.and([{department:'Marketing'},{country:'Russia'}]).count();
//.and([{country:'Russia',age:{$gte:23,$lte:35}}])
//.select({country:1,_id:0}).distinct("country")
let retrieveData = await Employee.find();
    res.json(retrieveData);
});

app.put("/updateCountry",async(req,res)=>{
   let result = await Employee.updateMany({country:"China"},{country:"India",
   firstName:"Radha",
   lastName:"Krishna"})

res.json(result)

});

app.delete("/deleteCountry",async(req,res)=>{
let result= await Employee.deleteMany({country:"United Kingdom"})

res.json(result)
});

app.listen(1111,()=>{
    console.log("listening to port")
})

let connectToMDB = async()=>{
    try{ await mongoose.connect
        ("mongodb+srv://damodara007:damodara007@cluster0.ivaomgf.mongodb.net/Batch2303?retryWrites=true&w=majority&appName=Cluster0")
        console.log("successfullt cnkt MDB")
       // getDataFromMDB();
    }catch(err){
        console.log("unable to connect to mdb")
    }
   
}
let employeeSchema = new mongoose.Schema({
    id:Number,
firstName:String,
lastName:String,
email:String,
country:String,
age:Number,
department:String,
});

let Employee = new mongoose.model("employee",employeeSchema)

//let listeningAndReviesSchema = new mongoose.Schema({

//_id:Number,
//listing_url:String,
//name:String,
//summary:String,
//space:String,
//description:String,
//neighborhood_overview:String,
//notes:String,
//transit:String,
//access:String,
//interaction:String,
//house_rules:String,
//property_type:String,
//room_type:String,
//bed_type:String,
//minimum_nights:Number,
//maximum_nights:Number,
//cancellation_policy:String,
//last_scraped:String,
//calendar_last_scraped:String,
//accommodates:Number,
//bedrooms:Number,
//beds:Number,
//number_of_reviews:Number,
//bathrooms:Number,
//amenities:Array,
//price:Number,
//security_deposit:Number,
//cleaning_fee:Number,
//extra_people:Number,
//guests_included:Number,
//images:Object,
//host:Object,
//address:Object,
//availability:Object,
//review_scores:Object,
//reviews:Array,
 
//})

//let Hotel = new mongoose.model("hotel",listeningAndReviesSchema,"listingsAndReviews")

//let getDataFromMDB = async ()=>{
  //  let retrieveData = await Hotel.find()
   // console.log(retrieveData)
//};

let getDataFromMDB = async ()=>{
    let retrieveData = await Employee.find()
    console.log(retrieveData)
}

connectToMDB()
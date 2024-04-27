import mongoose,{connect} from "mongoose";
function connects(){
    return connect('mongodb+srv://satish:satish@cluster0.7stdrez.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log("db connected");
        
    }).catch((err:any)=>{
        console.log("err",err);
        
    })
}
export default connects;
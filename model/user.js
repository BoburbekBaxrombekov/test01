const mongoose = require('mongoose')

const Schema =  new mongoose.Schema({
    Ismi:{
        type: String
    },
    pasport_seriya:{
        type: Number
    },
    img:{
        type:String
    },
    tel:{
        type: String
    },
    familiya:{
        type: String
    },
    otasiniIsmi:{
        type: String
    },
    jshir:{
        type: String
    },
    password:{
        type: String
    },
    jinsi:{
        type: String,
    },
    tugilganSanasi:{
        type: Number
    },
    yashashManzili:{
        type: String, // filter bor
    },
    tumanlar:{
        type: String,
          },
    Mahalla:{
        type: String
    },
    kocha:{
        type: String
    },
    uyRaqami:{
        type:Number
    },
    tugallanganTalimMuossasasi:{
        type:String
    },

    talimShakli:{
        type: String,
        // enum:['kunduzgi','kechgi'] // filter bor
    },
    talimTili:{
        type: String,
        // enum:['ru','en'] // filter bor
    },
    talimDarajasi:{ // filter bor
        type: String
    },
    unversitet:{ // filter bor
        type:String
        },
fakultet:{ // filter bor
    type:String
},

date:{
    type: Date,
    default:Date.now()
}

    

})  


// Parolni bcryptlash
Schema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  //  Parol togri kelishini taqqoslash
  Schema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  





module.exports = mongoose.model('User',Schema)
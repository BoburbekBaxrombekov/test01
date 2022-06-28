const Userr = require('../model/user')
const Admin = require('../model/admin')

exports.ImgCreate = {
    getAll:async(req, res)=>{
        try {
            const c = await Userr.find({})
            .sort({date:-1})
            await c.save()
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
            const {id} = req.params
            const g = await Userr.findById(id)
            res.json(g)
        } catch (e) {
            console.log(e)
        }
    },
    Jinsi:async(req, res)=>{
        try {
            const users = await Userr.findOne({ jinsi: jinsi })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    yashashManzili:async(req, res)=>{
        try {
            const users = await Userr.findOne({ yashashManzili: yashashManzili })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    talimShakli:async(req, res)=>{
        try {
            const users = await Userr.findOne({ talimShakli: talimShakli })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    talimTili:async(req, res)=>{
        try {
            const users = await User.findOne({ talimTili: talimTili })
           
            res.json(g)
        } catch (e) {
            console.log(e)
        } 
    },
    talimDarajasi:async(req, res)=>{
        try {
            const users = await Userr.findOne({ talimDarajasi: talimDarajasi })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    MutahasislikNomiBakalavrKunduzgiRu:async(req, res)=>{
        try {
            const users = await Userr.findOne({ MutahasislikNomiBakalavrKunduzgiRu: MutahasislikNomiBakalavrKunduzgiRu })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    MutahasislikNomiBakalavrKunduzgiEn:async(req, res)=>{
        try {
            const users = await Userr.findOne({ MutahasislikNomiBakalavrKunduzgiEn: MutahasislikNomiBakalavrKunduzgiEn })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    MutahasislikNomiBakalavrSirtqiRu:async(req, res)=>{
        try {
            const users = await Userr.findOne({ MutahasislikNomiBakalavrSirtqiRu: MutahasislikNomiBakalavrSirtqiRu })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    MutahasislikNomiMagisterRu:async(req, res)=>{
        try {
            const users = await Userr.findOne({ MutahasislikNomiMagisterRu: MutahasislikNomiMagisterRu })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    MutahasislikNomiMagisterEn:async(req, res)=>{
        try {
            const users = await Userr.findOne({ MutahasislikNomiMagisterEn: MutahasislikNomiMagisterEn })
           
            res.json(users)
        } catch (e) {
            console.log(e)
        } 
    },
    getDelete:async(req, res)=>{
        try {
            const aa = await Userr.findByIdAndDelete({_id: req.params.id})
            res.json(aa)
        } catch (e) {
            console.log(e, "err")
        }
    }

}
// Admin registratsiya va login qisimlari
exports.register = async (req, res, next) => {
    const candidate = await (await User.findOne().sort({ createdAt: -1 }))
    const uid = candidate ? candidate.uid + 1 : 10000000
    const { name, email, password } = req.body;
    let user = await Admin.create({
        name,
        email,
        password
    })
    await user.save()
        .then(() => {
            res.status(201).json({
                success: true,
                data:user
            })
        })

        .catch((error) => {
            res.status(500).json({
                success: false,
                data:error
            })
        })

}
exports.login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        // res.redirect('/')
        res.status(401).json({
            success: true, data: '401'
        })
        
        
    }
    const users = await Admin.findOne({ email: email }).select('password');
    if (!users) {
        // res.redirect('/')
        res.status(401).json({
            success: true, data: '401'
        })
        
    }
    const isMatch = await users.matchPassword(password);
    if (!isMatch) {
        // res.redirect('/')
        res.status(401).json({
            success: true, data: '401'
        })
        
    }

    /* Agar har safar profilga kirganda userni trafigi tugasa "status: user" boladi. 
    Aks holda "vip" qiladi */
    const body = await Admin.findOne({ email: req.body.email })

    const today = new Date();
    const Next = new Date(body.balanceJournals)
    if (today > Next) {
        body.status = "user"
    } else if(today < Next){
        body.status = "vip"
    }
    await body.save({validateBeforeSave: false})
    const balance = await Balance.find({ user: body._id }).sort({ createdAt: -1 }).skip(0).limit(1)
    req.session.balane = balance
    req.session.user = body
    req.session.save()
    .then(() => {
        res.status(201).json({
            success: true,
            data:user
        })
    })

    .catch((error) => {
        res.status(500).json({
            success: false,
            data:error
        })
    })
}


  
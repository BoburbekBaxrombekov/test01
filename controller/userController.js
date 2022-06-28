const Userr = require('../model/user')
const path = require('path')


exports.ImgCreate = {
    
    upload:async(req, res)=>{
        let r = req.body
        try {
            const b = new Userr({
               img:`http://192.168.3.116/${req.file.path.slice(7)}`,
                Ismi:r.Ismi,
                pasport_seriya:r.pasport_seriya,
                tel:r.tel,
                familiya:r.familiya,
                otasiniIsmi:r.otasiniIsmi,
                Jshir:r.Jshir,
                jinsi:r.jinsi,
                tugilganSanasi:r.tugilganSanasi,
                yashashManzili:r.yashashManzili,
                tumanlar:r.tumanlar,
                Mahalla:r.Mahalla,
                kocha:r.kocha,
                uyRaqami:r.uyRaqami,
                tugallanganTalimMuossasasi:r.tugallanganTalimMuossasasi,
                talimShakli:r.talimShakli,
                talimTili:r.talimTili,
                talimDarajasi:r.talimDarajasi,
                unversitet:r.unversitet,
                fakultet:r.fakultet,
            })
            await b.save()
            res.json(b)
        } catch (e) {
            console.log(e)
        }
    },
    getAll:async(req, res)=>{
        try {
            const c = await Userr.find()
            .sort({date:-1})
            
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
       
            const g = await Userr.findById({_id:req.params.id})
            res.json(g)
        } catch (e) {
            console.log(e)
        }
    },
    
login : async (req, res, next) => {
    const { Ismi, tel } = req.body

    if (!Ismi || !tel) {
        res.status(401).json({
            success: false, data: '401'
        })
    }
    const users = await Userr.findOne({ Ismi: Ismi }).select('Ismi');
    if (!users) {
        res.status(401).json({
            success: false, data: '401'
        })
    }else{
        res.json({success: true})
    }

}
}
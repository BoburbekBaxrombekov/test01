const File = require('../model/file')
const path = require('path')


exports.ImgCreate = {
    
    upload:async(req, res)=>{
        try {
            const b = new File({
               img:`http://192.168.3.116/${req.file.path.slice(7)}`
            })
            // await b.save()
            res.json(b)
        } catch (e) {
            console.log(e)
        }
    },
    getAll:async(req, res)=>{
        try {
            const c = await File.find()
            .sort({date:-1})
            
            res.json(c)
        } catch (e) {
            console.log(e)
        }
    },
    getbyId:async(req, res)=>{
        try {
       
            const g = await File.findById({_id:req.params.id})
            res.json(g)
        } catch (e) {
            console.log(e)
        }
    }
}
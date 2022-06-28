const express = require('express')
const router = express.Router()
const {ImgCreate} = require('../controller/userController')
const md5 = require('md5')
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image')
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    },
})
const upload = multer({ storage: storage })

router.post('/add',  upload.single('img'), ImgCreate.upload)
router.post('/add', ImgCreate.upload)
router.get('/all', ImgCreate.getAll)
router.get('/:id',ImgCreate.getbyId)
router.post('/in',ImgCreate.login)



module.exports = router

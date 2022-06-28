const express = require('express')
const router = express.Router()
const {ImgCreate, register, login} = require('../controller/auth')
const multer = require('multer');
const path = require('path')
const md5 = require('md5');


const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/image');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

// router.post('/add', upload.single('img'), ImgCreate.upload)

router.post('/add', register)
router.post('/add', login)
router.get('/:id', ImgCreate.getbyId)
router.get('/all', ImgCreate.getAll)
router.get('/Jinsi', ImgCreate.Jinsi)
router.get('/yashashManzili', ImgCreate.yashashManzili)
router.get('/talimShakli', ImgCreate.talimShakli)
router.get('/talimTili', ImgCreate.talimTili)
router.get('/talimDarajasi', ImgCreate.talimDarajasi)
router.get('/MutahasislikNomiBakalavrKunduzgiRu', ImgCreate.MutahasislikNomiBakalavrKunduzgiRu)
router.get('/MutahasislikNomiBakalavrKunduzgiEn', ImgCreate.MutahasislikNomiBakalavrKunduzgiEn)
router.get('/MutahasislikNomiBakalavrSirtqiRu', ImgCreate.MutahasislikNomiBakalavrSirtqiRu)
router.get('/MutahasislikNomiMagisterRu', ImgCreate.MutahasislikNomiMagisterRu)
router.get('/MutahasislikNomiMagisterEn', ImgCreate.MutahasislikNomiMagisterEn)
router.delete('/getDelete', ImgCreate.getDelete)


module.exports = router



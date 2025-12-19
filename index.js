const express = require('express')
const cors = require('cors')
const app = express();
const multer = require('multer')
const fs = require("fs")
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// create a stored destination
const storage = multer.diskStorage({
    destination:(req , file , cb)=>{
        cb(null , 'uploads')
    },
    filename:(req , file , cb)=>{
        cb(null , Date.now() + "-" + file.originalname)
    }
})
// consfigure that in multer
const uploads = multer({storage})

if(!fs.existsSync('uploads')) fs.mkdirSync('uploads')


app.post('/update-user' , uploads.single('file') , (req , res)=>{
    try{
        const filePath = path.join(__dirname , req.file.path)
        const newFileName = `processed-${req.file.filename}`;
        const newFilePath = path.join(__dirname ,"uploads", `processed-${newFileName}`);

    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(newFilePath);

    readStream.pipe(writeStream)


    readStream.on('end' , ()=>{
        console.log('Read Process is completed')
    })
     readStream.on('error' , (err)=>{
        console.log(err)
        res.status(400).json({ status: "error", data: err.message });
    })

    writeStream.on('finish' , ()=>{
        res.status(200).json({
            // path:newFilePath
            path:`http://localhost:4000/download/${newFileName}`
        })
        setTimeout(()=>{
           fs.unlink(filePath , ()=>{})
            fs.unlink(newFilePath , ()=>{})
        },2000)
    })
     writeStream.on('error' , (err)=>{
        console.log(err)
        res.status(400).json({ status: "error", data: err.message });
    })
    }
    catch(err){
        res.status(400).json({ status: "error", data: err.message });
    }
})

app.post('/upload-chunk' , uploads.single('chunk') , (req , res)=>{
    const {offset , fileName} = req.body;
    const filePath = path.join(__dirname ,req.file.path)
    const temPath = path.join(__dirname , "uploads" , `${fileName}`)

    const readStream = fs.createReadStream(filePath)

    const writeStream = fs.createWriteStream(temPath , {
        flags:offset === 0 ? 'w' : 'a'
    })

    readStream.pipe(writeStream)

    readStream.on('finish' , ()=>{
        console.log("file read successfull")
    })

    writeStream.on('finish' , ()=>{
        res.status(200).send("File done completed")
        fs.unlink(filePath , ()=>{})
    })

     readStream.on('error' , (err)=>{
        res.status(400).send(err)
    })

    writeStream.on('error' , (err)=>{
        res.status(400).send(err)
    })
})

app.post('/upload-completed' , (req , res)=>{
    try{
        const {fileName} = req?.body;
    const temPath = path.join(__dirname , "uploads" , `${fileName}`)
    const readStream = fs.createReadStream(temPath)

    let str = ''

    readStream.on('data' , (d)=>{
        str+=d
    })

    readStream.on('end' , ()=>{
        console.log("file read successfull")
        res.status(200).send({
            data:str
        })
        setTimeout(()=>{
            fs.unlinkSync(temPath)
        },2000)
    })

     readStream.on('error' , (err)=>{
        res.status(400).send(err)
    })
    }
    catch(err){
        console.log(err)
        res.status(400).send(err)
    }
})

app.get('/' , (req , res)=>{
    res.status(200).send("Server is running")
})

app.listen(4000 , ()=>{
    console.log("Server is running")
})

const express = require('express')
const app = express()
var cors = require('cors')
const port=3000

app.use(cors())

app.get('/sound/:name', function (req, res) {
    const {name}=req.params
    console.log(name)
    if (name=='dog'){
        res.json({'sound':"멍멍"})
    }
    else if (name=='cat'){
        res.json({'sound':'냐옹'}
        )
    }
    else{
        res.json("알 수 없음")
    }
    
})


app.listen(port)
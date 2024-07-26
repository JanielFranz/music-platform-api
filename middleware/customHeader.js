//In middlewares is important to use next

const customHeader = (req, res, next) =>{
    //Getting the API KEY
    try{
        const apiKey = req.headers.api_key
        if(apiKey === 'leifer-01'){
            next()
        }else{
            res.status(401)
            res.send({error:"Api key invalida"})
        }
    }catch(error){
        res.status(400)
        res.send({error: "Algo ocurrio en el custom header"})
    }
}

module.exports = customHeader
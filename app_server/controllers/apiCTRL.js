const database = require('../database/index');





const getCompany= async ( req, res )=>{
    try{
        const q =`Select * from company;`
        const {rows} = await database.query(q)
        console.log(rows)
        res.json({
            status:true,
            data:rows
        })

    } 
    catch (e) {
        console.log (e)
        res.status(500).send(e.message)
    }
}
const getCompanyId = async(req,res)=>{
    try{
        const {id} = req.params
        const q_text=`Select * from company where id=$1;`
        const data = await database.query(q_text,[id])
        console.log(data.rows)
        res.json({
            status:true,
            data:data.rows
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
}
const getFirstdate = async(req,res)=>{
    try{
        const q = 'Select * from firstdate'
        const {rows} = await database.query(q)
        console.log(rows)
        res.json({
            status:true,
            data:rows
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
}
const getFirstdateId = async(req,res)=>{
    try{
        const {id} = req.params
        const q_text = 'Select * from firstdate where id=$1;'
        const {rows} = await database.query(q_text,[id])
        console.log(rows)
        res.json({
            status:true,
            data:rows
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
}
const getModel = async(req,res)=>{
    try{
        const q = 'Select * from model'
        const {rows} = await database.query(q)
        console.log(rows)
        res.json({
            status:true,
            data:rows
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
}
const getModelId = async(req,res)=>{
    try{
        const {id} = req.params
        const q_text = 'Select * from model where id=$1;'
        const {rows} = await database.query(q_text,[id])
        console.log(rows)
        res.json({
            status:true,
            data:rows
        })
    }
    catch(e){
        console.log(e)
        res.status(500).send(e.message)
    }
}


module.exports={
    getCompany,
    getCompanyId,
    getFirstdate,
    getFirstdateId,
    getModel,
    getModelId

}
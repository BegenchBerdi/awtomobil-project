const database=require('../database/index')

//-------------company----------------------
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
    const addCompany = async(req,res)=>{
        try{
            const {name} = req.body;
            const q_text = `INSERT INTO  company(name) VALUES($1) returning id;`
            //const values=[req.body.name]
            const data = await database.query(q_text,[name]);
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
    const updateCompany = async (req,res)=>{

        try{
            const {id} = req.params
            const {name} = req.body
            const q_text = 'UPDATE company set name=$1 where id=$2;'
            await database.query(q_text,[name,id])
            res.json({
                status:true,
                msg:'Data updated succesfully'
            })
        }

        catch(e){
            console.log(e);
            res.status(500).send(e.message)
        }
    }
    const deleteCompany = async(req,res) =>{
        try{
            const {id} = req.params
            const q_text = 'DELETE from company where id=$1'
            await database.query(q_text,[id])
            res.json({
                status:true,
                msg:'Data deleted succesfully'
            })
        }
        catch(e){
            console.log(e)
            res.status(500).send(e.message)
        }
    }


//-------------firstdate------------------
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
    const addFirstdate = async(req,res)=>{
        try{
            const {name} = req.body
            const {company_id} = req.body
            const q_text = 'INSERT INTO firstdate(name,company_id)  VALUES($1,$2) returning id;'
            const values = [ req.body.name, req.body.company_id ]
            const {rows} = await database.query(q_text,[name,company_id],values)
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
    const updateFirstdate = async(req,res)=>{
        try{
            const {id} = req.params
            const {name} = req.body
            const {company_id} = req.body
            const q_text = 'UPDATE firstdate set(name,company_id) where id=$1;'
            await database.query(q_text[name,company_id,id])
            res.json({
                status:true,
                msg:'Date updated succesfully!'
            })

        }
        catch(e){
            console.log(e)
            res.status(500).send(e.message)
        }
    }
    const deleteFirstdate = async(req,res)=>{
        try{
            const {id} = req.params
            const q_text = 'DELETE  FROM firstdate where id=$1;'
            await database.query(q_text,[id])
            res.json({
                status:true,
                msg:'Date deleted succesfully!'
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
    const addModel = async(req,res)=>{
        try{
            const {name} = req.body
            const {color} = req.body
            const {firstdate_id} = req.body
            const {company_id} = req.body
            const q_text = 'INSERT INTO model(name,color,firstdate_id,company_id)  VALUES($1,$2,$3,$4) returning id;'
            const values = [ req.body.name,req.body.color,req.body.firstdate_id, req.body.company_id ]
            const {rows} = await database.query(q_text,[name,color,firstdate_id,company_id],values)
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
    const updateModel = async (req,res)=>{

        try{
            const {id} = req.params
            const {name} = req.body
            const {color} = req.body
            const {firstdate_id} = req.body
            const {company_id} = req.body

            const q_text = 'UPDATE model set name=$1,color=$2, firstdate_id=$3, company_id=$4 where id=$5;'
            await database.query(q_text,[name,color,firstdate_id,company_id,id])
            res.json({
                status:true,
                msg:'Data updated succesfully'
            })
        }

        catch(e){
            console.log(e);
            res.status(500).send(e.message)
        }
    }
    const deleteModel = async(req,res)=>{
        try{
            const {id} = req.params
            const q_text = 'DELETE  FROM model where id=$1;'
            await database.query(q_text,[id])
            res.json({
                status:true,
                msg:'Date deleted succesfully!'
            })
        }
        catch(e){
            console.log(e)
            res.status(500).send(e.message)
        }
    }


module.exports = {
    getCompany,
    getCompanyId,
    addCompany,
    updateCompany,
    deleteCompany,
    

    getFirstdate,
    getFirstdateId,
    addFirstdate,
    updateFirstdate,
    deleteFirstdate,


    getModel,
    getModelId,
    addModel,
    updateModel,
    deleteModel
}
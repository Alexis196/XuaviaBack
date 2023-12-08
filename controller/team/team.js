import Team from '../../models/Team.js'

const getTeam = async (req, res, next) =>{
    try{
        const team = await Team.find()
        return res.status(200).json({team})
    }
    catch (err){
        console.log(err)
        next(err)
    }
}

export default getTeam
import data from '../../graphql/graph'

export default async (req, res) => {

try{
    return res.json(data);
}
catch(e){
    return res.json({error:e.toString()})
}
};
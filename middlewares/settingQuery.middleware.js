
const  {isValid2dArray,isNonNegativeInteger} = require( "../utlities/validation");
const  SettingQuery=(req,res,next)=>{
  if(!req.query?.seats || !req.query?.passengers )
      res.status(400).end('Invalid request')
try{
      const bracketsRegex = /(\[*\]*)/g;
    const seats = req.query?.seats.split(/\s*]\s*,\s*\[\s*/).map(ele => {
      const arr = ele.replace(bracketsRegex, '').split(',');
      return [+arr[0], +arr[1]];
    });
     if(!isValid2dArray(seats))
  {
    res.status(400).end('Invalid seat query request')
  }
   const passengers =Number(req.query?.passengers);
  if (!isNonNegativeInteger(passengers)) {;
      res.status(400).send('Invalid passenger query request')
  }

  req.seats=seats;
  req.passengers=passengers;
}catch(err)
{
res.status(500)
}
  next();
}

module.exports=SettingQuery;

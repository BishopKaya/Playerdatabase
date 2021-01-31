const httpStatus=require("http-status-codes")
exports.notFound=(req,res)=>{
    res.status(httpStatus.NOT_FOUND);
    res.send("404-not found")
}

exports.internalServerError=(req,res)=>{
    res.status(httpStatus.INTERNAL_SERVER_ERROR);
    res.send("504-Internal servee error");
}
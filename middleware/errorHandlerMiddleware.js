import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleWare = (err, req, res, next) =>{
    console.log(err);
    const statusCode = err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR
    const msg = err.message || "something went wrong, try again"
    res.status(500).json({msg: 'something went wrong'});
};
export default errorHandlerMiddleWare;
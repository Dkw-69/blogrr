import jwt from 'jsonwebtoken'


const auth = async (req, res, next) => {
    try {
        // check if the user's token is valid
        // console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1]
        // check whether the token is google or jwt's
        const isCustomAuth = token.length < 500
        // the data gotten from the token
        let decodedData;
        // check if the token is jwt
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, '47-47_XVFgoodMORNING!!!00000000000000120')
            // get the user's id
            req.userId = decodedData?.id;
        }
        else{ 
            // google's token
            decodedData = jwt.decode(token)
            // get the user's id
            // sub is google's id differentiator across users
            req.userId = decodedData?.sub;
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth
// '47-47_XVFgoodMORNING!!!00000000000000120'
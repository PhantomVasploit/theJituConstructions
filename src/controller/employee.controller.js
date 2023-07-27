const mssql = require('mssql')
const bcrypt = require('bcrypt')

const { sqlConfig } = require('../config/database.config');
const { registerSchema, loginSchema } = require('../utilities/validator');
const { createToken } = require('../utilities/token.gen');
const { hashPassword } = require('../utilities/hash');

module.exports.registerEmployee = (req, res)=>{
    const {firstName, lastName, email, password} = req.body;

    // validate data

    const {error} = registerSchema.validate(req.body)
    if(error){
        res.status(400).json({error: error.message})
    }else{
        // check if email is already registered
        mssql.connect(sqlConfig)
        .then((pool)=>{
            pool.request()
            .input('email', email)
            .execute('findEmployeeByEmailProc')
            .then(async(result)=>{
                if(result.recordset.length > 0){
                    res.status(400).json({error: 'This email is already registered.'})
                }else{
                    const token = createToken({email})
                    hashPassword(password)
                    .then((hashedPwd)=>{
                        pool.request()
                        .input('firstName', firstName)
                        .input('lastName', lastName)
                        .input('email', email)
                        .input('password', hashedPwd)
                        .execute('createEmployeePROC')
                        .then((result)=>{
                            return res.status(201).json({message: 'Employee account created successfull', token})
                        })
                        .catch((e)=>{
                            throw e;
                        })
                    })
                    .catch((e)=>{
                        throw e
                    })                
                }
            })
        })
        .catch((e)=>{
            throw e;
        })
    }
    
    
}


module.exports.employeeLogin = (req, res)=>{
    const { email, password } = req.body
    //validate user input
    const { error } = loginSchema.validate(req.body)
    if(error){
        res.status(422).json({error: error.message})
    }else{
        mssql.connect(sqlConfig)
        .then((pool)=>{
            // check if email exits
            pool.request()
            .input('email', email)
            .execute('findEmployeeByEmailProc')
            .then((result)=>{
                if(result.recordset.length <= 0){
                    res.status(400).json({error: 'Email not found'})
                }else{
                    bcrypt.compare(password, result.recordset[0].password)
                    .then((success)=>{
                        if(success){
                            const {password, ...user} = result.recordset[0];
                            const token = createToken(user)
                            return res.status(200).json({ message: 'Login successful', token, user })
                        }
                    })
                    .catch((e)=>{
                        throw e;
                    })
                }
            })
        })
    }
}

module.exports.getAllEmployees = (req, res)=>{
    mssql.connect(sqlConfig)
    .then((pool)=>{
        pool.request()
        .execute("findAllEmployeesPROC")
        .then((result)=>{
            res.status(200).json({message: 'Fetch successful', data: result.recordset})
        })
        .catch((e)=>{
            throw e;
        })
    })
    .catch((e)=>{
        throw e;
    })
}


module.exports.getEmployee = (req, res)=>{
    const { id } = req.params
    mssql.connect(sqlConfig)
    .then((pool)=>{
        pool.request()
        .input()
    })
}
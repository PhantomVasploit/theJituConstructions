const {Router} = require('express')
const { registerEmployee, employeeLogin, getAllEmployees } = require('../controller/employee.controller')

const employeeRouter = Router()

employeeRouter.get('/employees', getAllEmployees)
employeeRouter.post('/employee/login', employeeLogin)
employeeRouter.post('/employee/register', registerEmployee)

module.exports = employeeRouter;
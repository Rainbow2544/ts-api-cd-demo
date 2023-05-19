import { getAllTasks } from "../../controllers/taskController"
import {getMockReq,getMockRes} from '@jest-mock/express'

describe('getAllTasks', () =>{
    test('should send all tasks via res', ()=> {
        //arrange
        const reqMock = getMockReq();
        const {res} = getMockRes();

        //Act
        getAllTasks(reqMock, res)

        //Assert
        expect(res.send).toBeCalledTimes(1)
    })
})

describe('getOneTasks', () =>{
    test('should send send 404 if not exists', ()=> {
        //arrange
        const reqMock = getMockReq({ param: {id:"22"} as any});
        const {res} = getMockRes();

        //Act
        getAllTasks(reqMock, res)
        
        //Assert
       // expect(res.statusCode).toBe(404)
    })
})
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Subhankar"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "subhankar",
            lastname : "sarkar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id : 1,
        email: "some@gmail.com"
    },
    {
        id : 2,
        email : "sometwo@gmail.com"
    }
]

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "JavaScript in hindi",
    coursefees : "999",
    courseInstructor : "Subhankar"
}

const {courseInstructor : Instructor} = course
console.log(Instructor)


// {
//     "name" : "Subhankar",
//     "CourseName" : "JS in hindi",
//     "Fees" : "266"
// }



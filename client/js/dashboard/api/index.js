// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'http://js-ass3-btol.herokuapp.com/api/departments/',
    // Snippet #5
    getDepartment: (name)=>{
        return `http://js-ass3-btol.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `http://js-ass3-btol.herokuapp.com/api/departments/employee/id/${id}` 
    },
    updateEmployee: (id)=>{
        return `http://js-ass3-btol.herokuapp.com/api/departments/employee/update` 
    }
}

export default api
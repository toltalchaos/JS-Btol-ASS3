// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'https://js-ass3-btol.herokuapp.com/api/departments/',
    // Snippet #5
    getDepartment: (name)=>{
        return `https://js-ass3-btol.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `https://js-ass3-btol.herokuapp.com/api/departments/employee/id/${id}` 
    },
    updateEmployee: (id)=>{
        return `https://js-ass3-btol.herokuapp.com/api/departments/employee/update` 
    }
}

export default api

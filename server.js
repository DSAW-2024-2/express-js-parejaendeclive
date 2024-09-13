const express =require('express');
const app = express();
const port = process.env.PORT || 3000;
// data students
let students_data= {
    1:{
    name: "Samuel Andres",
    lastName: "Rodriguez Ulloa",
    email: "samuelroul@unisabana.edu.co",
    id: "0000296433"
    },

    2:{
        name: "Andrea Julieth",
        lastName: "Sosa Rodriguez",
        email: "andreasorol@unisabana.edu.co",
        id:"0000298246"
    
    }   
};
//endpoint_function
app.get('/user-info/:id', (req, res) => {
    const id= req.params.id;
    const selected_student=students_data[id];
    
        if(selected_student){
            //call validation function
            res.json(selected_student); 
            
        }
        else{
            res.status(404).json({ error: "student not found" });
        }
    
    
    
})
app.listen(port, () => {
    console.log(`server listen in http://localhost:${port}`);
});

//validation






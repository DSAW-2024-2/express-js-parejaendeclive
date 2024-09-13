const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// enable CORS
app.use(cors());

// Data students
let students_data = {
    1: {
        name: "Samuel Andres",
        lastName: "Rodriguez Ulloa",
        email: "samuelroul@unisabana.edu.co",
        id: "0000296433"
    },
    2: {
        name: "Andrea Julieth",
        lastName: "Sosa Rodriguez",
        email: "andreasosro@unisabana.edu.co",
        id: "0000298246"
    }
};

// Endpoint get server default
app.get('/', (req, res) => {
    res.json({ message: "You are in the server. add /user-info/id for more information about a student" });
});

// Endpoint get students information
app.get('/user-info/:id', (req, res) => {
    try {
        const id = req.params.id;

        // Validations
        if (!/^\d+$/.test(id)) {
            return res.status(400).json({ error: "Invalid ID format. ID must be a number." });
        }

        const selected_student = students_data[id];

        if (selected_student) {
            res.json(selected_student);
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (error) {c
        // server validations
        res.status(500).json({ error: "Internal server error" });
    }
});

// listen server-port
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// able CORS
app.use(cors());

// students data
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
        email: "andreasorol@unisabana.edu.co",
        id: "0000298246"
    }
};

// Endpoint for user info
app.get('/user-info/:id', (req, res) => {
    try {
        const id = req.params.id;

        // Verify ID
        if (!/^\d+$/.test(id)) {
            return res.status(400).json({ error: "Invalid ID format. ID must be a number." });
        }

        const selected_student = students_data[id];

        if (selected_student) {
            res.json(selected_student);
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (error) {
        //verify server
        res.status(500).json({ error: "Internal server error" });
    }
});

// listen server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
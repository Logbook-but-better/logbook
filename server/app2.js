const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

let teachers = [];

// Добавление учителя
app.post('/teachers', (req, res) => {
    const { name, subjects } = req.body;

    const newTeacher = { id: uuidv4(), name, subjects };
    teachers.push(newTeacher);

    res.status(201).send(newTeacher);
});

// Получение всех учителей
app.get('/teachers', (req, res) => {
    res.send(teachers);
});

// Удаление учителя
app.delete('/teachers/:id', (req, res) => {
    const { id } = req.params;

    teachers = teachers.filter(teacher => teacher.id !== id);

    res.send('Teacher deleted');
});

// Назначение предметов учителю
app.put('/teachers/:id/subjects', (req, res) => {
    const { id } = req.params;
    const { subjects } = req.body;

    const teacher = teachers.find(t => t.id === id);
    if (!teacher) {
        return res.status(404).send('Teacher not found');
    }

    teacher.subjects = subjects;

    res.send(teacher);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
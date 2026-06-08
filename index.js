import express from 'express';

const app = express();


const PORT = process.env.PORT ?? 8000;

app.get("/", (req,res) =>{
    return res.json({
        message: 'Server is healthy v3.1', status:"GitHub Actions Hurayyyyyyyyyyyyyy "
    });


})
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
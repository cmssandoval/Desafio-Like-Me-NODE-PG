const express = require('express');
require('dotenv/config');
const cors = require('cors');

const { postModel } = require('./models/post.model');

const app = express();
const serverPORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.listen(serverPORT, () => {
    console.log(`Servidor encendido en http://localhost:${serverPORT}/`);
});

app.get('/posts', async ( req, res ) => {
    try {

        const posts = await postModel.getPosts();
        return res.status(200).json(posts);

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: "Error interno del servidor."
        });

    }
});

app.post('/posts', async ( req, res ) => {
    try {
        const post = req.body;
        
        if ( !post ) return res.status(400).json({
            error:"Bad request",
            message: "El body es obligatorio.",
        });

        const response = await postModel.addPost( post );
        return res.status(201).json(response);
        
    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: "Error interno del servidor."
        });

    }
});

app.put('/posts/like/:id', async ( req, res ) => {
    try {
        const { id } = req.params;

        const isValidId = /^\d+$/.test( id );

        if ( !id || !isValidId ) {
            return res.status(400).json({
                message: "El id ingresado no es válido"
            });
        }

        const response = await postModel.likePostById( id );
        return res.status(200).json(response);

    } catch (error) {
       
        console.log(error);
        return res.status(error.code).json({ message: error.message });

    }
});

app.delete('/posts/:id', async ( req, res ) => {
    try {
        const { id } = req.params;

        const isValidId = /^\d+$/.test( id );

        if ( !id || !isValidId ) {
            return res.status(400).json({
                message: "El id ingresado no es válido"
            });
        }

        const response = await postModel.removePostById( id );
        return res.status(200).json(response);   
    } catch (error) {
               
        console.log(error);
        return res.status(error.code).json({message: error.message});

    }
});
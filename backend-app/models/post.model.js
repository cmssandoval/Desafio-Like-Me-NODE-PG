const { pool } = require('../database/connection.js');

/**
 * Obtiene los posts almacenados en la base de datos.
 * @returns {Promise<Array<Object>|Error>} Un arreglo con los posts.
 */
const getPosts = async () => {
    try {
        const query = 'SELECT * FROM posts';
        const { rows: response } = await pool.query(query);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
};

/**
 * Inserta un post en la base de datos.
 * @param {Object} post Post a insertar en la base de datos.
 * @returns {Promise<Object|Error>} El post insertado en la base de datos.
 */
const addPost = async ( post ) => {
    try {
        const query = 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *';
        const values = [ post.titulo, post.url, post.descripcion ];
        const { rows: response } = await pool.query( query, values);
        return response[0];
    } catch (error) {
        console.log(error);
        return error;
    }
};

const postModel = {
    getPosts,
    addPost,
};

module.exports =  { postModel };
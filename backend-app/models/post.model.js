const { pool } = require('../database/connection.js');

/**
 * Obtiene los posts almacenados en la base de datos.
 * @returns {Promise<Array<Object>|Error>} Un arreglo con los posts.
 */
const getPosts = async () => {
    try {
        const query = 'SELECT * FROM posts';
        const response = await pool.query(query);

        return response.rows;
    } catch (error) {
        throw error;
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
        const values = [ post.titulo, post.img, post.descripcion ];
        const response = await pool.query( query, values );

        return response.rows[0];
    } catch (error) {
        throw error;
    }
};

const likePostById = async ( postId ) => {
    try {
        const query =
            `UPDATE posts
            SET likes = likes + 1
            WHERE id = $1
            RETURNING likes;
            `;
        
        const response = await pool.query( query, [postId] );

        if (response.rowCount === 0) {
            throw { code: 404, message: 'No existe un post con este id'};
        }

        return response.rows[0];
    } catch (error) {
        throw error;
    }
}

const removePostById = async ( postId ) => {
    try {
        const query =
        `DELETE FROM posts
        WHERE id = $1
        RETURNING *
        `;

        const response = await pool.query(query, [postId]);

        if (response.rowCount === 0) {
            throw { code: 404, message: 'No existe un post con este id'};
        }

        return response.rows[0];

    } catch (error) {
        throw error;
    }
}

const postModel = {
    getPosts,
    addPost,
    likePostById,
    removePostById,
};

module.exports =  { postModel };
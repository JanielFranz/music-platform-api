const ENGINE_DB = process.env.DB_ENGINE
/**
 * If ENGINE_DB is nosql, the function will return { id: '_id' }. If ENGINE_DB is mysql,
 * the function will return { id: 'id' }.
 * @returns {*}
 */
const getProperties = () => {
    const data = {
        nosql: { //when db is nosql the id is _id
            id: '_id'
        },
        mysql: {
            id: 'id'
        }
    }
    return data[ENGINE_DB] //return the data according to the engine
}
module.exports = getProperties
//We can switch here depending on if we will use mongo or sql
const models = {
    usersModel: require('./nosql/users'),
    tracksModel: require('./nosql/tracks'),
    storageModel: require('./nosql/storage')

}

module.exports = models
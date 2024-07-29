//We can switch here depending on if we will use mongo or sql

const models = {
    usersModel: require('./mysql/users'),
    tracksModel: require('./mysql/tracks'),
    storageModel: require('./mysql/storage')

}

module.exports = models
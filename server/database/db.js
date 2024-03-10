import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL=`mongodb://${username}:${password}@ac-m8t4n3h-shard-00-00.4hmvpca.mongodb.net:27017,ac-m8t4n3h-shard-00-01.4hmvpca.mongodb.net:27017,ac-m8t4n3h-shard-00-02.4hmvpca.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-ixv8f2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;
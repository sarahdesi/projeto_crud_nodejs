import mongoose from 'mongoose'

async function connectDatabase(){
await mongoose
.connect(
    'mongodb://sarahribeiropereira17_db_user:army%40bts130613@ac-wpka2qx-shard-00-00.rvphy0l.mongodb.net:27017,ac-wpka2qx-shard-00-01.rvphy0l.mongodb.net:27017,ac-wpka2qx-shard-00-02.rvphy0l.mongodb.net:27017/?ssl=true&replicaSet=atlas-hnz054-shard-0&authSource=admin&appName=Cluster0')
}

export default connectDatabase
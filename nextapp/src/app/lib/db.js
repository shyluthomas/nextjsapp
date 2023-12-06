import { MongoClient} from 'mongodb';

export async function connectToDatabase() {
   const client = await MongoClient.connect('mongodb+srv://99shylu:266464@cluster0.joffadf.mongodb.net/userdb?retryWrites=true&w=majority');
    return client;
}
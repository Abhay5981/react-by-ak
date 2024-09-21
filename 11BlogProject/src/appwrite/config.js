import conf  from '../conf';
import { Client,ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client()
    databases;
    storage;
    constructor(){
        this.client
        .setEndpoint(conf.appwritreUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabasId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
    
    async updatePost(slug,{title, content, featuredImage, status, userId}){
        try {
            return  await this.databases.updateDocument(
                conf.appwriteDatabasId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}


const service = new Service()   // created a object
export default service;
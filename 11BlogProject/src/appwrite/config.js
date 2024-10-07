import conf  from '../conf/conf';
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwritreUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
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
    
    async updatePost(slug, {title, content, featuredImage, status}){
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

    async deletePost( slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabasId,
                conf.appwriteCollectionId,
                slug 
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            return false
        }
    }

    async getPost(slug){
        try {
         return   await this.databases.getDocument(
                conf.appwriteDatabasId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
         return   await this.databases.listDocuments(
            conf.appwriteDatabasId,
            conf.appwriteCollectionId,
            queries

            // if we want pagination then we can add here 
            
         )
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            return false
        }
    }


    // File Upload Services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketI,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            return false
        }
    }

    // Delet File service

    async deleteFile(fileId){
        try { 
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            return false
        }
    }

    // we can also use async await
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()   // created a object
export default service;
import { Client ,ID , Databases , Storage , Query} from "appwrite";
import conf from '../conf/confing.js'


export class Service{
     client = new Client()
     databses;
     bucket;

     constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteprojectId)
        this.databses = new Databases(this.client)
        this.bucket = new Storage(this.client)
     }

     async createPost({title, slug , content , featuredImg , status, userId}){
                        try {
                             return await this.databses.createDocument(
                                conf.appwritedatabaseId,
                                conf.appwriteCollectionId,
                                slug,
                                {
                                    title,
                                    content,
                                    featuredImg,
                                    status,
                                    userId
                                }
                             )
                        } catch (error) {
                            console.log("appwrite error in this line" , error);
                        }
     }

     async updatePost(slug,{title,   content , featuredImg , status}){
        try {
             return await this.databses.updateDocument(
                conf.appwritedatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImg,
                    status
                }
             )
        } catch (error) {
            console.log("appwrite suggestion errro", error)
        }
     }

     async deletepost(slug){
          try {
             await this.databses.deleteDocument(
                conf.appwritedatabaseId,
                conf.appwriteCollectionId,
                slug
             )
             return true
          } catch (error) {
            console.log("appwrite error in deletinng the post", error)
            return false
          }
     }

     async getpost(slug){
        try {
             return await this.databses.getDocument(
                conf.appwritedatabaseId,
                conf.appwriteCollectionId,
                slug
             )
        } catch (error) {
            console.log("appwrite error in deleting the post", error)
            return false;

        }
     }

     async getPosts(queries = [Query.equal("status", "active")]){
         try {
            return await this.databses.listDocuments(
                conf.appwritedatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
         } catch (error) {
            console.log("appwrite erro in heting all post", error)
            return false;
         }
     }

     async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite error in uploading the file", error)
            return false
        }
     }

     async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("appwrite error in delleting the file", error)
        }
     }
     getfilepreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     }
}


const service  = new Service();

export default service;

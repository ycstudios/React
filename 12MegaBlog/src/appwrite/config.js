/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectiontId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async updatePost({ slug, title, content, featuredImage, status, userId }) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectiontId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        // eslint-disable-next-line no-useless-catch
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectiontId,
                slug
            );
        } catch (error) {
            throw error;
        }
    }

    async getPost(slug){
        // eslint-disable-next-line no-useless-catch
        try {
           return  await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectiontId,
                slug
            );
        } catch (error) {
            throw error;
        }

    }

    async getPosts(quries=[Query.equal('status',"active")]){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectiontId,
                quries,

            )
            
        } catch (error) {
          throw error
            
        }

    }

    async uploadFile(file){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )
            
        } catch (error) {
            throw error
            
        }
    }

    async deleteFile(fileId){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.deleteFile(

                conf.appwriteBucketId,
                fileId
            )

            
        } catch (error) {
            throw error
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }
}

const service = new Service();
export default service;

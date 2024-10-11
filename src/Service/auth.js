import { Client , Account ,ID } from "appwrite";
import conf from '../conf/confing.js'

export class AuthService {
         client = new Client();
         account ;
         constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteprojectId);

            this.account = new Account();
         }


         async createAccount ({email, password , name}){
            try {
                const userAccount =  await this.account.create(ID.unique(), email,password,name)
                if(userAccount){
                    // return userAccount

                    return this.login({email,password})
                }else{
                    return  userAccount
                }
            } catch (error) {
                throw error;
            }
         }
         async login ({email , password}){
            try {
                return await this.account.createEmailPasswordSession(email,password)
            } catch (error) {
                throw error
            }
         }


         async getCurrentUser(){
            try {
                return  await this.account.get();
            } catch (error) {
               throw error;   
            }
            
            return null;
         }

         async logout(){
             try {
                 await this.account.deleteSessions();
             } catch (error) {
                  throw error;
             }
         }
}

const authSrvice = new AuthService();

export default authSrvice;
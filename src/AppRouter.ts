import express from 'express'

// Singleton: one single router available in our application
export class AppRouter {
  private static instance: express.Router
  
  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router()
    }

    return AppRouter.instance;
  }
}
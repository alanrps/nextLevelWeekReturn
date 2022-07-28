import express, { Router } from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (request, response) => {
    const {type, comment, screenshot} = request.body;

    // Dependency Inversion Principle
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbacksUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);
    
    await submitFeedbacksUseCase.execute({
        type,
        comment, 
        screenshot
    });

    return response.status(201).send({});
});

exports = routes;
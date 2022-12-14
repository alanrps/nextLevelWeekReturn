import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackCreateData } from "../Feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
        async create({ type, comment, screenshot }: FeedbackCreateData){
            await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot,
            }
        });
    }
}
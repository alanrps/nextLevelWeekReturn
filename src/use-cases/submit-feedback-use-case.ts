import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/Feedbacks-repository";

interface SubmitFeedBackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    // private feedbacksRepository: FeedbackRepository;

    constructor(
        private feedbacksRepository: FeedbackRepository,
        private mailAdapter: MailAdapter,
        ) {
        // this.feedbacksRepository = feedbacksRepository;
    }
    async execute(request: SubmitFeedBackUseCaseRequest) {
        const { type, comment, screenshot } = request;

        if(!type) throw new Error('Type is required.');
        
        if(!comment) throw new Error('Comment is required.');

        if(screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error('Invalid screenshot format.');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        });

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                '<div>',
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                '</div>'
            ].join('\n')
        });
    }
}
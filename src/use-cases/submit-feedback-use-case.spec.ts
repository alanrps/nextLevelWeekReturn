import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies - saber se alguma função foi chamada

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: createFeedbackSpy },
            { sendMail: sendMailSpy },
        );

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example content',
            screenshot: 'data:image/png;base64,test.jpg'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} },
        );

        await expect(submitFeedback.execute({
            type: '',
            comment: 'example content',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without comment', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} },
        );

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without an screenshot invalid', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => {} },
            { sendMail: async () => {} },
        );

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example content',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    })
})
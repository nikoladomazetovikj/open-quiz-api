import axios from 'axios';

export const approveQuestion = async (questionId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    try {
        await axios.patch(
            `${process.env.BASE_URL}/api/questions/${questionId}`,
            {},
            config
        );

    } catch (error) {
        console.error('Error approving question:', error);
        throw error;
    }
};

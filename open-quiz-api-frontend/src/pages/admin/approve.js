import axios from 'axios';

export const approveQuestion = async (questionId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    try {
        await axios.patch(
            `http://127.0.0.1:8000/api/questions/${questionId}`,
            {},
            config
        );

    } catch (error) {
        console.error('Error approving question:', error);
        throw error;
    }
};

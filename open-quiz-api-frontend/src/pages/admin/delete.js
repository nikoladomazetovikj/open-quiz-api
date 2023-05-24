import axios from 'axios';

export const deleteQuestion = async (questionId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    try {
        await axios.delete(
            `http://127.0.0.1:8000/api/questions/${questionId}`,
            {},
            config
        );

        // Handle success or perform any additional logic here
        console.log('Question deleted successfully');
    } catch (error) {
        console.error('Error deleting question:', error);
        throw error;
    }
};

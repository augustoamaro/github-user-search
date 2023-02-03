import axios from "axios";

const searchUser = async (input, search) => {
    search.addEventListener('click', async () => {
        const username = input.value;
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    });
};

export { searchUser };

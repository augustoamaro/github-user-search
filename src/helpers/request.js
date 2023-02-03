import axios from "axios";

const searchUser = async (input, search) => {
    search.addEventListener('click', async () => {
        const username = input.value;
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await axios.get(url);

            const data = await response.data;
            const values = getData(data);

            return values;

        } catch (error) {
            console.log(error.message)
        }
    });
};

const getData = (data) => {
    const fullName = document.querySelector('[full_name]');
    const login = document.querySelector('[login');
    const joined = document.querySelector('[joined');

    fullName.textContent = data.name;
    login.textContent = `@${data.login}`
    joined.textContent = `Joined ${data.created_at}`; // formatar data

    console.log("aqui", data)
};

export { searchUser, getData };

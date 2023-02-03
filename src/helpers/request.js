import axios from "axios";

const searchUser = async (input, search) => {
    search.addEventListener('click', async () => {
        const username = input.value;
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await axios.get(url);

            const data = await response.data;
            const values = changeDomValues(data);

            return values;

        } catch (error) {
            console.log(error.message)
        }
    });
};

const changeDomValues = (value) => {
    const fullName = document.querySelector('[full_name]');
    const login = document.querySelector('[login');
    const joined = document.querySelector('[joined');
    const bio = document.querySelector('[bio');

    fullName.textContent = value.name;
    login.textContent = `@${value.login}`
    joined.textContent = `Joined ${value.created_at}`; // formatar data
    bio.textContent = value.bio;


    console.log("aqui", value)
};

export { searchUser };

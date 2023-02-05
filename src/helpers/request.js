import axios from "axios";

const fetchUserData = async (input, search) => {
    search.addEventListener('click', async () => {
        const username = input.value;
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await axios.get(url);
            const data = await response.data;
            updateUserValues(data);

        } catch (error) {
            console.log(error.message)
        }
    });
};

const updateUserValues = (value) => {
    const avatar = document.querySelector('[avatar]');
    const fullName = document.querySelector('[full_name]');
    const login = document.querySelector('[login');
    const created_at = document.querySelector('[created_at');
    const bio = document.querySelector('[bio');

    const publicRepos = document.querySelector('[public_repos]');
    const followers = document.querySelector('[followers]');
    const following = document.querySelector('[following]');

    const location = document.querySelector('[location]');
    const website = document.querySelector('[website]');
    const twitter = document.querySelector('[twitter]');
    const company = document.querySelector('[company]');

    avatar.setAttribute("src", value.avatar_url);
    fullName.textContent = value.name;
    login.textContent = `@${value.login}`

    created_at.textContent = `Joined ${value.created_at}`;

    bio.textContent = value.bio === null ? "Sem bio" : value.bio;

    publicRepos.textContent = value.public_repos;
    followers.textContent = value.followers;
    following.textContent = value.following;

    location.textContent = value.location;
    website.textContent = value.html_url;
    twitter.textContent = value.twitter_username === null ? "Não disponível" : value.twitter_username;
    company.textContent = value.company;


    console.log("aqui", value)
};

export { fetchUserData };

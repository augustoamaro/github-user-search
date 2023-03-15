import axios from "axios";

const fetchUserData = async (input, search) => {
    search.addEventListener("click", async () => {
        const username = input.value;
        const url = `https://api.github.com/users/${username}`;

        try {
            const response = await axios.get(url);
            const data = await response.data;
            updateUserValues(data);
        } catch (error) {
            console.error(error.message);
        }
    });
};

const updateUserValues = (value) => {
    const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        html_url,
        twitter_username,
        company
    } = value;

    const avatar = document.querySelector("[avatar]");
    const fullName = document.querySelector("[full_name]");
    const loginEl = document.querySelector("[login]");
    const createdAt = document.querySelector("[created_at]");
    const bioEl = document.querySelector("[bio]");

    const publicRepos = document.querySelector("[public_repos]");
    const followersEl = document.querySelector("[followers]");
    const followingEl = document.querySelector("[following]");

    const locationEl = document.querySelector("[location]");
    const website = document.querySelector("[website]");
    const twitter = document.querySelector("[twitter]");
    const companyEl = document.querySelector("[company]");

    avatar.setAttribute("src", avatar_url);
    fullName.textContent = name;
    loginEl.textContent = `@${login}`;

    createdAt.textContent = `Joined ${created_at}`;

    bioEl.textContent = bio === null ? "Sem bio" : bio;

    publicRepos.textContent = public_repos;
    followersEl.textContent = followers;
    followingEl.textContent = following;

    locationEl.textContent = location;
    website.textContent = html_url;
    twitter.textContent = twitter_username === null ? "Não disponível" : twitter_username;
    companyEl.textContent = company;
};

export { fetchUserData };

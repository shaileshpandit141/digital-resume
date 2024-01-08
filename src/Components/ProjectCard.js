export default function ProjectCard(data) {
    return (
        `
        <div class="touch--overflow">
            <a class="project--card--link" href="https://github.com/shaileshpandit141/${data.githubLink}">
                <h3 class="title--text">${data.title}</h3>
                <p class='subtitle--text'>${data.date}</p>
                <p class='subtitle--text'>${data.subTitle}</p>
            </a>
        </div>
        `
    )
}
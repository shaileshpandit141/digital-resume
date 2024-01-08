export default function SkillCard(data) {

    // || Hendel Rating 
    let skillRatings = []
    for (let i = 1; i <= 5; i++) {
        if (i <= data.rating) {
            skillRatings.push('<span>&starf;</span>')
        } else {
            skillRatings.push('<span>&star;</span>')
        }
    }

    return (
        `
        <div class="skill">
            <h3 class="title--text">${data.skillName}</h3>
            <div class="reating--cont">${skillRatings.join('\n')}</div>
        </div>
        `
    )
}
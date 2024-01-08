export default function CertificateCard(data) {
    return (
        `
        <div class="certificate--card">
            <h3 class="title--text">${data.title}</h3>
            <p class='subtitle--text'>${data.date}</p>
            <p class='subtitle--text'>${data.services}</p>
        </div>
        `
    )
}
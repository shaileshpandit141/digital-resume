import ProjectData from "./Data/ProjectData.js";
import ProjectCard from "./Components/ProjectCard.js";
import SkillData from "./Data/SkillData.js";
import SkillCard from "./Components/SkillCard.js";
import WorkshopData from "./Data/WorkshopData.js";
import WorkshopCard from "./Components/WorkshopCard.js";
import CertificateData from "./Data/CertificateData.js";
import CertificateCard from "./Components/CertificateCard.js";


// || Hendel Personal Projects Cards
const projectcontEl = document.getElementById('project--cont')
ProjectData.forEach(data => {
    projectcontEl.insertAdjacentHTML('beforeend', ProjectCard(data))
})


// || Hendel Skills Cards
const skillCardEl = document.getElementById('skill--cont')
SkillData.forEach(data => {
    skillCardEl.insertAdjacentHTML('beforeend', SkillCard(data))
})


// || Hendel WorkShop Cards
const workshopcontEl = document.getElementById('workshop--cont')
WorkshopData.forEach(data => {
    workshopcontEl.insertAdjacentHTML('beforeend', WorkshopCard(data))
})


// || Hendel Certificates Cards
const certificatecontEl = document.getElementById('certificate--cont')
CertificateData.forEach(data => {
    certificatecontEl.insertAdjacentHTML('beforeend', CertificateCard(data))
})

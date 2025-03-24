export default function taskCard(
    taskName = "",
    taskDescription = "",
    path = "",
    attrClassLink = [],
    attrClassBodyCard = []
) {
    const linkCard = document.createElement("a")
    attrClassLink.forEach((el) => linkCard.classList.add(el))
    linkCard.href = path

    const bodyCard = document.createElement("div")
    attrClassBodyCard.forEach((el) => bodyCard.classList.add(el))
    linkCard.appendChild(bodyCard)

    const h3 = document.createElement("h3")
    h3.textContent = taskName
    bodyCard.appendChild(h3)

    const p = document.createElement("p")
    p.textContent = taskDescription
    bodyCard.appendChild(p)
    // console.log(linkCard.outerHTML)

    return linkCard
}

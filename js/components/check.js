export default function check(fill) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    // svg.setAttribute("id", "Capa_1")
    // svg.setAttribute("class", "check")
    svg.setAttributeNS(null, "width", "32px")
    svg.setAttributeNS(null, "height", "32px")
    svg.setAttributeNS(null, "viewBox", "0 0 342.508 342.508")

    const g1 = document.createElementNS("http://www.w3.org/2000/svg", "g")
    // g1.setAttributeNS(null, "id", "SVGRepo_bgCarrier")
    g1.setAttributeNS(null, "stroke-width", "0")

    const g2 = document.createElementNS("http://www.w3.org/2000/svg", "g")
    // g2.setAttributeNS(null, "id", "SVGRepo_tracerCarrier")
    g2.setAttributeNS(null, "stroke-linecap", "round")
    g2.setAttributeNS(null, "stroke-linejoin", "round")

    const g3 = document.createElementNS("http://www.w3.org/2000/svg", "g")
    // g3.setAttributeNS(null, "id", "SVGRepo_iconCarrier")

    const g4 = document.createElementNS("http://www.w3.org/2000/svg", "g")
    g3.append(g4)
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")

    path.setAttributeNS(
        null,
        "d",
        "M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z"
    )

    g4.append(path)
    svg.append(g1, g2, g3)
    svg.setAttributeNS(null, "fill", fill || "#000000")
    return svg
}

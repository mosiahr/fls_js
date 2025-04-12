export default function check(fill) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttributeNS(null, "width", "32")
    svg.setAttributeNS(null, "height", "32")
    svg.setAttributeNS(null, "viewBox", "0 0 32 32")
    svg.setAttributeNS(null, "fill", "none")

    const cirlce = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
    )
    cirlce.setAttributeNS(null, "cx", "16")
    cirlce.setAttributeNS(null, "cy", "16")
    cirlce.setAttributeNS(null, "r", "16")
    cirlce.setAttributeNS(null, "fill", fill || "#000000")

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttributeNS(null, "fill-rule", "evenodd")
    path.setAttributeNS(null, "clip-rule", "evenodd")
    path.setAttributeNS(
        null,
        "d",
        "M7 14.9206C9.07075 15.3461 11.734 16.1698 13.75 17.465C16.1178 14.3345 20.371 11.406 25 9C20.6042 13.2739 16.9668 18.1236 14.5 23C12.5118 20.2129 10.3398 17.6189 7 14.9206Z"
    )
    path.setAttributeNS(null, "fill", "white")

    svg.append(cirlce, path)
    return svg
}

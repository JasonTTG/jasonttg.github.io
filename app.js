const grid = document.querySelector("#project-grid");
const template = document.querySelector("#project-card-template");

document.querySelector("#year").textContent = new Date().getFullYear();

function renderProjects(projects) {
  const fragment = document.createDocumentFragment();

  projects.forEach((project) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".project-card");
    const media = node.querySelector(".project-media");
    const image = node.querySelector("img");

    if (project.featured) card.classList.add("featured");

    node.querySelector(".project-kicker").textContent = project.type;
    node.querySelector(".project-title").textContent = project.title;
    node.querySelector(".project-year").textContent = project.year ?? "";
    node.querySelector(".project-description").textContent = project.description;

    image.src = project.image;
    image.alt = `${project.title} project preview`;

    const primaryUrl = project.links?.[0]?.url || "#";
    media.href = primaryUrl;

    const highlightList = node.querySelector(".project-highlights");
    (project.highlights || []).forEach((highlight) => {
      const li = document.createElement("li");
      li.textContent = highlight;
      highlightList.appendChild(li);
    });

    const tags = node.querySelector(".project-tags");
    (project.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });

    const links = node.querySelector(".project-links");
    (project.links || []).forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      links.appendChild(anchor);
    });

    fragment.appendChild(node);
  });

  grid.replaceChildren(fragment);
}

renderProjects(PROJECTS);

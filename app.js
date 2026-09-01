const projectList = document.querySelector("#project-list");
const projectTemplate = document.querySelector("#project-template");

document.querySelector("#year").textContent = new Date().getFullYear();

PROJECTS.forEach((project) => {
  const node = projectTemplate.content.cloneNode(true);

  node.querySelector(".project-title").textContent = project.title;
  node.querySelector(".project-meta").textContent = project.type;
  node.querySelector(".project-year").textContent = project.year || "";
  node.querySelector(".project-description").textContent = project.description;
  node.querySelector(".project-tags").textContent = project.tags.join(" · ");

  const highlights = node.querySelector(".project-highlights");
  project.highlights.forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlights.appendChild(item);
  });

  const links = node.querySelector(".project-links");
  project.links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.label;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    links.appendChild(anchor);
  });

  projectList.appendChild(node);
});

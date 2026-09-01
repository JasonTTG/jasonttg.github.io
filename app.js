const projectList = document.querySelector("#project-list");
const projectTemplate = document.querySelector("#project-template");

document.querySelector("#year").textContent = new Date().getFullYear();

function renderProjectMedia(container, media, projectTitle) {
  if (!media || !media.src) {
    container.remove();
    return;
  }

  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;

    if (media.poster) {
      video.poster = media.poster;
    }

    video.setAttribute("aria-label", `${projectTitle} video`);
    container.appendChild(video);
    return;
  }

  const image = document.createElement("img");
  image.src = media.src;
  image.alt = media.alt || `${projectTitle} preview`;
  image.loading = "lazy";
  container.appendChild(image);
}

PROJECTS.forEach((project) => {
  const node = projectTemplate.content.cloneNode(true);

  node.querySelector(".project-title").textContent = project.title;
  node.querySelector(".project-meta").textContent = project.type;
  node.querySelector(".project-year").textContent = project.year || "";
  node.querySelector(".project-description").textContent = project.description;
  node.querySelector(".project-tags").textContent = (project.tags || []).join(" · ");

  renderProjectMedia(
    node.querySelector(".project-media"),
    project.media,
    project.title
  );

  const highlights = node.querySelector(".project-highlights");
  (project.highlights || []).forEach((highlight) => {
    const item = document.createElement("li");
    item.textContent = highlight;
    highlights.appendChild(item);
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

  projectList.appendChild(node);
});

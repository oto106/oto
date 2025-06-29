import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "მშენებარე ბინა თბილისში",
    image: "/images/projects/apt1.jpg"
  },
  {
    id: 2,
    title: "ახალი პროექტი ვაკეში",
    image: "/images/projects/apt2.jpg"
  },
  {
    id: 3,
    title: "ელიტური კორპუსი ბათუმში",
    image: "/images/projects/apt3.jpg"
  },
  {
    id: 4,
    title: "ბინები ავლაბარში",
    image: "/images/projects/apt4.jpg"
  },
  {
    id: 5,
    title: "ახალი კორპუსი საბურთალოზე",
    image: "/images/projects/apt5.jpg"
  },
  {
    id: 6,
    title: "საცხოვრებელი ბლოკი გლდანში",
    image: "/images/projects/apt6.jpg"
  },
  {
    id: 7,
    title: "პრემიუმ ბინები ისანში",
    image: "/images/projects/apt7.jpg"
  },
  {
    id: 8,
    title: "პროექტი დიდ დიღომში",
    image: "/images/projects/apt8.jpg"
  },
  {
    id: 9,
    title: "ახალი საცხოვრებელი კორპუსი",
    image: "/images/projects/apt9.jpg"
  }
];

function Projects() {
  return (
    <section className="section">
      <h2 className="projects-title">ჩვენი პროექტები</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <Link to={`/projects/${project.id}`} className="project-link">ვრცლად</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

export const ProjectCard = ({ title, description, imgUrl }:any) => {
  return (
    <div className= "projectcard_container">
      <div className="project_imgbox">
        <img src={imgUrl} />
        <div className="project_text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}
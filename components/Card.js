
const Card = ({id,title,image}) => {

    return (
        
        <div className="w-full h-60 rounded-md shadow-sm relative overflow-hidden">
            <a target="_blank" className="absolute z-10 h-full w-full inline-block top" href={`https://www.themoviedb.org/movie/${id}`}>
            <img src={`http://image.tmdb.org/t/p/w440_and_h660_face${image}`} alt={title} />
            </a>
        </div>
    )
}

export default Card
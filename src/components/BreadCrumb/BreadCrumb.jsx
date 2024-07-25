const BreadCrumb = ({title, subTitle})=>{
    return(
        <div className="my-4 text-center">
            <h1 className="text-center primary-color">{title}</h1>
            <span className="text-center">{subTitle || ''}</span>
        </div>
    )
}


export default BreadCrumb;
import './PageHeader.scss'
function PageHeader({ headerClassName, headerText }) {

   

    return (
        <>
            <figure className="header">
                <h1 className={`header__text ${headerClassName}`}>{headerText}</h1>
            </figure>
        </>
    )
}

export default PageHeader
import './PageHeader.scss'
function PageHeader ({headerClassName, headerText}) {
    return (
        <>
        
        <h1 className={`header ${headerClassName}`}>{headerText}</h1>

        </>
    )
}

export default PageHeader
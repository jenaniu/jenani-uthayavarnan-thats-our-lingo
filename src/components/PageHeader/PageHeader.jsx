function PageHeader ({headerClassName, headerText}) {
    return (
        <>
        
        <span className={`header ${headerClassName}`}>{headerText}</span>

        </>
    )
}

export default PageHeader
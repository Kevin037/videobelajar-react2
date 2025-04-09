export const HeadAuth = (props) => {
    const {title,desc} = props
    return (
        <>
            <h3 className="text-2xl font-bold text-center mb-1">{title}</h3>
            <p className="text-center text-secondary mb-4">{desc}</p>
        </>
    )
}

export const BannerContent = (props) => {
    const {title,desc} = props
    return (
        <>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-xs mt-3">{desc}</p>
        </>
    )
}
const CardItems = (props) => {
    const {id,photo,title,desc,avatar,user,user_position,user_company} = props
    return (
        <div key={id} className="mt-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-sm max-w-sm p-3 dark:border-gray-300 cursor-pointer hover:opacity-80">
        <div className="grid grid-cols-3 md:grid-cols-1 ...">
            <div className="col-span-1 ...">
                <img className="img-item" src={photo} alt="" />
            </div>
            <div className="col-span-2 ... mx-2 sm:mx-0">
                <h4 className="text-ls sm:mt-2 font-bold">{title}</h4>
                <p className="text-sm mt-2 hidden md:block">{desc}</p>
                <div className="my-2 grid grid-cols-3 grid-cols-5 ...">
                    <div className="col-span-1 ...">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="text-sm col-span-4 ...">
                        <p><b>{user}</b></p>
                        <p>{user_position} di {user_company}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 grid-cols-4 ...">
            <div className="col-span-3 ...">
            <div className="grid grid-cols-1 grid-cols-2 ...">
                <div className="col-span-1"><img src="../assets/rating.svg"/></div>
                <div className="col-span-1">3.5 (86)</div>
            </div>
            </div>
            <div className="col-span-1 ...">
                <b><h5 className="price">Rp 300K</h5></b>
            </div>
        </div>
    </div>
    )
}

export default CardItems
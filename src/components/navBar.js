
export default function navBarMaker({text}) {

    return function() {
        return (
            <div className="nav navbar shadow shadow-lg d-flex flex-column justify-content-center navbar-color">
                <h1 className="mb-0 text-light text-shadow-base text-uppercase">
                    {text}
                </h1>
            </div>
        )
    }
}

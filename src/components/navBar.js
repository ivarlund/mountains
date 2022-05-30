
export default function navBarMaker({text}) {

    return function() {
        return (
            <div className="nav navbar shadow shadow-lg d-flex flex-column justify-content-center" style={{backgroundColor: 'RGB(49, 79, 57, 0.8)'}}>
                <h1 className="mb-0 text-light text-shadow-base text-uppercase">
                    {text}
                </h1>
            </div>
        )
    }
}
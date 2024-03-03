
export default function NavFooter(){
    return(
        <div id="content-wrapper" className="d-flex flex-column">
        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright @ Your Website {new Date().getFullYear()}</span>
                                </div>
                            </div>
                        </footer>
                        </div>
    )
}

export default function AppFooter() {



    return (
        <footer>
            <div className="container d-flex justify-content-between align-items-center my-2 h-100">
                {/* <div className="logo"><img src="/images/logo.png" alt="" /></div> */}
                <div>&copy; {new Date().getFullYear()} <strong>F.D.C.</strong> All rights reserved</div>
            </div>
        </footer>
    )
}
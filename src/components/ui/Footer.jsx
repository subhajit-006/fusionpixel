function Footer(){
    return(
        <div>
            <div className="h-[1px] bg-black/20"></div>
            <div className="flex items-center justify-between p-3 text-black/60">
                <div className="text-xs">© 2024 FusionPixel. All rights reserved.</div>
                <div className="flex gap-5 text-xs">
                    <p>Terms of Service</p>
                    <p>Privacy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
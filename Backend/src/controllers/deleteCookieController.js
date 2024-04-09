const deleteCookieController = async (req, res) => {
try {
    res.clearCookie("token", {
            sameSite: "None",
            secure: true,
            domain: 'menu-posada-mawida-production.up.railway.app',
        })
    return res.status(200).json({success: 'OK'})
} catch (error) {
    res.status(500).json(error.message)
}

}

export default deleteCookieController
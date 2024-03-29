const deleteCookieController = async (req, res) => {
try {
    res.clearCookie("token");
    return res.status(200).json({success: 'OK'})
} catch (error) {
    res.status(500).json(error.message)
}
}

export default deleteCookieController
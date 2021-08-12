const auth = {}
const model = require("../models/users")
const bcr = require("bcrypt")
const jwt = require("jsonwebtoken")
const respone = require("../helpers/respone")
const axios = require("axios")

const tokensss =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3ZTNlNzY2Ni1hNjMzLTRkYWUtYjFlNi1jNzNlOGFiNzZmMTMiLCJpYXQiOjE2Mjg1NjI0MzUsImV4cCI6MTYyODU2MzMzNSwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.DL-mCLNWCXG2Oq1o99NGqoSs45Qu5GyooTpsgOnudb9QUFIEZvGo2JM7a5udjr-HMFTWui6YtxYPCGd1D9OUDyvMiDpIicIGukOBf5corWyiye15homL3f8T9qXvcMbv_6w-MlljGWv5fOJG1NM5a37E9o0PW2TnT0ccJyVGcPDHv942VM_46OunJ7RIlIWFZ7PqGu5Fh4hynOZJBBCK-3Kg_gysXnkyl0H2HbySMqoFEbQ97fD4q6Onv_Whq0ibtU-HFqCJWYgq9rBKtumAKCxC7Pmd9tOhoLBaTyar9Rr5JL9RBF_lajPkKidAOXaTdUDnjhGb5xnNuo3ccxdYElbtKEVFrBUEuOKTBHmxLQsBdRGfeRlrgXMUxfD-R1umdXX_RvNv_hxgIawLpyeGx3utkBzPIMgk93YsdIkrls4IAWCXT1RzRwGmPplRmoIKDM8lMDR4LZR3c4KHMduXRagcIPNNHdxCsFd3MfUD5M646GepZE63yy81Q2ZozErloUSpYs8fvbj61N6h-JKUcDxky6voCfdJwijTkQPyumTDCJ30uvCBUoNqGnalaInMhZ-mI6lMGnO5n_dO3pb8OIHTbE36vligy9n_rAgxE0Rg9tOkJ7iZz_tcLnm5MzI9bFcyP8cfx8sGdOvHH2R-oMS934Jfi2get6TpOP-mMkk"

const token = async (username) => {
    try {
        const payload = {
            user: username,
            role: "admin",
        }
        const token = jwt.sign(payload, process.env.JWT_KEYS, { expiresIn: "1h" })
        const result = {
            message: "token created, login success",
            token: token,
        }
        return result
    } catch (error) {
        throw error // melempar ke function yang memanggil
    }
}

auth.login = async (req, res) => {
    try {
        const passDB = await model.getbyUsername(req.body.username)

        if (passDB <= 0) {
            return respone(res, 400, { msg: "username tidak terdaftar" }, true)
        }

        const passUsers = req.body.password
        const check = await bcr.compare(passUsers, passDB[0].password)

        if (check) {
            const result = await token(req.body.username)
            return respone(res, 200, result)
        } else {
            return respone(res, 401, { msg: "Password Salah" }, true)
        }
    } catch (error) {
        return respone(res, 500, error, true)
    }
}

auth.test = async (req, res) => {
    axios({
        method: "POST",
        url: "https://user-services-dev.pijarbelajar.id/users/v2/password/change",
        headers: { Authorization: `Bearer ${tokensss}` },
        data: { password: "A02011997kk", confirm_password: "A02011997kk" },
    })
        .then((ress) => {
            console.log(ress.data)
            res.send("benar")
        })
        .catch((err) => {
            res.send("salah")
            console.log(err.response)
        })
}

module.exports = auth

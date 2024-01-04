document.addEventListener("DOMContentLoaded",
    function (e) {
        let nameEditButton = document.querySelector("#nameEditButton")
        let showOrNot = document.querySelector("#showOrNot")
        let newname = document.querySelector("#newname")
        let okButton = document.querySelector("#okButton")
        let name = document.querySelector("#name")

        nameEditButton.addEventListener("click",
            function (e) {
                showOrNot.style.display = "block"
                nameEditButton.style.display = "none"
            }
        )

        okButton.addEventListener("click",
            function (e) {
                name.textContent = newname.value
                console.log(name.textContent)
                showOrNot.style.display = "none"
                nameEditButton.style.display = "inline"
            }
        )

        newname.addEventListener("change",
            function (e) {
                name.textContent = newname.value
                console.log(name.textContent)
                showOrNot.style.display = "none"
                nameEditButton.style.display = "inline"




            }


        )
    }
)
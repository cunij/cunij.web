document.addEventListener("DOMContentLoaded",
    function(e){
        let p1=document.querySelector("#p1")
        let userinfo=document.querySelector("#userinfo")
        let summary=document.querySelector("#summary")
        let changing=false
        
        
        p1.addEventListener("click",
        function(e){
            if (changing){
                let _userinfo=userinfo.querySelector("input ").value
                let _summary=summary.querySelector("input ").value
            

                
                userinfo.innerHTML=_userinfo
                summary.innerHTML=_summary


                
                e.target.textContent="프로필 편집"
                changing=false
            }
            else{
                let _userinfo=userinfo.textContent
                let _summary=summary.textContent
               
                userinfo.innerHTML="<input value="+_userinfo+"></input>"
                summary.innerHTML="<input value="+_summary+"></input>"
                
                e.target.textContent="프로필 편집 완료"

                changing=true
            }
        }
        )


    }
)
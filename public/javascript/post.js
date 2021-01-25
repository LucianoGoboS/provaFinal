Posts = {
    add: () => {
        var t = {}
        t.content = document.getElementById("content").value
        t.firstname = document.getElementById("firstname").value
        t.lastname = document.getElementById("lastname").value
        
        var xhttp = new XMLHttpRequest()

        xhttp.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                var resp = JSON.parse(this.responseText)
                if (resp) {
                    Posts.template(resp)
                }
            }
        }

        xhttp.open('POST', '/post', true)
        xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8")
        xhttp.send(JSON.stringify(t))
        return false
    },

    template: (data) => {
        var comment = document.createElement("div")
        comment.setAttribute("id", "comment" + data.id)
        comment.setAttribute("class", "comment")

        var content = document.createElement("p")
        content.setAttribute("class", "content")
        content.innerHTML = data.content

        var user = document.createElement("p")
        user.innerHTML = "Por " + data.user.firstname + " " + data.user.lastname
        user.setAttribute("class", "user")

        var date = document.createElement("span")
        date.setAttribute("class", "date")

        var dtCreation = new Date(data.createdAt)
        date.innerHTML = (dtCreation.getDate() < 10 ? "0" + dtCreation.getDate() : dtCreation.getDate()) +
            "/" + ((dtCreation.getMonth() + 1) < 10 ? "0" + (dtCreation.getMonth() + 1) : (dtCreation.getMonth() + 1)) +
            "/" + dtCreation.getFullYear()

        user.append(date)
        comment.append(content)
        comment.append(user)

        var comments = document.getElementById("comments")
        comments.append(comment)

    }
}

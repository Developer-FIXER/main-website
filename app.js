var Varcomments = {}
// var lastComment = localStorage.getItem('lastCommentTime')
function saveComment(){

    var contenteditable = document.querySelector('[contenteditable]'),
    text = contenteditable.textContent;
    add(text)
}

function add(comment){
    var commentInp  = document.getElementById('commentInp')

    console.log(comment)
    const t = new Date()
    var finalT = t.getDate() + " " + t.getHours() + ':' + t.getMinutes() + ":" + t.getSeconds()
    // lastCommentTime
    try {
        var lastComment = localStorage.getItem('lastCommentTime')
    // 14 16:33:37
    var sp = lastComment.split(' ')
    var col = sp[1].split(':')
    
    // console.log(col)
    console.log(t.getHours(),Number(col[0]), t.getMinutes(),Number(col[1]), t.getSeconds(),Number(col[2]))
    console.log(t.getHours()-Number(col[0]), t.getMinutes()-Number(col[1]), t.getSeconds()-Number(col[2]))
    if (Math.abs(t.getHours()-Number(col[0]))>=0 && Math.abs(t.getMinutes()-Number(col[1]))>=5 && Math.abs(t.getSeconds()-Number(col[2]))>=0){
        localStorage.setItem('lastCommentTime', finalT)
        var commentInp  = document.getElementById('commentInp')
        commentInp.value = ""
        var fireRef = firebase.database().ref().child('comments').child(finalT)
        fireRef.set(comment);

        var toBeCleared = document.getElementById('comments')
        toBeCleared.innerHTML = ""
        toBeCleared.className = 'comments'
        // generate()
        var ref = firebase.database().ref();
    
        ref.on("value", function(snapshot) {
            comments = (snapshot.val().comments);
            // console.log(snapshot.val().comments, typeof snapshot.val().comments)
    
            Varcomments = snapshot.val().comments
            // console.log((snapshot.val().comments).length)
            var size = Object.keys(snapshot.val().comments).length;
            for (let i = 0; i<size ; i++){
                // console.log(Object.keys(Varcomments)[i]) //right
                // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
                generateNew(Object.values(Varcomments)[i])
            }
    
        });
    
    }else{
        
        alert('Please try again after some time!')
        
    }
    } catch (error) {
        localStorage.setItem('lastCommentTime', finalT)
        var commentInp  = document.getElementById('commentInp')
        commentInp.value = ""
        var fireRef = firebase.database().ref().child('comments').child(finalT)
        fireRef.set(comment);
        var commentInp  = document.getElementById('commentInp')
        commentInp.value = ""
        var toBeCleared = document.getElementById('comments')
        toBeCleared.innerHTML = ""
        toBeCleared.className = 'comments'
        // generate()
        var ref = firebase.database().ref();
    
        ref.on("value", function(snapshot) {
            comments = (snapshot.val().comments);
            // console.log(snapshot.val().comments, typeof snapshot.val().comments)
    
            Varcomments = snapshot.val().comments
            // console.log((snapshot.val().comments).length)
            var size = Object.keys(snapshot.val().comments).length;
            for (let i = 0; i<size ; i++){
                // console.log(Object.keys(Varcomments)[i]) //right
                // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
                generateNew(Object.values(Varcomments)[i])
            }
    
        });
    
    }
    

}


function generate(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyCmngadERg9rWbXWlzfywxCSOiHzx5LyH4",
        authDomain: "js-comments-4456d.firebaseapp.com",
        projectId: "js-comments-4456d",
        storageBucket: "js-comments-4456d.appspot.com",
        messagingSenderId: "871628818258",
        appId: "1:871628818258:web:10ef825c5c524dbb095c8b",
        measurementId: "G-5GZBCHNX5P",
        databaseURL: "https://js-comments-4456d-default-rtdb.firebaseio.com/"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var ref = firebase.database().ref();

    console.log(firebase.database().ref().child('comments'))

    ref.on("value", function(snapshot) {
        
        var toBeCleared = document.getElementById('comments')
        toBeCleared.innerHTML = ""
        toBeCleared.className = 'comments'
        comments = (snapshot.val().comments);
        // console.log(snapshot.val().comments, typeof snapshot.val().comments)

        Varcomments = snapshot.val().comments
        // console.log((snapshot.val().comments).length)
        var size = Object.keys(snapshot.val().comments).length;
        for (let i = 0; i<size ; i++){
            // console.log(Object.keys(Varcomments)[i]) //right
            // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
            generateNew(Object.values(Varcomments)[i])
        }

    });

    var $el = $(".comments");
    function anim() {
    var st = $el.scrollTop();
    var sb = $el.prop("scrollHeight")-$el.innerHeight();
    $el.animate({scrollTop: st<sb/2 ? sb : 0}, 4000, anim);
    }
    function stop(){
        $el.stop();
    }
    anim();
    $el.hover(stop, anim);
}

function generateNew(message){

    var _comment = document.createElement("div")
  
    _comment.className="comment"
        
    var c2 = document.getElementById("comments")
    c2.appendChild(_comment)
    
    

    var _quote = document.createElement("div")
    _quote.className="message"
    _quote.innerHTML = "&nbsp;"+message
    _comment.appendChild(_quote)  
}



// -NGfYX7gHP9LABT0fCqf
// :
// "Nice website."
// -NGfYjTAMPdPQEQdmJRf
// :
// "Great, keep doing projects."
// -NGfYmXglhsfarEB2Gsq
// :
// "This kid will make India proud."
// -NGfmjehyXmHMCalA8im
// :
// "Hello brother how are you ? ye kaise banai ?"
// -NGfopiQz2p_GVlaGld0
// :
// "Great 👍 "
// -NGgQQiayKK4sxqz_gsg
// :
// "Mayank"
// -NGks7CCnbNGOk_tDvMP
// :
// "Hi"
// -NGktCzJx1-cJI4VgYyU
// :
// "Hello"
// -NGkthPJBUcw3XtErl9Y
// :
// "please comment with name 🙏"
// -NGlOj2wU5EtE2sYflov
// :
// "Excellent "